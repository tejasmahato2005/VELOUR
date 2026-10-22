-- ============================================================================
-- VELOUR — UPI / Google Pay payment fields
--
-- Adds `payment_status` and `payment_method` to public.orders and hardens the
-- table so that a customer can NEVER mark their own order as paid.
--
-- Trust model:
--   * Client traffic (anon / authenticated) is subject to RLS.
--   * Admin traffic (project_admin, used by the InsForge CLI / service key)
--     has BYPASSRLS and is the ONLY actor allowed to confirm a payment.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. Payment columns
-- ---------------------------------------------------------------------------
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS payment_status text NOT NULL DEFAULT 'unpaid',
  ADD COLUMN IF NOT EXISTS payment_method text NOT NULL DEFAULT 'upi';

-- ---------------------------------------------------------------------------
-- 2. Value constraints
-- ---------------------------------------------------------------------------
ALTER TABLE public.orders
  DROP CONSTRAINT IF EXISTS orders_status_check;
ALTER TABLE public.orders
  ADD CONSTRAINT orders_status_check
  CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered'));

ALTER TABLE public.orders
  DROP CONSTRAINT IF EXISTS orders_payment_status_check;
ALTER TABLE public.orders
  ADD CONSTRAINT orders_payment_status_check
  CHECK (payment_status IN ('unpaid', 'paid', 'failed', 'refunded'));

ALTER TABLE public.orders
  DROP CONSTRAINT IF EXISTS orders_payment_method_check;
ALTER TABLE public.orders
  ADD CONSTRAINT orders_payment_method_check
  CHECK (payment_method IN ('upi'));

-- ---------------------------------------------------------------------------
-- 3. Force initial payment state on INSERT
--
-- A BEFORE INSERT trigger is used rather than relying on the column default so
-- that a client cannot smuggle in status='confirmed' / payment_status='paid'
-- by sending those values in the insert body. The trigger overrides whatever
-- the client sent with the only legal starting state.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.orders_force_payment_defaults()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.status := 'pending';
  NEW.payment_status := 'unpaid';
  NEW.payment_method := 'upi';
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS orders_force_payment_defaults ON public.orders;
CREATE TRIGGER orders_force_payment_defaults
  BEFORE INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.orders_force_payment_defaults();

-- ---------------------------------------------------------------------------
-- 4. Guard protected fields on UPDATE
--
-- RLS already blocks all client updates (there is no UPDATE policy for the
-- public role). This trigger is defence in depth: if an UPDATE policy is ever
-- added later, an authenticated customer still cannot move their own order
-- along the status/payment ladder, nor change the amount charged.
--
-- auth.uid() IS NOT NULL identifies an end-user session. Admin traffic
-- (project_admin / service key) has auth.uid() IS NULL and bypasses RLS, so
-- it is unaffected.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.orders_guard_protected_fields()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF auth.uid() IS NOT NULL THEN
    IF NEW.payment_status IS DISTINCT FROM OLD.payment_status
       OR NEW.payment_method IS DISTINCT FROM OLD.payment_method
       OR NEW.status IS DISTINCT FROM OLD.status
       OR NEW.total IS DISTINCT FROM OLD.total THEN
      RAISE EXCEPTION
        'Order status and payment fields cannot be modified by the customer.';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS orders_guard_protected_fields ON public.orders;
CREATE TRIGGER orders_guard_protected_fields
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.orders_guard_protected_fields();

-- ---------------------------------------------------------------------------
-- 5. RLS — customers read and create only their own orders
--
-- There is deliberately NO UPDATE policy for the public role: a customer can
-- never write status / payment_status / payment_method / total.
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
CREATE POLICY "Users can view their own orders"
  ON public.orders
  FOR SELECT
  TO public
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own orders" ON public.orders;
CREATE POLICY "Users can insert their own orders"
  ON public.orders
  FOR INSERT
  TO public
  WITH CHECK (auth.uid() = user_id);

-- Make sure no client-facing UPDATE policy survives from earlier work.
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can cancel their own orders" ON public.orders;

-- ---------------------------------------------------------------------------
-- 6. Trusted payment verification
--
-- The ONLY supported way to mark an order paid. SECURITY DEFINER so it can
-- write the table regardless of the caller's RLS context, and revoked from
-- anon / authenticated / public so no browser client can call it.
--
-- Executed by an administrator with the InsForge service key, e.g.
--   npx -y @insforge/cli db rpc verify_order_payment '{"p_order_id":"<uuid>"}'
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.verify_order_payment(p_order_id uuid)
RETURNS public.orders
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  updated public.orders;
BEGIN
  UPDATE public.orders
  SET status = 'confirmed',
      payment_status = 'paid'
  WHERE id = p_order_id
    AND payment_status = 'unpaid'
  RETURNING * INTO updated;

  IF updated IS NULL THEN
    RAISE EXCEPTION
      'Order % not found, or its payment was already finalised.', p_order_id;
  END IF;

  RETURN updated;
END;
$$;

REVOKE ALL ON FUNCTION public.verify_order_payment(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.verify_order_payment(uuid) FROM anon;
REVOKE ALL ON FUNCTION public.verify_order_payment(uuid) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.verify_order_payment(uuid) TO project_admin;

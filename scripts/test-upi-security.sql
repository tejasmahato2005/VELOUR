DO $$
-- ============================================================================
-- VELOUR — UPI payment security regression test (read-only in effect)
--
-- Simulates real PostgREST client sessions by setting `request.jwt.claims`
-- and switching ROLE, exactly the way a browser request is evaluated.
--
-- Every mutation performed here is deliberately rolled back: the block ends
-- with a RAISE EXCEPTION, which aborts the enclosing transaction, so this
-- script can never leave a paid order or a stray row behind.
--
-- A non-zero exit code is the EXPECTED outcome — read the error message.
--
-- Run with:
--   npx -y @insforge/cli db query "$(cat scripts/test-upi-security.sql)"
-- ============================================================================
DECLARE
  v_owner   uuid := '3d04847f-940e-431c-9e6e-7c0da1c32b14';
  v_other   uuid := '3d309da3-d907-4555-9a40-a5820a32a15f';
  v_order   uuid := '9c0201f6-922c-47bb-9220-183051ef290b';

  v_n        int;
  v_status   text;
  v_pstatus  text;
  v_pmethod  text;
  v_other_order uuid;
  v_msg      text := '';
BEGIN
  -- -------------------------------------------------------------------------
  -- TEST 0 — a second customer's order exists (fixture), owned by v_other
  -- -------------------------------------------------------------------------
  INSERT INTO public.orders (user_id, items, subtotal, shipping, total, status,
                             payment_status, payment_method, contact, shipping_address)
  VALUES (v_other, '[]'::jsonb, 1, 0, 1, 'pending', 'unpaid', 'upi', '{}'::jsonb, '{}'::jsonb)
  RETURNING id INTO v_other_order;

  -- -------------------------------------------------------------------------
  -- TEST 1 — authenticated customer CANNOT mark their own order paid
  -- -------------------------------------------------------------------------
  EXECUTE 'SET LOCAL request.jwt.claims = '
        || quote_literal(json_build_object('sub', v_owner::text, 'role', 'authenticated')::text);
  EXECUTE 'SET LOCAL ROLE authenticated';

  UPDATE public.orders
     SET payment_status = 'paid', status = 'confirmed'
   WHERE id = v_order;
  GET DIAGNOSTICS v_n = ROW_COUNT;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 1 FAIL: customer UPDATE touched % row(s)', v_n;
  END IF;
  v_msg := v_msg || 'TEST 1 PASS: customer UPDATE affected 0 rows (no UPDATE policy)' || chr(10);

  -- -------------------------------------------------------------------------
  -- TEST 2 — the order is still pending / unpaid
  -- -------------------------------------------------------------------------
  SELECT status, payment_status, payment_method
    INTO v_status, v_pstatus, v_pmethod
    FROM public.orders WHERE id = v_order;

  IF v_status <> 'pending' OR v_pstatus <> 'unpaid' THEN
    RAISE EXCEPTION 'TEST 2 FAIL: order became %/%', v_status, v_pstatus;
  END IF;
  v_msg := v_msg || 'TEST 2 PASS: order still ' || v_status || '/' || v_pstatus
                || '/' || v_pmethod || chr(10);

  -- -------------------------------------------------------------------------
  -- TEST 3 — customer CANNOT read another customer's order
  -- -------------------------------------------------------------------------
  SELECT count(*) INTO v_n FROM public.orders WHERE id = v_other_order;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 3 FAIL: customer read % foreign order(s)', v_n;
  END IF;
  v_msg := v_msg || 'TEST 3 PASS: foreign order invisible to customer' || chr(10);

  -- -------------------------------------------------------------------------
  -- TEST 4 — customer CANNOT update or delete a foreign order
  -- -------------------------------------------------------------------------
  UPDATE public.orders SET total = 999 WHERE id = v_other_order;
  GET DIAGNOSTICS v_n = ROW_COUNT;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 4 FAIL: customer updated % foreign order(s)', v_n;
  END IF;

  DELETE FROM public.orders WHERE id = v_other_order;
  GET DIAGNOSTICS v_n = ROW_COUNT;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 4 FAIL: customer deleted % foreign order(s)', v_n;
  END IF;
  v_msg := v_msg || 'TEST 4 PASS: foreign order not updatable/deletable' || chr(10);

  -- -------------------------------------------------------------------------
  -- TEST 5 — INSERT trigger forces pending/unpaid/upi even if the client
  --           tries to smuggle in a paid status
  -- -------------------------------------------------------------------------
  INSERT INTO public.orders (user_id, items, subtotal, shipping, total, status,
                             payment_status, payment_method, contact, shipping_address)
  VALUES (v_owner, '[]'::jsonb, 1, 0, 1, 'confirmed', 'paid', 'upi',
          '{}'::jsonb, '{}'::jsonb)
  RETURNING id INTO v_other_order;

  SELECT status, payment_status, payment_method
    INTO v_status, v_pstatus, v_pmethod
    FROM public.orders WHERE id = v_other_order;

  IF v_status <> 'pending' OR v_pstatus <> 'unpaid' OR v_pmethod <> 'upi' THEN
    RAISE EXCEPTION 'TEST 5 FAIL: insert kept %/%/%', v_status, v_pstatus, v_pmethod;
  END IF;
  v_msg := v_msg || 'TEST 5 PASS: insert forced ' || v_status || '/' || v_pstatus
                || '/' || v_pmethod || chr(10);

  -- -------------------------------------------------------------------------
  -- TEST 6 — customer CANNOT execute the admin verification function
  -- -------------------------------------------------------------------------
  BEGIN
    EXECUTE 'SELECT public.verify_order_payment(''' || v_order::text || '''::uuid)';
    RAISE EXCEPTION 'TEST 6 FAIL: customer executed verify_order_payment';
  EXCEPTION
    WHEN insufficient_privilege THEN
      v_msg := v_msg || 'TEST 6 PASS: verify_order_payment denied for customer' || chr(10);
    WHEN OTHERS THEN
      IF SQLERRM LIKE '%permission denied%' THEN
        v_msg := v_msg || 'TEST 6 PASS: verify_order_payment denied for customer' || chr(10);
      ELSE
        RAISE;
      END IF;
  END;

  -- -------------------------------------------------------------------------
  -- TEST 7 — an ANONYMOUS client sees nothing and cannot write anything
  --
  -- A real unauthenticated PostgREST request carries no JWT, so the claims
  -- GUC is cleared here before switching ROLE.
  -- -------------------------------------------------------------------------
  EXECUTE 'SET LOCAL request.jwt.claims = ' || quote_literal('');
  EXECUTE 'SET LOCAL ROLE anon';

  SELECT count(*) INTO v_n FROM public.orders;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 7 FAIL: anon read % order(s)', v_n;
  END IF;

  UPDATE public.orders SET payment_status = 'paid';
  GET DIAGNOSTICS v_n = ROW_COUNT;
  IF v_n <> 0 THEN
    RAISE EXCEPTION 'TEST 7 FAIL: anon updated % order(s)', v_n;
  END IF;
  v_msg := v_msg || 'TEST 7 PASS: anon sees 0 orders, writes 0 rows' || chr(10);

  -- -------------------------------------------------------------------------
  -- Report, then abort the transaction so nothing is persisted.
  -- -------------------------------------------------------------------------
  RAISE EXCEPTION E'\nALL TESTS PASSED\n%', v_msg;
END $$;

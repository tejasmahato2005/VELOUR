"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { money } from "@/lib/format";
import { insforge, getCurrentUser } from "@/lib/insforge";
import { IconCheck, IconShield } from "@/components/Icons";

interface Order {
  id: string;
  user_id: string;
  total: number;
  status: string;
  payment_status: string;
  payment_method: string;
  created_at: string;
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function PaymentReturnInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = (searchParams.get("orderId") ?? "").trim();

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const me = await getCurrentUser();
      if (cancelled) return;

      if (!me) {
        router.push(
          `/login?callbackUrl=${encodeURIComponent(
            `/payment/return${orderId ? `?orderId=${encodeURIComponent(orderId)}` : ""}`
          )}`
        );
        return;
      }

      if (!orderId) {
        setError("No order reference was supplied.");
        setLoading(false);
        return;
      }

      if (!UUID_RE.test(orderId)) {
        setError("That order reference is not valid.");
        setLoading(false);
        return;
      }

      try {
        const { data, error: err } = await insforge.database
          .from("orders")
          .select("id,user_id,total,status,payment_status,payment_method,created_at")
          .eq("id", orderId)
          .maybeSingle();

        if (cancelled) return;

        if (err) {
          setError(err.message || "Could not load this order.");
        } else if (!data) {
          setError("We could not find this order for your account.");
        } else {
          const row = data as Order;
          if (row.user_id !== me.id) {
            setError("We could not find this order for your account.");
          } else {
            setOrder(row);
          }
        }
      } catch {
        setError("Could not load this order.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [orderId, router]);

  if (loading) {
    return (
      <div className="section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="subheading">Checking your order...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="subheading">Payment</span>
          <h1 className="heading-display" style={{ marginTop: "8px", marginBottom: "16px" }}>
            Unable to Load Order
          </h1>
          <p className="lead-text" style={{ maxWidth: "440px", margin: "0 auto 32px" }}>
            {error}
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/profile" className="btn btn-primary">
              Return to Profile
            </Link>
            <Link href="/women" className="btn btn-secondary">
              Return to Store
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!order) return null;

  const isPaid = order.payment_status === "paid";

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            padding: "clamp(28px, 5vw, 56px)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: isPaid ? "var(--accent-green)" : "var(--accent-gold-dark)",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <IconCheck size={26} />
          </div>

          <span className="subheading" style={{ color: "var(--accent-gold-dark)" }}>
            {isPaid ? "Payment Verified" : "Payment Awaiting Verification"}
          </span>
          <h1 className="heading-display" style={{ marginTop: "8px", marginBottom: "16px" }}>
            {isPaid
              ? "Thank You for Your Order"
              : "We've Noted Your Return"}
          </h1>

          <p className="lead-text" style={{ maxWidth: "540px", margin: "0 auto 28px" }}>
            {isPaid
              ? "Your payment has been confirmed and your order is now being prepared at our atelier."
              : "Your order is saved and awaiting payment verification. A UPI deep link does not report back to our store automatically, so our team verifies each transfer against our bank records before an order is confirmed."}
          </p>

          <div
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--border-light)",
              padding: "20px",
              maxWidth: "480px",
              margin: "0 auto 32px",
              textAlign: "left",
              fontSize: "0.85rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", gap: "16px" }}>
              <span style={{ color: "var(--text-muted)" }}>Order ID</span>
              <strong style={{ letterSpacing: "0.06em", wordBreak: "break-all", textAlign: "right" }}>
                {order.id}
              </strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "var(--text-muted)" }}>Amount</span>
              <strong style={{ fontVariantNumeric: "tabular-nums" }}>{money(order.total)}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "var(--text-muted)" }}>Payment Method</span>
              <span style={{ fontWeight: 600, textTransform: "uppercase" }}>UPI</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "var(--text-muted)" }}>Order Status</span>
              <span style={{ fontWeight: 600, textTransform: "uppercase" }}>{order.status}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "8px",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>Payment Status</span>
              <span
                style={{
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: isPaid ? "var(--accent-green)" : "var(--accent-gold-dark)",
                }}
              >
                {order.payment_status}
              </span>
            </div>
          </div>

          {!isPaid && (
            <p
              style={{
                maxWidth: "520px",
                margin: "0 auto 28px",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              If you have not yet paid, you can still complete this order from the
              payment page.
            </p>
          )}

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/profile" className="btn btn-primary">
              Return to Profile
            </Link>
            {!isPaid && (
              <Link
                href={`/payment/${encodeURIComponent(order.id)}`}
                className="btn btn-secondary"
              >
                Back to Payment
              </Link>
            )}
            <Link href="/women" className="btn btn-ghost">
              Continue Shopping
            </Link>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            <IconShield size={14} /> Payments are verified by our team against bank records
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentReturnPage() {
  return (
    <Suspense
      fallback={
        <div className="section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p className="subheading">Checking your order...</p>
        </div>
      }
    >
      <PaymentReturnInner />
    </Suspense>
  );
}

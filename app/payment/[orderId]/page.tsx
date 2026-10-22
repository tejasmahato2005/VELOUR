"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { money } from "@/lib/format";
import { insforge, getCurrentUser } from "@/lib/insforge";
import { getUpiConfig, getUpiConfigError, buildUpiUri } from "@/lib/upi";
import { IconCheck, IconShield, IconTruck } from "@/components/Icons";

interface Order {
  id: string;
  user_id: string;
  total: number;
  status: string;
  payment_status: string;
  payment_method: string;
  created_at: string;
}

export default function PaymentPage() {
  const params = useParams<{ orderId: string }>();
  const router = useRouter();
  const orderId = params?.orderId ?? "";

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [qrError, setQrError] = useState<string | null>(null);

  const upiConfig = getUpiConfig();
  const configError = upiConfig ? null : getUpiConfigError();

  // Load the order and confirm it belongs to the signed-in customer.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const me = await getCurrentUser();
      if (cancelled) return;

      if (!me) {
        router.push(`/login?callbackUrl=${encodeURIComponent(`/payment/${orderId}`)}`);
        return;
      }

      if (!orderId) {
        setError("No order reference was supplied.");
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
          // Either the order does not exist, or RLS hides it because it
          // belongs to a different customer. Both are reported the same way
          // so the page does not leak the existence of other customers' orders.
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

  // Build the UPI deep link and render it as a QR code.
  const upiUri =
    order && upiConfig
      ? buildUpiUri(upiConfig, {
          amount: Number(order.total),
          orderReference: order.id,
        })
      : null;

  useEffect(() => {
    if (!upiUri) return;
    let cancelled = false;

    (async () => {
      try {
        const QRCode = (await import("qrcode")).default;
        const dataUrl = await QRCode.toDataURL(upiUri, {
          width: 240,
          margin: 1,
          errorCorrectionLevel: "M",
          color: { dark: "#16130f", light: "#ffffff" },
        });
        if (!cancelled) setQrDataUrl(dataUrl);
      } catch {
        if (!cancelled) {
          setQrError("The QR code could not be generated. Please use the Pay with GPay button instead.");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [upiUri]);

  if (loading) {
    return (
      <div className="section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="subheading">Preparing your payment...</p>
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
              View Order History
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

  const alreadyPaid = order.payment_status === "paid";

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <header style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="subheading">Secure Payment</span>
          <h1 className="heading-display" style={{ marginTop: "6px" }}>
            Complete Your Payment
          </h1>
        </header>

        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            padding: "clamp(24px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Order summary */}
          <div>
            <h2 className="heading-3" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "10px", marginBottom: "18px" }}>
              Order Details
            </h2>

            <div style={{ fontSize: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "var(--text-muted)" }}>Order ID</span>
                <strong style={{ letterSpacing: "0.06em", wordBreak: "break-all", textAlign: "right" }}>
                  {order.id}
                </strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "var(--text-muted)" }}>Amount Due</span>
                <strong style={{ fontVariantNumeric: "tabular-nums" }}>{money(order.total)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "var(--text-muted)" }}>Payment Method</span>
                <span style={{ fontWeight: 600, textTransform: "uppercase" }}>UPI</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "var(--text-muted)" }}>Order Status</span>
                <span style={{ fontWeight: 600, textTransform: "uppercase" }}>{order.status}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "var(--text-muted)" }}>Payment Status</span>
                <span
                  style={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: order.payment_status === "paid" ? "var(--accent-green)" : "var(--accent-gold-dark)",
                  }}
                >
                  {order.payment_status}
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "18px 20px",
                backgroundColor: "var(--bg-subtle)",
                border: "1px solid var(--border-light)",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "10px" }}>Pay to</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "var(--text-muted)" }}>Merchant Name</span>
                <strong>{upiConfig ? upiConfig.payeeName : "—"}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>UPI ID</span>
                <strong style={{ wordBreak: "break-all", textAlign: "right" }}>
                  {upiConfig ? upiConfig.upiId : "—"}
                </strong>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <IconShield size={14} /> Encrypted checkout
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <IconTruck size={14} /> Dispatch in 3–5 days
              </span>
            </div>
          </div>

          {/* Pay panel */}
          <div style={{ textAlign: "center" }}>
            {configError ? (
              <div
                style={{
                  border: "1px solid var(--accent-red)",
                  backgroundColor: "#fbeaea",
                  padding: "22px 20px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--accent-red)", marginBottom: "8px" }}>
                  Payment configuration missing
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {configError}
                </p>
                <Link
                  href="/profile"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: "16px" }}
                >
                  View Order History
                </Link>
              </div>
            ) : alreadyPaid ? (
              <div
                style={{
                  border: "1px solid var(--accent-green)",
                  backgroundColor: "#eef5f1",
                  padding: "28px 20px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-green)",
                    color: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <IconCheck size={26} />
                </div>
                <div style={{ fontWeight: 600, marginBottom: "6px" }}>Payment received</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  This order has already been marked as paid. Thank you for your order.
                </p>
                <Link href="/profile" className="btn btn-primary btn-sm" style={{ marginTop: "18px" }}>
                  View Order History
                </Link>
              </div>
            ) : (
              <>
                <h2 className="heading-3" style={{ marginBottom: "6px" }}>
                  Pay {money(order.total)}
                </h2>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  Scan the QR code with Google Pay or any UPI app, or use the button below.
                </p>

                {qrDataUrl ? (
                  <div
                    style={{
                      display: "inline-block",
                      padding: "14px",
                      backgroundColor: "#fff",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={qrDataUrl}
                      alt={`UPI QR code for order ${order.id}`}
                      width={220}
                      height={220}
                      style={{ display: "block", width: "220px", height: "220px" }}
                    />
                  </div>
                ) : qrError ? (
                  <p style={{ fontSize: "0.8rem", color: "var(--accent-red)", marginBottom: "16px" }}>
                    {qrError}
                  </p>
                ) : (
                  <div
                    style={{
                      width: "248px",
                      height: "248px",
                      margin: "0 auto 16px",
                      border: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      fontSize: "0.78rem",
                    }}
                  >
                    Generating QR code…
                  </div>
                )}

                {upiUri && (
                  <div style={{ marginTop: "22px" }}>
                    <a
                      href={upiUri}
                      className="btn btn-primary btn-full"
                      style={{
                        padding: "16px",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      Pay with GPay
                    </a>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        marginTop: "12px",
                        lineHeight: 1.6,
                      }}
                    >
                      Choose <strong>Google Pay</strong> — or any compatible UPI app such as
                      PhonePe, Paytm or BHIM — to complete your payment of{" "}
                      <strong>{money(order.total)}</strong>. The payment reference sent to
                      your UPI app is your order ID.
                    </p>
                  </div>
                )}

                <div
                  style={{
                    marginTop: "26px",
                    paddingTop: "22px",
                    borderTop: "1px solid var(--border-light)",
                  }}
                >
                  <Link
                    href={`/payment/return?orderId=${encodeURIComponent(order.id)}`}
                    className="btn btn-secondary btn-full"
                    style={{ padding: "14px", fontSize: "0.85rem", textDecoration: "none", display: "block" }}
                  >
                    I&apos;ve completed payment — return to store
                  </Link>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "12px",
                      lineHeight: 1.6,
                    }}
                  >
                    Your order is confirmed once payment has been verified against our
                    records. If you have just paid, it may take a few minutes for the
                    status to update.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

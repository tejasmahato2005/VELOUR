"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { money } from "@/lib/format";
import { insforge, getCurrentUser } from "@/lib/insforge";
import { useCart } from "@/lib/store";

interface Order {
  id: string;
  user_id: string;
  items: Array<{ productId: string; name: string; size: string; qty: number; price: number }>;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  payment_status: string;
  payment_method: string;
  contact: { name?: string; email?: string; phone?: string };
  shipping_address: { street?: string; city?: string; zip?: string; country?: string };
  payment_receipt_url: string | null;
  created_at: string;
}

const STATUS_ORDER: string[] = ["pending", "confirmed", "shipped", "delivered"];

function OrderRow({ order }: { order: Order }) {
  const currentIndex = STATUS_ORDER.indexOf(order.status);
  const itemCount = order.items.reduce((a, i) => a + i.qty, 0);
  const isPaid = order.payment_status === "paid";

  return (
    <div style={{ border: "1px solid var(--border-light)", borderRadius: 10, padding: "20px", marginBottom: "20px", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "16px" }}>
        <div style={{ minWidth: 140 }}>
          <div style={{ fontWeight: 600, letterSpacing: "0.05em" }}>{order.id}</div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
            {new Date(order.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>
          <div
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "3px 10px",
              borderRadius: 999,
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: isPaid ? "var(--accent-green)" : "var(--accent-gold-dark)",
              backgroundColor: isPaid ? "#eef5f1" : "var(--bg-subtle)",
              border: `1px solid ${isPaid ? "var(--accent-green)" : "var(--accent-gold-dark)"}`,
            }}
          >
            {isPaid ? "Paid" : "Unpaid"}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{money(order.total)}</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
            {order.payment_method?.toUpperCase() ?? "UPI"}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "18px" }}>
        <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "10px" }}>Items ({itemCount})</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {order.items.map((item) => (
            <div key={`${item.productId}-${item.size}`} style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "var(--bg-subtle)", borderRadius: 8, padding: "6px 10px", fontSize: "0.82rem" }}>
              <span style={{ fontWeight: 600 }}>{item.name}</span>
              <span style={{ color: "var(--text-muted)" }}>· Size {item.size}</span>
              <span style={{ color: "var(--text-muted)" }}>· Qty {item.qty}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "24px" }}>
        <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "10px" }}>Order Status</div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "0.82rem", marginBottom: "16px" }}>
          <span>
            <span style={{ color: "var(--text-muted)" }}>Fulfilment: </span>
            <strong style={{ textTransform: "uppercase" }}>{order.status}</strong>
          </span>
          <span>
            <span style={{ color: "var(--text-muted)" }}>Payment: </span>
            <strong
              style={{
                textTransform: "uppercase",
                color: isPaid ? "var(--accent-green)" : "var(--accent-gold-dark)",
              }}
            >
              {order.payment_status ?? "unpaid"}
            </strong>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative" }}>
          {STATUS_ORDER.map((status, idx) => {
            const isCurrent = idx === currentIndex;
            const isDone = idx < currentIndex;
            return (
              <div key={status} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {idx > 0 && (
                  <div style={{ position: "absolute", left: `calc(${((idx - 1) / (STATUS_ORDER.length - 1)) * 100}% + 14px)`, top: "26px", width: `calc(${100 / (STATUS_ORDER.length - 1)}% - 28px)`, height: "2px", backgroundColor: isDone || isCurrent ? "var(--text-primary)" : "var(--border-light)" }} />
                )}
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: `2px solid ${isDone || isCurrent ? "var(--text-primary)" : "var(--border-light)"}`, backgroundColor: isDone ? "var(--text-primary)" : isCurrent ? "var(--accent-gold-dark)" : "var(--bg-primary)", color: isDone || isCurrent ? "var(--bg-primary)" : "var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, zIndex: 2 }}>
                  {isDone ? "✓" : String(idx + 1)}
                </div>
                <div style={{ marginTop: "6px", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: isDone || isCurrent ? "var(--text-primary)" : "var(--text-muted)", whiteSpace: "nowrap" }}>{status}</div>
              </div>
            );
          })}
        </div>
      </div>

      {!isPaid && (
        <div style={{ marginTop: "22px" }}>
          <Link
            href={`/payment/${encodeURIComponent(order.id)}`}
            className="btn btn-secondary btn-sm"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Complete Payment
          </Link>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { clearCart } = useCart();

  const [user, setUser] = useState<{ id: string; email: string; name?: string | null } | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const me = await getCurrentUser();
      if (cancelled) return;
      if (!me) {
        router.push("/login");
        return;
      }
      setUser({ id: me.id, email: me.email, name: me.profile?.name ?? undefined });
      try {
        const { data, error: err } = await insforge.database
          .from("orders")
          .select("*")
          .eq("user_id", me.id)
          .order("created_at", { ascending: false });
        if (cancelled) return;
        if (err) {
          setError(err.message || "Could not load orders.");
        } else {
          setOrders((data || []) as Order[]);
        }
      } catch {
        setError("Could not load orders.");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  const handleSignOut = useCallback(async () => {
    setSigningOut(true);
    try {
      await insforge.auth.signOut();
      clearCart();
      router.push("/login");
    } catch {
      setSigningOut(false);
    }
  }, [clearCart, router]);

  if (loading) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="subheading">Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--accent-red)" }}>{error}</p>
          <button onClick={() => setError(null)} className="btn btn-primary" style={{ marginTop: "16px" }}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span className="subheading">Client Portal</span>
            <h1 className="heading-display" style={{ marginTop: "6px" }}>My Account</h1>
          </div>
          <button onClick={handleSignOut} disabled={signingOut} className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.82rem" }}>
            {signingOut ? "Signing out…" : "Sign Out"}
          </button>
        </header>

        <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-light)", padding: "24px", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "var(--bg-subtle)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "1.1rem", color: "var(--text-primary)" }}>
              {(user?.name ?? user?.email)?.charAt(0)?.toUpperCase() ?? "?"}
            </span>
            <div>
              <div style={{ fontWeight: 600, fontSize: "1rem" }}>{user?.name || user?.email}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{user?.email}</div>
            </div>
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Manage your personal details and view your order history below.</div>
        </div>

        <h2 className="heading-3" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px", marginBottom: "20px" }}>Order History</h2>

        {orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }}>
            <p>No orders yet.</p>
            <p style={{ marginTop: "12px", fontSize: "0.85rem" }}>Your placed orders will appear here with their current status.</p>
          </div>
        ) : (
          <div>
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
            <div style={{ marginTop: "24px", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Order statuses are updated by our operations team. Pending → Confirmed → Shipped
              → Delivered reflects the fulfilment progress of each order, and an order is
              only Confirmed once its UPI payment has been verified.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

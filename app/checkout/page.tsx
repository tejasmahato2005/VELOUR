"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/store";
import { money } from "@/lib/format";
import { SafeImage } from "@/components/SafeImage";
import { IconShield, IconTruck } from "@/components/Icons";
import { insforge, getCurrentUser } from "@/lib/insforge";

const FREE_SHIPPING_THRESHOLD = 5;
const STANDARD_SHIPPING_FEE = 1;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, totalCount, clearCart, isHydrated } = useCart();

  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getCurrentUser().then((u) => {
      if (!cancelled) {
        setUser(u ? { id: u.id, email: u.email } : null);
        setUserLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!userLoaded && !user) return;
    if (!user) {
      router.push(`/login?callbackUrl=${encodeURIComponent("/checkout")}`);
    }
  }, [user, userLoaded, router]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isHydrated) {
    return (
      <div className="section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="subheading">Loading checkout...</p>
      </div>
    );
  }

  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const orderTotal = subtotal + shippingFee;

  // If cart is empty, prompt user
  if (items.length === 0) {
    return (
      <div className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="subheading">Checkout</span>
          <h1 className="heading-display" style={{ marginTop: "12px", marginBottom: "16px" }}>
            No Items in Checkout
          </h1>
          <p className="lead-text" style={{ maxWidth: "440px", margin: "0 auto 32px" }}>
            Your shopping bag is empty. Please select pieces from our collections before
            proceeding.
          </p>
          <Link href="/women" className="btn btn-primary">
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zip.trim()) newErrors.zip = "Postal code is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 100, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // 1. Insert the order row with item price snapshots.
      //    The order is created as pending/unpaid; payment is confirmed later
      //    by a trusted verification step, never by the client.
      const itemsSnapshot = items.map((item) => ({
        productId: item.productId,
        name: item.name,
        size: item.size,
        qty: item.quantity,
        price: item.price,
      }));

      const contact = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      };
      const shippingAddress = {
        street: formData.address.trim(),
        apartment: formData.apartment.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        zip: formData.zip.trim(),
        country: formData.country,
      };

      const { data: order, error: orderError } = await insforge.database
        .from("orders")
        .insert([
          {
            user_id: user?.id ?? null,
            items: itemsSnapshot,
            subtotal,
            shipping: shippingFee,
            total: orderTotal,
            status: "pending",
            payment_status: "unpaid",
            payment_method: "upi",
            contact,
            shipping_address: shippingAddress,
            payment_receipt_url: null,
          },
        ])
        .select()
        .single();

      if (orderError) {
        throw new Error(orderError.message || "Could not place order.");
      }

      clearCart();

      // 2. Hand the customer over to the UPI payment page.
      router.push(`/payment/${order.id}`);
    } catch (err: unknown) {
      setErrors({
        _form:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
      window.scrollTo({ top: 100, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container">
        <header className="listing-hero" style={{ borderBottom: "none", marginBottom: "24px", paddingBottom: "0" }}>
          <span className="subheading">Secure Checkout</span>
          <h1 className="heading-display" style={{ marginTop: "4px" }}>
            Complete Your Purchase
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="checkout-layout" noValidate>
          {/* Main Checkout Inputs Column */}
          <div>
            {/* 1. Contact Information */}
            <div style={{ marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "8px",
                  marginBottom: "20px",
                }}
              >
                <h2 className="heading-3">1. Contact Information</h2>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  {errors.firstName && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  {errors.lastName && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address (for order tracking) *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="name@domain.com"
                    required
                  />
                  {errors.email && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 98765 43210"
                    required
                  />
                  {errors.phone && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div style={{ marginBottom: "36px" }}>
              <h2
                className="heading-3"
                style={{
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "8px",
                  marginBottom: "20px",
                }}
              >
                2. Shipping Address
              </h2>

              <div className="form-group">
                <label htmlFor="country" className="form-label">
                  Country / Region
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-input"
                  style={{
                    borderRadius: 0,
                    appearance: "none",
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2316130f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                  }}
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Street Address *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="123 Atelier Avenue"
                  required
                />
                {errors.address && (
                  <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                    {errors.address}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="apartment" className="form-label">
                  Apartment, Suite, Unit (Optional)
                </label>
                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Apt 4B"
                />
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label htmlFor="city" className="form-label">
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  {errors.city && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.city}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="state" className="form-label">
                    State / Region
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zip" className="form-label">
                    ZIP Code *
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    value={formData.zip}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  {errors.zip && (
                    <span style={{ color: "var(--accent-red)", fontSize: "0.72rem" }}>
                      {errors.zip}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div style={{ marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "8px",
                  marginBottom: "20px",
                }}
              >
                <h2 className="heading-3">3. Payment Method</h2>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    backgroundColor: "var(--bg-subtle)",
                    fontWeight: 600,
                  }}
                >
                  UPI
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "18px 20px",
                  border: "1px solid var(--text-primary)",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "var(--text-primary)",
                    color: "var(--bg-primary)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    flexShrink: 0,
                  }}
                >
                  GPay
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    Google Pay / UPI
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Pay securely with Google Pay or any UPI app. You will be
                    redirected to complete your payment after placing the order.
                  </div>
                </div>
              </div>

              {errors._form && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "10px 14px",
                    backgroundColor: "#fbeaea",
                    border: "1px solid var(--accent-red)",
                    color: "var(--accent-red)",
                    fontSize: "0.8rem",
                    borderRadius: 6,
                  }}
                >
                  {errors._form}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-full"
              style={{ padding: "16px", fontSize: "0.85rem" }}
            >
              {isSubmitting
                ? "Placing order…"
                : `Place Order — ${money(orderTotal)}`}
            </button>
          </div>

          {/* Side Summary Panel */}
          <aside className="order-summary-box">
            <h2 className="heading-3" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px" }}>
              Order Items ({totalCount})
            </h2>

            {/* Compact items list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxHeight: "320px", overflowY: "auto" }}>
              {items.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "65px",
                      position: "relative",
                      flexShrink: 0,
                      backgroundColor: "var(--bg-subtle)",
                    }}
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="50px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      Size: {item.size} • Qty: {item.quantity}
                    </div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 600, marginTop: "2px" }}>
                      {money(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "16px" }}>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="summary-row" style={{ marginTop: "6px" }}>
                <span>Express Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <span style={{ color: "var(--accent-green)" }}>COMPLIMENTARY</span>
                  ) : (
                    money(shippingFee)
                  )}
                </span>
              </div>
              <div className="summary-row total">
                <span>Total Due</span>
                <span>{money(orderTotal)}</span>
              </div>
            </div>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconShield size={16} />
                <span>SSL Encrypted Checkout</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconTruck size={16} />
                <span>Dispatches Next Business Day</span>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

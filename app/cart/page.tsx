"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/store";
import { money } from "@/lib/format";
import { SafeImage } from "@/components/SafeImage";
import { IconTrash, IconMinus, IconPlus, IconArrowRight, IconShield, IconTruck } from "@/components/Icons";

const FREE_SHIPPING_THRESHOLD = 5;
const STANDARD_SHIPPING_FEE = 1;

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, totalCount, isHydrated } = useCart();

  if (!isHydrated) {
    return (
      <div className="section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="subheading">Loading your bag...</p>
      </div>
    );
  }

  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : STANDARD_SHIPPING_FEE;
  const orderTotal = subtotal + shippingFee;
  const shippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="subheading">Your Wardrobe Bag</span>
          <h1 className="heading-display" style={{ marginTop: "12px", marginBottom: "16px" }}>
            Your Bag is Empty
          </h1>
          <p className="lead-text" style={{ maxWidth: "480px", margin: "0 auto 32px" }}>
            Explore our curated collections of architectural outerwear, noble cashmere,
            and tailored trousers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/women" className="btn btn-primary">
              Shop Women
            </Link>
            <Link href="/men" className="btn btn-secondary">
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container">
        <header className="listing-hero" style={{ borderBottom: "none", marginBottom: "24px", paddingBottom: "0" }}>
          <span className="subheading">Checkout Process</span>
          <h1 className="heading-display" style={{ marginTop: "4px" }}>
            Shopping Bag ({totalCount})
          </h1>
        </header>

        {/* Free Shipping Progress Strip */}
        <div
          style={{
            backgroundColor: "var(--bg-subtle)",
            border: "1px solid var(--border-light)",
            padding: "16px 20px",
            marginBottom: "32px",
            fontSize: "0.82rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconTruck size={18} />
            <span>
              {shippingRemaining === 0 ? (
                <strong style={{ color: "var(--accent-green)" }}>
                  Congratulations! You qualify for complimentary worldwide express delivery.
                </strong>
              ) : (
                <>
                  Add <strong>{money(shippingRemaining)}</strong> more to unlock complimentary
                  worldwide express delivery.
                </>
              )}
            </span>
          </div>
          <div
            style={{
              width: "140px",
              height: "6px",
              backgroundColor: "var(--border-light)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                height: "100%",
                backgroundColor: "var(--text-primary)",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Main Cart Grid */}
        <div className="cart-layout">
          {/* Cart Items List */}
          <div>
            <div style={{ borderTop: "1px solid var(--border-light)" }}>
              {items.map((item) => (
                <div key={item.id} className="cart-row">
                  {/* Thumbnail */}
                  <div className="cart-row-img">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="90px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Details */}
                  <div className="cart-row-details">
                    <Link href={`/product/${item.productId}`}>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.2rem",
                          fontWeight: 400,
                        }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                      SIZE: <strong style={{ color: "var(--text-primary)" }}>{item.size}</strong>
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 500, marginTop: "4px" }}>
                      {money(item.price)}
                    </div>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "12px",
                    }}
                  >
                    <div className="qty-stepper">
                      <button
                        type="button"
                        className="qty-btn"
                        style={{ width: "32px", height: "32px" }}
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <IconMinus size={12} />
                      </button>
                      <span
                        className="qty-input"
                        style={{
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.82rem",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="qty-btn"
                        style={{ width: "32px", height: "32px" }}
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <IconPlus size={12} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId, item.size)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                      aria-label={`Remove ${item.name}`}
                    >
                      <IconTrash size={14} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "24px" }}>
              <Link href="/women" className="btn-ghost">
                &larr; Continue Exploring Collections
              </Link>
            </div>
          </div>

          {/* Order Summary Panel */}
          <aside className="order-summary-box">
            <h2 className="heading-3" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px" }}>
              Order Summary
            </h2>

            <div className="summary-row">
              <span>Subtotal ({totalCount} items)</span>
              <span>{money(subtotal)}</span>
            </div>

            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>
                {shippingFee === 0 ? (
                  <span style={{ color: "var(--accent-green)", fontWeight: 500 }}>
                    COMPLIMENTARY
                  </span>
                ) : (
                  money(shippingFee)
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Estimated Customs & Taxes</span>
              <span style={{ color: "var(--text-muted)" }}>Calculated at checkout</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>{money(orderTotal)}</span>
            </div>

            <Link href="/checkout" className="btn btn-primary btn-full" style={{ marginTop: "12px" }}>
              Proceed to Checkout <IconArrowRight size={14} />
            </Link>

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
                <span>Encrypted 256-bit checkout security</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconTruck size={16} />
                <span>Tracked courier delivery with signature</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { IconCheck } from "./Icons";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitted(true);
  };

  return (
    <section className="newsletter-strip" aria-label="Newsletter Subscription">
      <div className="container-narrow">
        <span className="subheading">Exclusive Access</span>
        <h2 className="heading-2" style={{ marginTop: "8px" }}>
          Join the VELOUR Archive
        </h2>
        <p
          className="lead-text"
          style={{ fontSize: "0.95rem", maxWidth: "460px", margin: "8px auto 0" }}
        >
          Receive private previews of seasonal capsules, editorial releases, and
          invitations to exclusive trunk shows.
        </p>

        {isSubmitted ? (
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "var(--bg-subtle)",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <IconCheck size={18} />
            <span>Thank you for subscribing to the VELOUR Archive.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

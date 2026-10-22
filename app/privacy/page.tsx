import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Terms — VELOUR",
  description: "Privacy policy, data protection, and terms of service for VELOUR.",
};

export default function PrivacyPage() {
  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <header className="listing-hero" style={{ borderBottom: "none", textAlign: "center", paddingBottom: "0" }}>
          <span className="subheading">Legal & Compliance</span>
          <h1 className="heading-display" style={{ marginTop: "8px", marginBottom: "16px" }}>
            Privacy Policy & Terms
          </h1>
          <p className="lead-text" style={{ maxWidth: "560px", margin: "0 auto" }}>
            Last revised: October 2026. How we protect your privacy and ensure transparent terms.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
            marginTop: "48px",
          }}
        >
          <section>
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
              1. Information Collection & Usage
            </h2>
            <p>
              VELOUR collects information you provide directly to us when placing an order, creating an
              account, or communicating with our client advisors. This data is strictly utilized to
              process fulfillment, secure payment verification, and deliver tailored client service.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
              2. Data Protection & Encryption
            </h2>
            <p>
              All transactional data transmitted through our store is encrypted using Transport Layer
              Security (TLS 1.3) with 256-bit encryption. We never store raw payment card data on our
              servers.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
              3. Terms of Service
            </h2>
            <p>
              By accessing the VELOUR website and placing orders, you agree to our standard terms of
              service. Product availability and pricing are subject to confirmation upon order
              acceptance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

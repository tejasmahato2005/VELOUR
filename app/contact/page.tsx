import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Concierge — VELOUR",
  description: "Connect with the VELOUR Client Concierge for sizing guidance, orders, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <header className="listing-hero" style={{ borderBottom: "none", textAlign: "center", paddingBottom: "0" }}>
          <span className="subheading">Client Services</span>
          <h1 className="heading-display" style={{ marginTop: "8px", marginBottom: "16px" }}>
            Connect with Concierge
          </h1>
          <p className="lead-text" style={{ maxWidth: "560px", margin: "0 auto" }}>
            Our client advisors are available to assist with sizing advice, styling consultations,
            and shipping queries.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            margin: "48px 0",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-light)",
              padding: "32px",
            }}
          >
            <span className="subheading">Direct Inquiries</span>
            <h3 className="heading-3" style={{ marginTop: "8px", marginBottom: "12px" }}>
              Concierge Email
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              concierge@velour-atelier.com
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>
              Response guaranteed within 24 hours.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-light)",
              padding: "32px",
            }}
          >
            <span className="subheading">Private Appointments</span>
            <h3 className="heading-3" style={{ marginTop: "8px", marginBottom: "12px" }}>
              Atelier Telephone
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              +1 (800) 924-1020
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>
              Monday – Friday, 9am – 6pm EST.
            </p>
          </div>
        </div>

        <section id="shipping" style={{ marginBottom: "32px" }}>
          <h2 className="heading-2" style={{ marginBottom: "12px" }}>
            Shipping & Customs
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Complimentary express delivery is provided on all orders exceeding ₹5. Orders placed
            before 2:00 PM EST dispatch same business day from our distribution facility. All
            international taxes and duties are calculated and collected directly at checkout.
          </p>
        </section>

        <section id="returns">
          <h2 className="heading-2" style={{ marginBottom: "12px" }}>
            Returns & Exchanges
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            We accept unworn, unwashed garments in original condition with all tags attached within
            30 days of delivery. Prepaid return courier labels are included in every dispatch box.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "About Us — VELOUR Atelier",
  description: "Learn about the philosophy, sustainable craftsmanship, and material origins of VELOUR.",
};

export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container-narrow">
        <header className="listing-hero" style={{ borderBottom: "none", textAlign: "center", paddingBottom: "0" }}>
          <span className="subheading">Atelier Philosophy</span>
          <h1 className="heading-display" style={{ marginTop: "8px", marginBottom: "16px" }}>
            The Essence of VELOUR
          </h1>
          <p className="lead-text" style={{ maxWidth: "620px", margin: "0 auto" }}>
            Founded on the belief that true luxury lies in restraint, architectural simplicity,
            and materials that grow richer with every season.
          </p>
        </header>

        <div style={{ position: "relative", width: "100%", height: "420px", margin: "48px 0" }}>
          <SafeImage
            src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1400&q=80"
            alt="VELOUR Design Studio Atelier"
            fill
            sizes="(max-width: 920px) 100vw, 920px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            fontSize: "1rem",
          }}
        >
          <section id="philosophy">
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
              Architectural Minimalism
            </h2>
            <p>
              VELOUR rejects the frantic cycle of disposable trends. Instead, each garment begins with
              geometric drape and silhouette exploration. From our double-faced Mongolian cashmere
              to combed Japanese selvedge denim, our textiles are selected for tactile resonance and
              lifelong resilience.
            </p>
          </section>

          <section id="sustainability">
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
              Sustainable Noble Materials
            </h2>
            <p>
              We partner exclusively with certified heritage mills across Biella, Portugal, and
              Okayama who observe strict environmental stewardship, zero toxic discharge, and humane
              animal welfare standards. Every shipment is packaged in 100% recyclable, FSC-certified
              unbleached card.
            </p>
          </section>

          <section id="stores">
            <h2 className="heading-2" style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
              Flagship Studios
            </h2>
            <p>
              Experience the tactile weight of the collection at our private appointments in Paris,
              Milan, and New York.
            </p>
          </section>

          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <Link href="/women" className="btn btn-primary">
              Explore the Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

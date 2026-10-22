import React from "react";
import Link from "next/link";
import { IconInstagram, IconPinterest } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Blurb Column */}
          <div style={{ maxWidth: "340px" }}>
            <div className="footer-brand">VELOUR</div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "var(--text-light-muted)",
                marginBottom: "20px",
              }}
            >
              A purveyor of modern, understated wardrobe essentials. Designed with
              sculptural proportion and crafted from enduring natural materials.
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Pinterest"
              >
                <IconPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li>
                <Link href="/women" className="footer-link">
                  Women’s Collection
                </Link>
              </li>
              <li>
                <Link href="/men" className="footer-link">
                  Men’s Collection
                </Link>
              </li>
              <li>
                <Link href="/women?sub=Coats%20%26%20Outerwear" className="footer-link">
                  Outerwear & Coats
                </Link>
              </li>
              <li>
                <Link href="/men?sub=Knitwear%20%26%20Sweaters" className="footer-link">
                  Merino & Cashmere
                </Link>
              </li>
              <li>
                <Link href="/women?sub=Dresses%20%26%20Jumpsuits" className="footer-link">
                  Silk Dresses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  About VELOUR
                </Link>
              </li>
              <li>
                <Link href="/about#sustainability" className="footer-link">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about#stores" className="footer-link">
                  Flagship Studios
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h4 className="footer-heading">Support & Legal</h4>
            <ul className="footer-links">
              <li>
                <Link href="/contact" className="footer-link">
                  Client Concierge
                </Link>
              </li>
              <li>
                <Link href="/contact#shipping" className="footer-link">
                  Shipping & Customs
                </Link>
              </li>
              <li>
                <Link href="/contact#returns" className="footer-link">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <span>&copy; {currentYear} VELOUR Atelier Ltd. All rights reserved.</span>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" className="footer-link" style={{ fontSize: "0.72rem" }}>
              Privacy Notice
            </Link>
            <Link href="/privacy" className="footer-link" style={{ fontSize: "0.72rem" }}>
              Terms of Service
            </Link>
            <Link href="/privacy" className="footer-link" style={{ fontSize: "0.72rem" }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

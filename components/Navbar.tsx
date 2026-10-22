"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/lib/store";
import { PRODUCTS, type Product } from "@/lib/data";
import { money } from "@/lib/format";
import {
  IconSearch,
  IconBag,
  IconUser,
  IconMenu,
  IconClose,
  IconArrowRight,
} from "./Icons";
import { SafeImage } from "./SafeImage";
import { getCurrentUser } from "@/lib/insforge";

const SEARCH_SUGGESTIONS = [
  "Overcoat",
  "Cashmere",
  "Trousers",
  "Merino",
  "Blazer",
  "Denim",
  "Dress",
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalCount, isHydrated } = useCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Reflect auth state in the account navigation (links to /profile when signed in).
  useEffect(() => {
    let cancelled = false;
    getCurrentUser().then((u) => {
      if (!cancelled) {
        setUser(u ? { email: u.email } : null);
        setUserLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Focus search input when search overlay opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSearchQuery("");
      setSearchResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  // Handle escape key to close search or drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Live search filtering
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSearchResults([]);
      return;
    }
    const matches = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 4);
    setSearchResults(matches);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setIsSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar" role="region" aria-label="Announcement">
        <span>Free worldwide shipping on orders over ₹5 • Use code VELOUR10 for 10% off</span>
      </div>

      {/* Main Sticky Navbar */}
      <header className="navbar-header">
        <div className="container">
          <div className="navbar-inner">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-hamburger nav-icon-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <IconMenu size={22} />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" aria-label="Main Navigation">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/women"
                className={`nav-link ${pathname.startsWith("/women") ? "active" : ""}`}
              >
                Women
              </Link>
              <Link
                href="/men"
                className={`nav-link ${pathname.startsWith("/men") ? "active" : ""}`}
              >
                Men
              </Link>
            </nav>

            {/* Brand Logo */}
            <Link href="/" className="nav-brand" aria-label="VELOUR Home">
              VELOUR
            </Link>

            {/* Nav Actions (Search, Account, Cart) */}
            <div className="nav-actions">
              <button
                type="button"
                className="nav-icon-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <IconSearch size={20} />
              </button>

              {user ? (
                <Link
                  href="/profile"
                  className="nav-icon-btn"
                  aria-label="My account"
                  style={{ position: "relative" }}
                >
                  <IconUser size={20} />
                  <span
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-green)",
                      border: "2px solid var(--bg-primary)",
                      display: "block",
                    }}
                  />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="nav-icon-btn"
                  aria-label="Sign in or create account"
                >
                  <IconUser size={20} />
                </Link>
              )}

              <Link
                href="/cart"
                className="nav-icon-btn"
                aria-label={`Shopping bag with ${isHydrated ? totalCount : 0} items`}
              >
                <IconBag size={20} />
                {isHydrated && totalCount > 0 && (
                  <span className="cart-badge">{totalCount}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div
          className="search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Search Products"
        >
          <div className="search-header">
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              VELOUR
            </span>
            <button
              type="button"
              className="nav-icon-btn"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search overlay"
            >
              <IconClose size={24} />
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="search-input-wrapper">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments, knitwear, outerwear..."
              className="search-input-big"
              aria-label="Search keyword"
            />
            <button
              type="submit"
              className="nav-icon-btn"
              aria-label="Submit search"
            >
              <IconArrowRight size={24} />
            </button>
          </form>

          <div className="search-suggestions">
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Popular Inquiries
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {SEARCH_SUGGESTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSuggestionClick(item)}
                  className="filter-pill"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Live Matches Preview */}
            {searchResults.length > 0 && (
              <div style={{ marginTop: "36px" }}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                    fontWeight: 600,
                  }}
                >
                  Live Suggestions
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "64px",
                          position: "relative",
                          flexShrink: 0,
                          backgroundColor: "var(--bg-subtle)",
                        }}
                      >
                        <SafeImage
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="48px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            marginTop: "2px",
                          }}
                        >
                          {money(product.price)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div style={{ marginTop: "24px", textAlign: "center" }}>
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="btn btn-secondary btn-sm"
                  >
                    View All Results ({searchResults.length})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
          }}
        >
          {/* Backdrop */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            style={{
              position: "relative",
              width: "82%",
              maxWidth: "340px",
              height: "100%",
              backgroundColor: "var(--bg-primary)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
              animation: "slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border-light)",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    letterSpacing: "0.16em",
                  }}
                >
                  VELOUR
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <IconClose size={22} />
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  fontSize: "1rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                <Link
                  href="/"
                  style={{
                    fontWeight: pathname === "/" ? 600 : 400,
                    color: pathname === "/" ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/women"
                  style={{
                    fontWeight: pathname.startsWith("/women") ? 600 : 400,
                    color: pathname.startsWith("/women") ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  Women
                </Link>
                <Link
                  href="/men"
                  style={{
                    fontWeight: pathname.startsWith("/men") ? 600 : 400,
                    color: pathname.startsWith("/men") ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  Men
                </Link>
                <Link href="/cart" style={{ color: "var(--text-secondary)" }}>
                  Bag ({isHydrated ? totalCount : 0})
                </Link>
                <Link href={user ? "/profile" : "/login"} style={{ color: "var(--text-secondary)" }}>
                  {user ? "My Account / Profile" : "Account / Sign In"}
                </Link>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-light)",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              <Link href="/about">About VELOUR</Link>
              <Link href="/contact">Client Services</Link>
              <Link href="/privacy">Privacy & Terms</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

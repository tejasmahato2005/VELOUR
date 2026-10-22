import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { getFeatured, getNewArrivals, getTrending } from "@/lib/api";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterStrip } from "@/components/NewsletterStrip";
import { SafeImage } from "@/components/SafeImage";
import { IconArrowRight, IconTruck, IconShield, IconRefresh } from "@/components/Icons";

export default async function HomePage() {
  const [featuredProducts, newArrivals, trendingProducts] = await Promise.all([
    getFeatured(4),
    getNewArrivals(4),
    getTrending(4),
  ]);

  // Check if a local hero video exists in public/videos/hero.mp4
  const videoFilePath = path.join(process.cwd(), "public", "videos", "hero.mp4");
  const posterFilePath = path.join(process.cwd(), "public", "images", "hero-poster.jpg");
  const hasVideo = fs.existsSync(videoFilePath);
  const videoSrc = hasVideo ? "/videos/hero.mp4" : undefined;
  const posterSrc = fs.existsSync(posterFilePath) ? "/images/hero-poster.jpg" : undefined;

  return (
    <>
      {/* Hero Section */}
      <Hero videoSrc={videoSrc} posterSrc={posterSrc} />

      {/* Trust & Proposition Strip */}
      <section className="promo-strip" aria-label="Brand Guarantees">
        <div className="promo-item">
          <IconTruck size={18} />
          <span>Complimentary Shipping Over ₹5</span>
        </div>
        <div className="promo-item">
          <IconShield size={18} />
          <span>Noble Sustainable Materials</span>
        </div>
        <div className="promo-item">
          <IconRefresh size={18} />
          <span>30-Day Complimentary Returns</span>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="section" aria-label="Collections by Department">
        <div className="container">
          <div className="section-header">
            <span className="subheading">Departments</span>
            <h2 className="heading-1">The Collections</h2>
          </div>

          <div className="category-grid">
            <ScrollReveal delay={100}>
              <Link href="/women" className="category-card">
                <SafeImage
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                  alt="Women's Collection"
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className="category-card-img"
                />
                <div className="category-card-overlay">
                  <span className="subheading" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Wardrobe 01
                  </span>
                  <h3 className="category-card-title">Women’s Collection</h3>
                  <span className="category-card-link">
                    Explore Silhouettes <IconArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link href="/men" className="category-card">
                <SafeImage
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"
                  alt="Men's Collection"
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className="category-card-img"
                />
                <div className="category-card-overlay">
                  <span className="subheading" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Wardrobe 02
                  </span>
                  <h3 className="category-card-title">Men’s Collection</h3>
                  <span className="category-card-link">
                    Explore Tailoring <IconArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="subheading">Curated Selection</span>
              <h2 className="heading-1">Featured Essentials</h2>
            </div>
            <Link href="/women" className="btn-ghost">
              View All <IconArrowRight size={12} />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Promotional Banner */}
      <section className="editorial-banner" aria-label="Seasonal Promotion">
        <div className="container">
          <ScrollReveal>
            <div className="banner-content">
              <span className="subheading" style={{ color: "var(--accent-gold)" }}>
                Limited Seasonal Archive
              </span>
              <h2 className="banner-title">Winter Sale — Up to 40% Off</h2>
              <p className="banner-text">
                Indulge in architectural overcoats, double-faced cashmere pullovers,
                and relaxed virgin wool tailoring before the seasonal archive closes.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "12px" }}>
                <Link href="/women?sort=price-asc" className="btn btn-white">
                  Shop Women’s Sale
                </Link>
                <Link
                  href="/men?sort=price-asc"
                  className="btn btn-secondary"
                  style={{ borderColor: "#ffffff", color: "#ffffff" }}
                >
                  Shop Men’s Sale
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="subheading">Latest Additions</span>
              <h2 className="heading-1">New Arrivals</h2>
            </div>
            <Link href="/men" className="btn-ghost">
              Explore New Season <IconArrowRight size={12} />
            </Link>
          </div>

          <div className="product-grid">
            {newArrivals.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-subtle)" }}>
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="subheading">Most Coveted</span>
              <h2 className="heading-1">Trending Right Now</h2>
            </div>
            <Link href="/women" className="btn-ghost">
              Browse All Trends <IconArrowRight size={12} />
            </Link>
          </div>

          <div className="product-grid">
            {trendingProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterStrip />
    </>
  );
}

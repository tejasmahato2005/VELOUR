"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

const HERO_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85",
    alt: "VELOUR Editorial Autumn Winter Collection",
  },
  {
    url: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1800&q=85",
    alt: "VELOUR Minimal Outerwear & Tailoring",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85",
    alt: "VELOUR Modern Menswear Capsule",
  },
];

export function Hero({ videoSrc, posterSrc }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (videoSrc) return; // If video is available, no slideshow needed
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [videoSrc]);

  return (
    <section className="hero-wrapper" aria-label="Hero Showcase">
      {videoSrc ? (
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc || "/images/hero-poster.jpg"}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="hero-slideshow-container">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.url}
              className={`slideshow-slide ${index === activeSlide ? "active" : ""}`}
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Subtle Cinematic Overlay */}
      <div className="hero-overlay" />

      {/* Centered Editorial Content with Staggered Entrance */}
      <div className="hero-content">
        <p className="hero-subtitle hero-stagger-1">The Autumn / Winter Capsule 2026</p>
        <h1 className="hero-title hero-stagger-2">Elegance in Modern Form</h1>
        <div className="hero-ctas hero-stagger-3">
          <Link href="/women" className="btn btn-white">
            Shop Women
          </Link>
          <Link
            href="/men"
            className="btn btn-secondary"
            style={{ borderColor: "#ffffff", color: "#ffffff" }}
          >
            Shop Men
          </Link>
        </div>
      </div>

      {/* Floating Scroll-Down Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

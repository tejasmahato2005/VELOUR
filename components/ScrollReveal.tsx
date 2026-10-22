"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  threshold?: number;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is not supported, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const style: React.CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref}
      style={style}
      className={`reveal-item ${isRevealed ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}

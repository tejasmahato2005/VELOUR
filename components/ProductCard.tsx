"use client";

import React, { useState } from "react";
import Link from "next/link";
import { type Product } from "@/lib/data";
import { money } from "@/lib/format";
import { useCart } from "@/lib/store";
import { SafeImage } from "./SafeImage";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [quickAddedSize, setQuickAddedSize] = useState<string | null>(null);

  const primaryImg = product.images[0];
  const hoverImg = product.images[1] || product.images[0];

  const handleQuickAdd = (e: React.MouseEvent, size: string) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size,
      image: primaryImg,
      quantity: 1,
    });

    setQuickAddedSize(size);
    setTimeout(() => setQuickAddedSize(null), 1200);
  };

  return (
    <div className="product-card">
      <div className="product-media-wrapper">
        <Link href={`/product/${product.id}`} tabIndex={-1} aria-label={product.name}>
          <SafeImage
            src={primaryImg}
            alt={product.name}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 820px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={priority}
            className="product-image-primary"
          />
          <SafeImage
            src={hoverImg}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 820px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="product-image-hover"
          />
        </Link>

        {/* Product Badges */}
        <div className="product-badges">
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="product-badge badge-sale">Sale</span>
          )}
          {product.isNew && <span className="product-badge">New</span>}
          {product.trending && !product.isNew && (
            <span className="product-badge">Trending</span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="product-quick-add" onClick={(e) => e.stopPropagation()}>
          <div
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "8px",
              color: "var(--text-secondary)",
              fontWeight: 500,
            }}
          >
            Quick Add Size
          </div>
          <div className="quick-add-sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className="quick-add-btn"
                style={
                  quickAddedSize === size
                    ? { backgroundColor: "var(--text-primary)", color: "var(--bg-primary)" }
                    : undefined
                }
                onClick={(e) => handleQuickAdd(e, size)}
                aria-label={`Quick add size ${size} to bag`}
              >
                {quickAddedSize === size ? "✓" : size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="product-meta">
        <span className="product-sub">{product.subcategory}</span>
        <Link href={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="product-price-row">
          <span className="product-price">{money(product.price)}</span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="product-compare-price">
              {money(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { type Product } from "@/lib/data";
import { money } from "@/lib/format";
import { useCart } from "@/lib/store";
import { SafeImage } from "./SafeImage";
import { IconPlus, IconMinus, IconCheck, IconChevronDown } from "./Icons";

interface ProductDetailInteractiveProps {
  product: Product;
}

export function ProductDetailInteractive({ product }: ProductDetailInteractiveProps) {
  const { addItem } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>("fabric");

  const images = (() => {
    const raw = product.images.length > 0 ? product.images : [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ];
    // Deduplicate: remove repeated URLs so only unique images show as thumbnails
    return raw.filter((url, idx, arr) => arr.indexOf(url) === idx);
  })();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: images[0],
      quantity,
    });

    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div className="pdp-grid">
      {/* Gallery: Thumbnails + Main View */}
      <div className="pdp-gallery">
        <div className="pdp-thumbs" role="tablist" aria-label="Product thumbnails">
          {images.map((imgUrl, idx) => (
            <button
              key={imgUrl + idx}
              type="button"
              className={`pdp-thumb-btn ${selectedImageIndex === idx ? "active" : ""}`}
              onClick={() => setSelectedImageIndex(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <SafeImage
                  src={imgUrl}
                  alt={`${product.name} view ${idx + 1}`}
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="pdp-main-image">
          <SafeImage
            src={images[selectedImageIndex] || images[0]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Product Details & Actions */}
      <div className="pdp-info">
        <div>
          <span className="subheading">{product.category}’s / {product.subcategory}</span>
          <h1 className="pdp-title" style={{ marginTop: "6px" }}>
            {product.name}
          </h1>
          <div className="pdp-price" style={{ marginTop: "12px" }}>
            <span>{money(product.price)}</span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                }}
              >
                {money(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>

        <p className="pdp-description">{product.description}</p>

        {/* Size Selection (Required) */}
        <div className="pdp-size-picker">
          <div className="size-header">
            <span
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Select Size {selectedSize && `— ${selectedSize}`}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Model is 5&apos;10&quot; wearing S
            </span>
          </div>

          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => {
                  setSelectedSize(size);
                  setSizeError(false);
                }}
                aria-label={`Select size ${size}`}
              >
                {size}
              </button>
            ))}
          </div>

          {sizeError && (
            <div
              style={{
                color: "var(--accent-red)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                marginTop: "4px",
                fontWeight: 500,
              }}
              role="alert"
            >
              * Please choose a size before adding to bag
            </div>
          )}
        </div>

        {/* Quantity Stepper & Add to Bag */}
        <div className="pdp-qty-row">
          <div className="qty-stepper" aria-label="Adjust quantity">
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <IconMinus size={14} />
            </button>
            <span className="qty-input" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {quantity}
            </span>
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              <IconPlus size={14} />
            </button>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={handleAddToCart}
          >
            {addedSuccess ? (
              <>
                <IconCheck size={16} /> Added to Bag
              </>
            ) : (
              "Add to Bag"
            )}
          </button>
        </div>

        {/* Editorial Accordion */}
        <div className="pdp-accordion">
          <div className="pdp-accordion-item">
            <button
              type="button"
              className="pdp-accordion-header"
              onClick={() => toggleAccordion("fabric")}
            >
              <span>Fabric & Composition</span>
              <span
                style={{
                  transform: openAccordion === "fabric" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <IconChevronDown size={14} />
              </span>
            </button>
            {openAccordion === "fabric" && (
              <div className="pdp-accordion-body">
                Woven from sustainably sourced natural fibers. Dry clean only or gentle hand wash in cold water with wool-specific detergent. Dry flat away from direct sunlight.
              </div>
            )}
          </div>

          <div className="pdp-accordion-item">
            <button
              type="button"
              className="pdp-accordion-header"
              onClick={() => toggleAccordion("shipping")}
            >
              <span>Delivery & Complimentary Returns</span>
              <span
                style={{
                  transform: openAccordion === "shipping" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <IconChevronDown size={14} />
              </span>
            </button>
            {openAccordion === "shipping" && (
              <div className="pdp-accordion-body">
                Complimentary standard express shipping on orders over ₹5. Delivered in recycled FSC-certified archival packaging within 2–4 business days. Returns accepted within 30 days of receipt.
              </div>
            )}
          </div>

          <div className="pdp-accordion-item">
            <button
              type="button"
              className="pdp-accordion-header"
              onClick={() => toggleAccordion("fit")}
            >
              <span>Fit & Tailoring Guide</span>
              <span
                style={{
                  transform: openAccordion === "fit" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <IconChevronDown size={14} />
              </span>
            </button>
            {openAccordion === "fit" && (
              <div className="pdp-accordion-body">
                Designed for an elegant, relaxed contemporary drape. Fits true to size. If you desire a more tailored silhouette, consider sizing down one size.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

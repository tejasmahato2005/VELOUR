import React from "react";
import type { Metadata } from "next";
import { getProducts } from "@/lib/api";
import { subcategoriesFor } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { ListingControls } from "@/components/ListingControls";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Women’s Collection — VELOUR",
  description:
    "Explore the VELOUR women’s collection. Sculptural tailoring, fine merino knitwear, silk dresses, and luxury outerwear.",
};

interface WomenPageProps {
  searchParams: Promise<{
    sub?: string;
    sort?: string;
  }>;
}

export default async function WomenPage(props: WomenPageProps) {
  const searchParams = await props.searchParams;
  const subcategory = searchParams?.sub;
  const sort = searchParams?.sort || "featured";

  const [products, allWomenProducts] = await Promise.all([
    getProducts({
      category: "women",
      subcategory,
      sort,
    }),
    getProducts({
      category: "women",
    }),
  ]);

  const activeSubcategories = subcategoriesFor("women");

  return (
    <div className="section" style={{ paddingTop: "24px" }}>
      <div className="container">
        {/* Editorial Listing Header */}
        <header className="listing-hero">
          <span className="subheading">Department 01</span>
          <h1 className="heading-display" style={{ marginTop: "4px", marginBottom: "8px" }}>
            Women’s Collection
          </h1>
          <p className="lead-text" style={{ maxWidth: "600px" }}>
            Clean lines and tactile fabrications. An exploration of architectural drape,
            noble silks, and structured outerwear tailored for modern life.
          </p>
        </header>

        {/* Filter Pills and Sort Bar */}
        <ListingControls
          subcategories={activeSubcategories}
          activeSubcategory={subcategory}
          activeSort={sort}
          totalCount={allWomenProducts.length}
        />

        {/* Responsive Product Grid */}
        {products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "72px 0",
              backgroundColor: "var(--bg-subtle)",
              margin: "32px 0",
            }}
          >
            <h3 className="heading-3">No products found</h3>
            <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
              Try selecting a different subcategory or sorting option.
            </p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product, idx) => (
              <ScrollReveal key={product.id} delay={Math.min(idx * 60, 300)}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

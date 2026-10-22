import React from "react";
import type { Metadata } from "next";
import { getProducts } from "@/lib/api";
import { subcategoriesFor } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { ListingControls } from "@/components/ListingControls";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Men’s Collection — VELOUR",
  description:
    "Explore the VELOUR men’s collection. Minimalist overcoats, boiled merino knitwear, selvedge denim, and deconstructed tailoring.",
};

interface MenPageProps {
  searchParams: Promise<{
    sub?: string;
    sort?: string;
  }>;
}

export default async function MenPage(props: MenPageProps) {
  const searchParams = await props.searchParams;
  const subcategory = searchParams?.sub;
  const sort = searchParams?.sort || "featured";

  const [products, allMenProducts] = await Promise.all([
    getProducts({
      category: "men",
      subcategory,
      sort,
    }),
    getProducts({
      category: "men",
    }),
  ]);

  const activeSubcategories = subcategoriesFor("men");

  return (
    <div className="section" style={{ paddingTop: "24px" }}>
      <div className="container">
        {/* Editorial Listing Header */}
        <header className="listing-hero">
          <span className="subheading">Department 02</span>
          <h1 className="heading-display" style={{ marginTop: "4px", marginBottom: "8px" }}>
            Men’s Collection
          </h1>
          <p className="lead-text" style={{ maxWidth: "600px" }}>
            Understated masculine tailoring, dense textural knitwear, and durable
            Japanese selvedge fabrics designed to withstand seasons of wear.
          </p>
        </header>

        {/* Filter Pills and Sort Bar */}
        <ListingControls
          subcategories={activeSubcategories}
          activeSubcategory={subcategory}
          activeSort={sort}
          totalCount={allMenProducts.length}
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

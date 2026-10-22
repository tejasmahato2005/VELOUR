import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Search Results — VELOUR",
  description: "Search results for garments and accessories across the VELOUR catalogue.",
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage(props: SearchPageProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  const products = await getProducts({ query });

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container">
        <header className="listing-hero">
          <span className="subheading">Search Query</span>
          <h1 className="heading-display" style={{ marginTop: "4px" }}>
            {query ? `“${query}”` : "All Products"}
          </h1>
          <p className="lead-text" style={{ marginTop: "8px" }}>
            {products.length} {products.length === 1 ? "result" : "results"} found
          </p>
        </header>

        {products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "72px 0",
              backgroundColor: "var(--bg-subtle)",
              margin: "32px 0",
            }}
          >
            <h3 className="heading-2">No matching products found</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "12px", maxWidth: "440px", margin: "12px auto 0" }}>
              We could not find anything matching &quot;{query}&quot;. Try exploring our core
              categories or refining your search term.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "24px" }}>
              <Link href="/women" className="btn btn-primary">
                Shop Women
              </Link>
              <Link href="/men" className="btn btn-secondary">
                Shop Men
              </Link>
            </div>
          </div>
        ) : (
          <div className="product-grid" style={{ marginTop: "32px" }}>
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

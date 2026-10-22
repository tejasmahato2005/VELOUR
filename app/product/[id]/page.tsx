import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getRelated } from "@/lib/api";
import { ProductDetailInteractive } from "@/components/ProductDetailInteractive";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found — VELOUR",
    };
  }

  return {
    title: `${product.name} — VELOUR`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} — VELOUR`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelated(product.id, 4);

  return (
    <div className="section" style={{ paddingTop: "32px" }}>
      <div className="container">
        {/* Main Product Showcase */}
        <ProductDetailInteractive product={product} />

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <section style={{ marginTop: "clamp(64px, 8vw, 112px)" }}>
            <div className="section-header-row">
              <div>
                <span className="subheading">Complete The Look</span>
                <h2 className="heading-1">You May Also Appreciate</h2>
              </div>
            </div>

            <div className="product-grid">
              {relatedProducts.map((relProduct, idx) => (
                <ScrollReveal key={relProduct.id} delay={idx * 100}>
                  <ProductCard product={relProduct} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "@/components/ToastContainer";

export const metadata: Metadata = {
  title: "VELOUR — High-End Modern Apparel & Wardrobe Essentials",
  description:
    "Discover VELOUR. Luxury minimal fashion tailored in noble natural fabrics, pure cashmere, and architectural silhouettes.",
  keywords: ["fashion", "luxury clothing", "cashmere", "minimal fashion", "tailoring", "VELOUR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </CartProvider>
      </body>
    </html>
  );
}

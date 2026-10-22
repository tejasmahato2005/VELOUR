import { GENERATED_PRODUCTS } from "./generated-products";

export interface Product {
  id: string;
  name: string;
  category: "women" | "men";
  subcategory: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  sizes: string[];
  images: [string, string];
  featured: boolean;
  isNew: boolean;
  trending: boolean;
}

export interface CategoryMeta {
  id: string;
  name: string;
}

// Curated subcategory order preference
export const PREFERRED_SUBCATEGORIES = [
  "Coats & Outerwear",
  "Tailored Jackets",
  "Knitwear & Sweaters",
  "Dresses & Jumpsuits",
  "Shirts & Tops",
  "Trousers & Jeans",
  "Footwear",
  "Accessories",
];

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BASE_PRODUCTS: Product[] = [
  // --- WOMEN'S COLLECTION ---
  {
    id: "wool-cashmere-overcoat",
    name: "Wool-Cashmere Belted Overcoat",
    category: "women",
    subcategory: "Coats & Outerwear",
    price: 1,
    compareAtPrice: 1,
    description:
      "Crafted from a double-faced wool and Mongolian cashmere blend, this wrap silhouette features a notched lapel, dropped shoulders, and a self-tie waist belt for relaxed luxury.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      img("photo-1539533018447-63fcce2678e3"),
      img("photo-1520975954732-35dd22299614"),
    ],
    featured: true,
    isNew: false,
    trending: true,
  },
  {
    id: "ribbed-mockneck-sweater",
    name: "Pure Merino Mockneck Sweater",
    category: "women",
    subcategory: "Knitwear & Sweaters",
    price: 1,
    description:
      "A timeless winter staple knit from 100% extra-fine merino wool. Designed with a comfortable high neckline, ribbed trims, and a subtly relaxed drape.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1434389677669-e08b4cac3105"),
      img("photo-1576566588028-4147f3842f27"),
    ],
    featured: true,
    isNew: true,
    trending: false,
  },
  {
    id: "silk-satin-slip-dress",
    name: "Bias-Cut Silk Slip Dress",
    category: "women",
    subcategory: "Dresses & Jumpsuits",
    price: 1,
    compareAtPrice: 1,
    description:
      "Fluid 19mm mulberry silk tailored on the bias for an effortless, skimming silhouette. Features delicate spaghetti straps and a soft scoop back.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1496747611176-843222e1e57c"),
      img("photo-1515886657613-9f3515b0c78f"),
    ],
    featured: false,
    isNew: true,
    trending: true,
  },
  {
    id: "pleated-wide-leg-trousers",
    name: "Pleated Wide-Leg Wool Trousers",
    category: "women",
    subcategory: "Trousers & Jeans",
    price: 1,
    description:
      "High-rise trousers cut with deep front pleats, slant pockets, and a fluid drape. Made from lightweight tropical wool ideal for all-season tailoring.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      img("photo-1509631179647-0177331693ae"),
      img("photo-1485968579580-b6d095142e6e"),
    ],
    featured: true,
    isNew: false,
    trending: false,
  },
  {
    id: "oversized-poplin-shirt-w",
    name: "Crisp Organic Poplin Shirt",
    category: "women",
    subcategory: "Shirts & Tops",
    price: 1,
    description:
      "Sculptural menswear-inspired silhouette tailored in crisp organic cotton poplin. Features extended cuffs, mother-of-pearl buttons, and a curved hem.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1554412933-514a83d2f3c8"),
    ],
    featured: false,
    isNew: true,
    trending: true,
  },
  {
    id: "sculpted-wool-blazer",
    name: "Hourglass Tailored Wool Blazer",
    category: "women",
    subcategory: "Tailored Jackets",
    price: 1,
    compareAtPrice: 1,
    description:
      "Impeccably constructed with a subtly nipped waist, structured shoulders, and horn button fastenings. A modern centerpiece for capsule dressing.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      img("photo-1591047139829-d91aecb6caea"),
      img("photo-1529139574466-a303027c1d8b"),
    ],
    featured: true,
    isNew: false,
    trending: true,
  },
  {
    id: "cashmere-crewneck-knit",
    name: "Featherweight Cashmere Crew",
    category: "women",
    subcategory: "Knitwear & Sweaters",
    price: 1,
    description:
      "Spun from grade-A Mongolian cashmere with an exceptionally soft hand. Minimalist crew neckline and ribbed micro-hem.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1525507119028-ed4c629a60a3"),
      img("photo-1490481651871-ab68de25d43d"),
    ],
    featured: false,
    isNew: false,
    trending: true,
  },
  {
    id: "minimalist-leather-tote",
    name: "Structured Calfskin Studio Tote",
    category: "women",
    subcategory: "Accessories",
    price: 1,
    description:
      "Handcrafted from full-grain Italian calfskin with painted edges and subtle gold foil stamping. Fits up to a 15-inch laptop with an internal zipped compartment.",
    sizes: ["ONE SIZE"],
    images: [
      img("photo-1542272604-787c3835535d"),
      img("photo-1591369822096-ffd140ec948f"),
    ],
    featured: true,
    isNew: true,
    trending: false,
  },
  {
    id: "raw-hem-denim-skirt",
    name: "Column Denim Maxi Skirt",
    category: "women",
    subcategory: "Dresses & Jumpsuits",
    price: 1,
    description:
      "Rigid organic Japanese denim washed to a vintage ecru shade. High rise with a center-front slit for graceful movement.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1554568218-0f1715e72254"),
      img("photo-1521572163474-6864f9cf17ab"),
    ],
    featured: false,
    isNew: true,
    trending: false,
  },
  {
    id: "double-breasted-trench-w",
    name: "Water-Repellent Cotton Trench",
    category: "women",
    subcategory: "Coats & Outerwear",
    price: 1,
    compareAtPrice: 1,
    description:
      "Modern reimagining of the archival trench coat in heavy cotton gabardine. Includes raglan sleeves, storm flap, and a leather-buckled belt.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      img("photo-1520975954732-35dd22299614"),
      img("photo-1539533018447-63fcce2678e3"),
    ],
    featured: true,
    isNew: false,
    trending: true,
  },
  {
    id: "straight-organic-denim-w",
    name: "Classic High-Rise Straight Jeans",
    category: "women",
    subcategory: "Trousers & Jeans",
    price: 1,
    description:
      "Cut from 13oz non-stretch organic denim in a washed stonewash hue. Sits comfortably at the natural waist with an ankle-length hem.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      img("photo-1542272604-787c3835535d"),
      img("photo-1509631179647-0177331693ae"),
    ],
    featured: false,
    isNew: false,
    trending: true,
  },

  // --- MEN'S COLLECTION ---
  {
    id: "tailored-wool-coat-m",
    name: "Minimalist Single-Breasted Overcoat",
    category: "men",
    subcategory: "Coats & Outerwear",
    price: 1,
    compareAtPrice: 1,
    description:
      "Tailored in Italy from heavy virgin wool melton. Features concealed horn buttons, a structured chest canvas, and a cupro lining for smooth layering.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1521572163474-6864f9cf17ab"),
      img("photo-1552374196-c4e7ffc6e126"),
    ],
    featured: true,
    isNew: false,
    trending: true,
  },
  {
    id: "merino-chunky-cardigan",
    name: "Chunky Ribbed Shawl Cardigan",
    category: "men",
    subcategory: "Knitwear & Sweaters",
    price: 1,
    description:
      "Seven-gauge knit from boiled merino wool. Designed with a generous shawl collar, genuine corozo nut buttons, and front patch pockets.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1611312449408-fcece27cdbb7"),
      img("photo-1555529669-e69e7aa0ba9a"),
    ],
    featured: true,
    isNew: true,
    trending: false,
  },
  {
    id: "relaxed-linen-shirt-m",
    name: "Garment-Dyed French Linen Shirt",
    category: "men",
    subcategory: "Shirts & Tops",
    price: 1,
    description:
      "Woven from premium Normandy flax and washed for a soft, lived-in feel. Tailored with a camp collar and mother-of-pearl buttons.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1596755094514-f87e34085b2c"),
      img("photo-1507003211169-0a1dd7228f2d"),
    ],
    featured: false,
    isNew: true,
    trending: true,
  },
  {
    id: "pleated-tapered-trousers-m",
    name: "Single-Pleat Wool Flannel Trousers",
    category: "men",
    subcategory: "Trousers & Jeans",
    price: 1,
    description:
      "Refined trousers tailored from British wool flannel. Cut with a relaxed top block, subtle single pleat, and clean gentle taper towards the hem.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1551028719-00167b16eac5"),
      img("photo-1552374196-c4e7ffc6e126"),
    ],
    featured: true,
    isNew: false,
    trending: false,
  },
  {
    id: "unstructured-cotton-blazer",
    name: "Unstructured Washed Cotton Blazer",
    category: "men",
    subcategory: "Tailored Jackets",
    price: 1,
    compareAtPrice: 1,
    description:
      "Deconstructed two-button jacket in heavy organic cotton twill. Soft, unpadded shoulders and patch pockets give it an effortless, relaxed sophistication.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1507003211169-0a1dd7228f2d"),
      img("photo-1521572163474-6864f9cf17ab"),
    ],
    featured: true,
    isNew: false,
    trending: true,
  },
  {
    id: "heavyweight-mockneck-tee",
    name: "280gsm Heavy Mockneck Tee",
    category: "men",
    subcategory: "Shirts & Tops",
    price: 1,
    description:
      "Knitted in Portugal from combed organic long-staple cotton. Featuring a durable compact collar and clean boxy profile.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1552374196-c4e7ffc6e126"),
      img("photo-1596755094514-f87e34085b2c"),
    ],
    featured: false,
    isNew: true,
    trending: false,
  },
  {
    id: "selvedge-straight-denim-m",
    name: "14oz Kuroki Mills Selvedge Jeans",
    category: "men",
    subcategory: "Trousers & Jeans",
    price: 1,
    compareAtPrice: 1,
    description:
      "Crafted from shuttle-loom Japanese indigo selvedge denim. Mid rise, straight leg, custom copper hardware, and hidden rivet detailing.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1542272604-787c3835535d"),
      img("photo-1551028719-00167b16eac5"),
    ],
    featured: false,
    isNew: false,
    trending: true,
  },
  {
    id: "cashmere-waffle-knit-m",
    name: "Waffle-Knit Cashmere Pullover",
    category: "men",
    subcategory: "Knitwear & Sweaters",
    price: 1,
    description:
      "Textured thermal waffle knit in 100% two-ply cashmere. Exceptionally warm yet breathable, designed for year-round elevation.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1576566588028-4147f3842f27"),
      img("photo-1611312449408-fcece27cdbb7"),
    ],
    featured: true,
    isNew: true,
    trending: false,
  },
  {
    id: "minimalist-leather-chelsea",
    name: "Full-Grain Leather Chelsea Boot",
    category: "men",
    subcategory: "Footwear",
    price: 1,
    description:
      "Handcrafted in Porto using vegetable-tanned French calfskin on a Goodyear welted leather sole with inset rubber traction grips.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1555529669-e69e7aa0ba9a"),
      img("photo-1507003211169-0a1dd7228f2d"),
    ],
    featured: false,
    isNew: false,
    trending: true,
  },
  {
    id: "wool-scarf-fringe",
    name: "Brushed Alpaca-Wool Fringe Scarf",
    category: "men",
    subcategory: "Accessories",
    price: 1,
    description:
      "Woven in Scotland from a lofty blend of superfine alpaca and lambswool with twisted fringe edges.",
    sizes: ["ONE SIZE"],
    images: [
      img("photo-1520975954732-35dd22299614"),
      img("photo-1539533018447-63fcce2678e3"),
    ],
    featured: false,
    isNew: true,
    trending: false,
  },
  {
    id: "technical-parka-m",
    name: "Technical Storm Hooded Parka",
    category: "men",
    subcategory: "Coats & Outerwear",
    price: 1,
    compareAtPrice: 1,
    description:
      "Engineered with a 3-layer breathable weatherproof shell, taped seams, two-way YKK Aquaguard zips, and recycled insulation fill.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      img("photo-1551028719-00167b16eac5"),
      img("photo-1521572163474-6864f9cf17ab"),
    ],
    featured: false,
    isNew: false,
    trending: true,
  },
];

/**
 * ACTIVE CATALOGUE SWITCH SEAM:
 * Toggle between merged (BASE_PRODUCTS + GENERATED_PRODUCTS) and GENERATED_PRODUCTS only.
 */
// export const PRODUCTS: Product[] = [...BASE_PRODUCTS, ...GENERATED_PRODUCTS];
export const PRODUCTS: Product[] = GENERATED_PRODUCTS;

/**
 * Returns active subcategories present in the current catalogue for a category,
 * ordered according to the preferred curated list first, followed by any other discovered subcategories.
 */
export function subcategoriesFor(category: "women" | "men"): string[] {
  const activeProducts = PRODUCTS.filter((p) => p.category === category);
  const presentSubs = new Set<string>(activeProducts.map((p) => p.subcategory));

  const ordered: string[] = [];
  for (const sub of PREFERRED_SUBCATEGORIES) {
    if (presentSubs.has(sub)) {
      ordered.push(sub);
      presentSubs.delete(sub);
    }
  }

  // Append any newly introduced subcategories that aren't in the preferred list
  for (const remaining of presentSubs) {
    ordered.push(remaining);
  }

  return ordered;
}

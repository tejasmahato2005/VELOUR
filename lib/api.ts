import { insforge } from "./insforge";
import type { Product } from "./data";

/**
 * ============================================================================
 * BACKEND-SWAP SEAM: lib/api.ts
 * ============================================================================
 * This service layer is the SINGLE interface between the UI components and the
 * product catalogue.
 *
 * Current implementation: InsForge (Postgres) via the @insforge/sdk client,
 * querying the `products` table. Row-level security allows public read access.
 *
 * Function signatures and return types are identical to the previous in-memory
 * mock, so page components, listing filters, search, and checkout keep working
 * without touching ANY page-level code!
 * ============================================================================
 */

export type ProductSortOption = "featured" | "price-asc" | "price-desc" | "newest";

export interface ProductQuery {
  category?: "women" | "men";
  subcategory?: string;
  sort?: ProductSortOption | string;
  query?: string;
  limit?: number;
}

interface ProductRow {
  id: string;
  name: string;
  category: "women" | "men";
  subcategory: string;
  price: number;
  compare_at_price: number | null;
  description: string;
  sizes: string[];
  images: string[];
  featured: boolean;
  is_new: boolean;
  trending: boolean;
  created_at: string;
}

function toProduct(row: ProductRow): Product {
  const imgs: string[] = Array.isArray(row.images) ? row.images : [];
  const primary = imgs[0] ?? "";
  const hover = imgs[1] ?? primary;
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    subcategory: row.subcategory,
    price: row.price,
    ...(row.compare_at_price !== null ? { compareAtPrice: row.compare_at_price } : {}),
    description: row.description,
    sizes: row.sizes,
    images: [primary, hover] as [string, string],
    featured: row.featured,
    isNew: row.is_new,
    trending: row.trending,
  };
}

function applySort(q: any, sort: ProductSortOption) {
  switch (sort) {
    case "price-asc":
      return q.order("price", { ascending: true });
    case "price-desc":
      return q.order("price", { ascending: false });
    case "newest":
      return q.order("is_new", { ascending: false }).order("created_at", {
        ascending: false,
      });
    case "featured":
    default:
      return q.order("featured", { ascending: false }).order("created_at", {
        ascending: false,
      });
  }
}

function sortInMemory(results: Product[], sort: ProductSortOption): Product[] {
  return [...results].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
}

/**
 * Fetch a list of products with optional category, subcategory, search, sorting and limit.
 */
export async function getProducts(options: ProductQuery = {}): Promise<Product[]> {
  const { category, subcategory, query, limit } = options;
  const sort = (options.sort || "featured") as ProductSortOption;

  let q = insforge.database.from("products").select("*");
  if (category) {
    q = q.eq("category", category);
  }
  if (subcategory && subcategory.toLowerCase() !== "all") {
    q = q.eq("subcategory", subcategory);
  }

  let rows: ProductRow[];
  if (query && query.trim().length > 0) {
    // Full-text OR matching across name/description/subcategory/category cannot be
    // expressed with AND-chained filters, so fetch the (already category-filtered)
    // set and apply the search in memory, preserving the mock's exact semantics.
    const { data } = await q;
    rows = (data || []) as ProductRow[];
  } else {
    q = applySort(q, sort);
    if (typeof limit === "number" && limit > 0) {
      q = q.limit(limit);
    }
    const { data } = await q;
    rows = (data || []) as ProductRow[];
  }

  let results = rows.map(toProduct);

  if (query && query.trim().length > 0) {
    const ql = query.trim().toLowerCase();
    results = results.filter((p) => {
      const matchName = p.name.toLowerCase().includes(ql);
      const matchDesc = p.description.toLowerCase().includes(ql);
      const matchSub = p.subcategory.toLowerCase().includes(ql);
      const matchCat = p.category.toLowerCase().includes(ql);
      return matchName || matchDesc || matchSub || matchCat;
    });
    results = sortInMemory(results, sort);
  }

  if (typeof limit === "number" && limit > 0) {
    results = results.slice(0, limit);
  }

  return results;
}

/**
 * Retrieve a single product by its unique slug ID.
 */
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await insforge.database
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }
  return data ? toProduct(data as ProductRow) : null;
}

/**
 * Get products marked as featured.
 */
export async function getFeatured(limit = 4): Promise<Product[]> {
  const { data } = await insforge.database
    .from("products")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  return (data || []).map(toProduct);
}

/**
 * Get products marked as new arrivals.
 */
export async function getNewArrivals(limit = 4): Promise<Product[]> {
  const { data } = await insforge.database
    .from("products")
    .select("*")
    .eq("is_new", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  return (data || []).map(toProduct);
}

/**
 * Get products marked as trending.
 */
export async function getTrending(limit = 4): Promise<Product[]> {
  const { data } = await insforge.database
    .from("products")
    .select("*")
    .eq("trending", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  return (data || []).map(toProduct);
}

/**
 * Get related products for a given product:
 * Prioritizes products in the same category & subcategory, excluding the current product.
 */
export async function getRelated(id: string, limit = 4): Promise<Product[]> {
  const current = await getProductById(id);
  if (!current) {
    return [];
  }

  const { data: sameSub } = await insforge.database
    .from("products")
    .select("*")
    .eq("category", current.category)
    .eq("subcategory", current.subcategory)
    .neq("id", id);
  const sameSubMapped = (sameSub || []).map(toProduct);

  if (sameSubMapped.length >= limit) {
    return sameSubMapped.slice(0, limit);
  }

  const sameSubIds = new Set(sameSubMapped.map((p) => p.id));
  const { data: sameCat } = await insforge.database
    .from("products")
    .select("*")
    .eq("category", current.category)
    .neq("id", id);
  const sameCatMapped = (sameCat || [])
    .map(toProduct)
    .filter((p) => !sameSubIds.has(p.id));

  return [...sameSubMapped, ...sameCatMapped].slice(0, limit);
}

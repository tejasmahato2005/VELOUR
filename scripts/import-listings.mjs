#!/usr/bin/env node

/**
 * VELOUR Listings Pipeline Import Script
 * Parses incoming/listings.csv, validates fields, processes product images using `sips`,
 * and regenerates lib/generated-products.ts wholesale.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const CSV_PATH = path.join(rootDir, "incoming", "listings.csv");
const TEMPLATE_CSV_PATH = path.join(rootDir, "incoming", "listings-template.csv");
const IMAGES_DIR = path.join(rootDir, "incoming", "images");
const OUTPUT_IMAGES_DIR = path.join(rootDir, "public", "images", "products");
const GENERATED_TS_PATH = path.join(rootDir, "lib", "generated-products.ts");

const NEUTRAL_PLACEHOLDER =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Robust RFC 4180-compliant quote-aware CSV parser
 */
function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentToken = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentToken += '"';
        i++; // skip next quote
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentToken += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(currentToken.trim());
        currentToken = "";
      } else if (char === "\r") {
        // Ignore CR
      } else if (char === "\n") {
        row.push(currentToken.trim());
        if (row.some((cell) => cell.length > 0)) {
          lines.push(row);
        }
        row = [];
        currentToken = "";
      } else {
        currentToken += char;
      }
    }
  }

  if (currentToken.length > 0 || row.length > 0) {
    row.push(currentToken.trim());
    if (row.some((cell) => cell.length > 0)) {
      lines.push(row);
    }
  }

  return lines;
}

/**
 * Process image with macOS `sips`
 */
function processImage(srcFileName, targetFileName) {
  if (!srcFileName) return null;

  const srcPath = path.join(IMAGES_DIR, srcFileName);
  if (!fs.existsSync(srcPath)) {
    return null;
  }

  fs.mkdirSync(OUTPUT_IMAGES_DIR, { recursive: true });
  const destPath = path.join(OUTPUT_IMAGES_DIR, targetFileName);

  try {
    // Resize down to max 1400px width and convert to JPEG
    execSync(`sips --resampleWidth 1400 -s format jpeg "${srcPath}" --out "${destPath}" 2>/dev/null`);
    return `/images/products/${targetFileName}`;
  } catch {
    // If sips failed or not on Mac, simple file copy fallback
    try {
      fs.copyFileSync(srcPath, destPath);
      return `/images/products/${targetFileName}`;
    } catch {
      return null;
    }
  }
}

function run() {
  console.log("--------------------------------------------------");
  console.log("  VELOUR Product Listings Importer");
  console.log("--------------------------------------------------");

  let targetCsv = CSV_PATH;
  if (!fs.existsSync(CSV_PATH)) {
    if (fs.existsSync(TEMPLATE_CSV_PATH)) {
      console.log(`Notice: incoming/listings.csv not found. Falling back to template: incoming/listings-template.csv`);
      targetCsv = TEMPLATE_CSV_PATH;
    } else {
      console.error(`Error: Neither incoming/listings.csv nor incoming/listings-template.csv found.`);
      process.exit(1);
    }
  }

  const fileContent = fs.readFileSync(targetCsv, "utf8");
  const rows = parseCSV(fileContent);

  if (rows.length < 2) {
    console.warn("CSV has no data rows. Generating empty catalogue.");
    writeOutput([]);
    return;
  }

  const header = rows[0].map((h) => h.toLowerCase());
  const expectedCols = [
    "name",
    "category",
    "subcategory",
    "price",
    "compareatprice",
    "description",
    "sizes",
    "image1",
    "image2",
    "featured",
    "isnew",
    "trending",
  ];

  // Map header indices
  const colIndex = {};
  for (const col of expectedCols) {
    colIndex[col] = header.indexOf(col);
  }

  const usedSlugs = new Map();
  const validProducts = [];

  for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    const rowNum = rowIndex + 1;

    const name = colIndex.name !== -1 ? row[colIndex.name] : row[0];
    const category = (colIndex.category !== -1 ? row[colIndex.category] : row[1])?.toLowerCase();
    const subcategory = colIndex.subcategory !== -1 ? row[colIndex.subcategory] : row[2];
    const priceRaw = colIndex.price !== -1 ? row[colIndex.price] : row[3];
    const compareAtRaw = colIndex.compareatprice !== -1 ? row[colIndex.compareatprice] : row[4];
    const description = colIndex.description !== -1 ? row[colIndex.description] : row[5] || "";
    const sizesRaw = colIndex.sizes !== -1 ? row[colIndex.sizes] : row[6];
    const image1 = colIndex.image1 !== -1 ? row[colIndex.image1] : row[7];
    const image2 = colIndex.image2 !== -1 ? row[colIndex.image2] : row[8];
    const featuredRaw = colIndex.featured !== -1 ? row[colIndex.featured] : row[9];
    const isNewRaw = colIndex.isnew !== -1 ? row[colIndex.isnew] : row[10];
    const trendingRaw = colIndex.trending !== -1 ? row[colIndex.trending] : row[11];

    // Validation checks
    const errors = [];
    if (!name || name.trim().length === 0) errors.push("Missing 'name'");
    if (category !== "women" && category !== "men") {
      errors.push(`Invalid 'category': expected 'women' or 'men', got '${category}'`);
    }
    if (!subcategory || subcategory.trim().length === 0) {
      errors.push("Missing 'subcategory'");
    }

    const price = parseFloat(priceRaw);
    if (isNaN(price) || price <= 0) {
      errors.push(`Invalid 'price': must be a positive number, got '${priceRaw}'`);
    }

    if (!image1 || image1.trim().length === 0) {
      errors.push("Missing 'image1'");
    }

    if (errors.length > 0) {
      console.error(`Row ${rowNum} skipped: ${errors.join(", ")}`);
      continue;
    }

    // Compare at price
    const compareAtPrice = compareAtRaw && !isNaN(parseFloat(compareAtRaw)) ? parseFloat(compareAtRaw) : undefined;

    // Sizes
    let sizes = ["XS", "S", "M", "L", "XL"];
    if (sizesRaw && sizesRaw.trim().length > 0) {
      sizes = sizesRaw
        .split("|")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      if (sizes.length === 0) sizes = ["XS", "S", "M", "L", "XL"];
    }

    // Flags
    const isTrue = (val) => val && ["yes", "true", "1", "y"].includes(val.trim().toLowerCase());
    const featured = isTrue(featuredRaw);
    const isNew = isTrue(isNewRaw);
    const trending = isTrue(trendingRaw);

    // Slug generation with collision resolution
    let baseSlug = slugify(name);
    if (!baseSlug) baseSlug = "product";
    let slug = baseSlug;
    if (usedSlugs.has(baseSlug)) {
      const count = usedSlugs.get(baseSlug) + 1;
      usedSlugs.set(baseSlug, count);
      slug = `${baseSlug}-${count}`;
    } else {
      usedSlugs.set(baseSlug, 1);
    }

    // Process images
    let primaryImgUrl = processImage(image1, `${slug}-1.jpg`);
    if (!primaryImgUrl) {
      console.warn(`[Warning] Image '${image1}' for row ${rowNum} ("${name}") not found in incoming/images/. Using neutral placeholder.`);
      primaryImgUrl = NEUTRAL_PLACEHOLDER;
    }

    let secondaryImgUrl = null;
    if (image2 && image2.trim().length > 0) {
      secondaryImgUrl = processImage(image2, `${slug}-2.jpg`);
      if (!secondaryImgUrl) {
        console.warn(`[Warning] Hover image '${image2}' for row ${rowNum} not found. Reusing primary image.`);
        secondaryImgUrl = primaryImgUrl;
      }
    } else {
      secondaryImgUrl = primaryImgUrl;
    }

    validProducts.push({
      id: slug,
      name: name.trim(),
      category,
      subcategory: subcategory.trim(),
      price,
      compareAtPrice,
      description: description.trim(),
      sizes,
      images: [primaryImgUrl, secondaryImgUrl],
      featured,
      isNew,
      trending,
    });
  }

  writeOutput(validProducts);
  console.log(`Successfully generated ${validProducts.length} listings in lib/generated-products.ts.`);
}

function writeOutput(products) {
  const content = `import type { Product } from "./data";

/**
 * GENERATED PRODUCTS
 * This file is automatically regenerated by scripts/import-listings.mjs.
 * Do NOT edit this file manually.
 */
export const GENERATED_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};
`;

  fs.writeFileSync(GENERATED_TS_PATH, content, "utf8");
}

run();

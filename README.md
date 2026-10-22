# VELOUR — Modern High-End Fashion eCommerce

A complete, luxury eCommerce web application for **VELOUR**, an upscale minimal apparel brand. Built with **Next.js (App Router)**, **TypeScript**, and a custom-crafted vanilla CSS design system featuring warm tactile tones, editorial typography, micro-interactions, and a decoupled architecture designed for rapid backend integration.

---

## Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Single global design system stylesheet (`app/globals.css`) with CSS custom properties, responsive breakpoints, smooth animations, and zero Tailwind CSS dependency.
- **Typography**: Google Fonts ("Cormorant Garamond" display serif + "Inter" clean sans) loaded via `<link>` in the root layout.
- **State Management**: React Context (`lib/store.tsx`) with localStorage persistence, hydration mismatch prevention, and non-blocking toast notifications.
- **Images**: Next.js `next/image` wrapped by `SafeImage` with remote patterns configured for Unsplash and graceful SVG fallback handlers.
- **Listings Pipeline**: Dependency-free Node script (`scripts/import-listings.mjs`) for bulk batch importing products from CSV with macOS `sips` image optimization.

---

## Directory Structure

```text
app/
├── globals.css                # Global design system, typography tokens, animations & layout rules
├── layout.tsx                 # Root layout with Google Fonts, CartProvider, Navbar, Footer, Toasts
├── page.tsx                   # Homepage (Hero, Categories, Featured, Sale Banner, New, Trending)
├── women/page.tsx             # Women's department listing with subcategory pills and sorting
├── men/page.tsx               # Men's department listing with subcategory pills and sorting
├── search/page.tsx            # Live keyword search results page
├── product/[id]/page.tsx      # Product detail page (gallery, size selector, qty, related items)
├── cart/page.tsx              # Shopping bag line items, quantities, free shipping progress bar
├── checkout/page.tsx          # Contact, shipping, dummy payment fields, validation & order confirmation
├── login/page.tsx             # Tabbed Sign In / Create Account forms
├── about/page.tsx             # Brand atelier ethos & sustainability
├── contact/page.tsx           # Client concierge services & shipping FAQ
└── privacy/page.tsx           # Legal & privacy terms

components/
├── Navbar.tsx                 # Sticky navigation with full-screen live search overlay & mobile drawer
├── Footer.tsx                 # Editorial footer with brand blurb, links & inline SVG social icons
├── ProductCard.tsx            # Interactive card with image crossfade & quick-add size affordance
├── ProductDetailInteractive.tsx # Gallery image switcher, size validator, quantity stepper & accordions
├── Hero.tsx                   # Full-viewport hero supporting video background or crossfade slideshow
├── ListingControls.tsx        # Subcategory filter pills and sort dropdown syncing to URL params
├── SafeImage.tsx              # Next.js Image wrapper with error fallback
├── ScrollReveal.tsx           # IntersectionObserver-based staggered reveal wrapper
├── ToastContainer.tsx         # Toast notification container
├── NewsletterStrip.tsx        # Newsletter subscription form with feedback
└── Icons.tsx                  # Clean inline SVG icons (no external icon dependencies)

lib/
├── data.ts                    # BASE_PRODUCTS (22 items), Product interface, catalogue switch seam
├── generated-products.ts      # Regenerated automatically by listings pipeline (never hand-edited)
├── api.ts                     # THE BACKEND-SWAP SEAM: Mock async service layer
├── store.tsx                  # Cart context provider + localStorage sync
└── format.ts                  # Currency formatting helper (money)

scripts/
└── import-listings.mjs        # CSV importer & image optimization pipeline (sips)

incoming/
├── listings-template.csv      # CSV format reference and sample rows
├── README.md                  # Column documentation
└── images/                    # Drop folder for incoming product imagery
```

---

## How to Swap `lib/api.ts` for a Real Backend

The entire application relies on `lib/api.ts` as its **sole data contract**. Every route (`/`, `/women`, `/men`, `/search`, `/product/[id]`) queries this service layer rather than importing raw data arrays directly.

### Swapping Procedure:

1. Open [`lib/api.ts`](file:///Users/tejasmahato/Testing/free%20claude%20code/lib/api.ts).
2. Replace the in-memory array filtering inside the exported functions with network requests (e.g., fetch calls to Shopify Storefront API, MedusaJS, Supabase, or custom REST/GraphQL endpoints):

```typescript
// Example: swapping getProducts() for a remote REST API
export async function getProducts(options: ProductQuery = {}): Promise<Product[]> {
  const queryParams = new URLSearchParams();
  if (options.category) queryParams.set("category", options.category);
  if (options.subcategory) queryParams.set("subcategory", options.subcategory);
  if (options.sort) queryParams.set("sort", options.sort);
  if (options.query) queryParams.set("q", options.query);
  if (options.limit) queryParams.set("limit", String(options.limit));

  const res = await fetch(`https://api.yourdomain.com/v1/products?${queryParams.toString()}`, {
    next: { revalidate: 60 }, // ISR caching
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
```

3. Keep the TypeScript function signatures and return types (`Promise<Product[]>`, `Promise<Product | null>`) intact.
4. **Result**: All pages, listing filters, sorting, search, and checkout continue working without needing to alter a single line in `app/` or `components/`!

### Switching Between Demo Products and Generated Products:

In [`lib/data.ts`](file:///Users/tejasmahato/Testing/free%20claude%20code/lib/data.ts):
```typescript
// Merged demo + user listings:
export const PRODUCTS: Product[] = [...BASE_PRODUCTS, ...GENERATED_PRODUCTS];

// Or switch to user generated listings only:
// export const PRODUCTS: Product[] = GENERATED_PRODUCTS;
```

---

## Product Listings Import Pipeline

To batch-import new products:

1. Copy the template:
   ```bash
   cp incoming/listings-template.csv incoming/listings.csv
   ```
2. Populate rows in `incoming/listings.csv`. Required columns: `name`, `category` (women|men), `subcategory`, `price`, `image1`.
3. Drop image files into `incoming/images/`.
4. Run the import script:
   ```bash
   npm run import-listings
   ```
5. Images are automatically resized and converted to JPEG (max 1400px width) in `public/images/products/`, and `lib/generated-products.ts` is regenerated.

---

## Development & Build Commands

```bash
# Start development server
npm run dev

# Build production bundle (type checks + page generation)
npm run build

# Start production server
npm run start

# Run listings importer
npm run import-listings
```

---

## UPI / Google Pay Payments

VELOUR checkout uses GPay/UPI as its only payment method. Orders are created
`pending` / `unpaid` and are only confirmed after an administrator verifies the
actual UPI transfer.

### Configuration

Set these build-time variables locally (`.env.local`) and in the deployment
environment:

```bash
NEXT_PUBLIC_UPI_ID=merchant@bank
NEXT_PUBLIC_UPI_PAYEE_NAME=MERCHANT NAME
```

Both are read by [`lib/upi.ts`](lib/upi.ts) to build the UPI deep link and QR
code. If either is missing, the payment page shows a configuration error
instead of a payment button.

For InsForge deployments:

```bash
npx -y @insforge/cli deployments env set NEXT_PUBLIC_UPI_ID "merchant@bank"
npx -y @insforge/cli deployments env set NEXT_PUBLIC_UPI_PAYEE_NAME "MERCHANT NAME"
npx -y @insforge/cli deployments deploy .
```

### Flow

1. Checkout inserts an order with `status = 'pending'`, `payment_status = 'unpaid'`,
   and `payment_method = 'upi'`, then redirects to `/payment/<orderId>`.
2. `/payment/<orderId>` loads the order through RLS (owner-only), shows the
   amount, merchant name, and UPI ID, and provides a GPay deep link plus a QR
   code for any compatible UPI app.
3. `/payment/return?orderId=<id>` shows the stored status. Returning to the
   store **does not** mark the order paid.
4. `/profile` shows the real `payment_status` and `payment_method` for every
   order, with the tracker `pending → confirmed → shipped → delivered`.

### Verifying a payment (admin only)

After matching the UPI transfer against the bank statement, run:

```bash
npx -y @insforge/cli db rpc verify_order_payment --data '{"p_order_id":"<order-uuid>"}'
```

This atomically sets `status = 'confirmed'` and `payment_status = 'paid'`. The
function is executable only by the project admin role; it is revoked from
`anon`, `authenticated`, and `PUBLIC`, so a browser client cannot call it.
Customers have no `UPDATE` policy on `orders`, and database triggers force
`pending`/`unpaid`/`upi` on insert and reject client changes to protected
fields.
# VELOUR

# VELOUR Listings Pipeline

This folder is used to import custom product listings into the VELOUR catalogue.

## Workflow

1. Copy `incoming/listings-template.csv` to `incoming/listings.csv`:
   ```bash
   cp incoming/listings-template.csv incoming/listings.csv
   ```
2. Fill one row per product in `incoming/listings.csv`.
3. Drop product photos corresponding to `image1` and `image2` into `incoming/images/`.
4. Run the import script:
   ```bash
   npm run import-listings
   ```
5. View the imported products on the site! To make them live in the catalogue, `lib/data.ts` automatically merges `GENERATED_PRODUCTS` with `BASE_PRODUCTS`.

## Column Reference

| Column | Required | Type / Format | Description |
| :--- | :--- | :--- | :--- |
| `name` | **Yes** | String | Full product display name (e.g. "Belted Wool Trench") |
| `category` | **Yes** | `women` \| `men` | Primary department |
| `subcategory` | **Yes** | String | Category group (e.g. "Coats & Outerwear", "Knitwear & Sweaters") |
| `price` | **Yes** | Number | Current selling price (e.g. 240 or 240.00) |
| `compareAtPrice`| No | Number | Original / Strike-through price if on sale (optional) |
| `description` | No | String | Detailed editorial product description |
| `sizes` | No | Pipe-delimited | Available sizes (e.g. `XS\|S\|M\|L\|XL`). Defaults to `XS,S,M,L,XL` |
| `image1` | **Yes** | Filename | Primary front image in `incoming/images/` |
| `image2` | No | Filename | Hover/secondary image in `incoming/images/`. Falls back to `image1` |
| `featured` | No | `yes` \| `no` | Display in Featured Products section on Homepage (default `no`) |
| `isNew` | No | `yes` \| `no` | Display in New Arrivals section (default `no`) |
| `trending` | No | `yes` \| `no` | Display in Trending section (default `no`) |

## Image Optimization

The script automatically resizes images to a maximum width of 1400px JPEG using macOS-native `sips` into `public/images/products/<id>-1.jpg` and `public/images/products/<id>-2.jpg`. If an image file is not found in `incoming/images/`, a neutral placeholder is used and a warning is logged.

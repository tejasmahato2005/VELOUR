"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface ListingControlsProps {
  subcategories: string[];
  activeSubcategory?: string;
  activeSort?: string;
  totalCount: number;
}

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

export function ListingControls({
  subcategories,
  activeSubcategory,
  activeSort = "featured",
  totalCount,
}: ListingControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newSort === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", newSort);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const createSubHref = (sub?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!sub || sub.toLowerCase() === "all") {
      params.delete("sub");
    } else {
      params.set("sub", sub);
    }
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  return (
    <div className="listing-controls">
      {/* Subcategory Filter Pills */}
      <div className="filter-pills" role="tablist" aria-label="Subcategory filters">
        <Link
          href={createSubHref(undefined)}
          className={`filter-pill ${!activeSubcategory ? "active" : ""}`}
        >
          All Items ({totalCount})
        </Link>
        {subcategories.map((sub) => {
          const isActive = activeSubcategory?.toLowerCase() === sub.toLowerCase();
          return (
            <Link
              key={sub}
              href={createSubHref(sub)}
              className={`filter-pill ${isActive ? "active" : ""}`}
            >
              {sub}
            </Link>
          );
        })}
      </div>

      {/* Sort Select */}
      <div className="sort-select-wrapper">
        <label htmlFor="sort-dropdown" className="sort-label">
          Sort By:
        </label>
        <select
          id="sort-dropdown"
          value={activeSort}
          onChange={handleSortChange}
          className="sort-select"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

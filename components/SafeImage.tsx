"use client";

import React, { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";

// Elegant neutral geometric SVG placeholder data-URI for guaranteed offline/error fallback
const FALLBACK_PLACEHOLDER =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='100%25' height='100%25' fill='%23f2eee9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' letter-spacing='3' fill='%239e948a'%3EVELOUR%3C/text%3E%3C/svg%3E";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = FALLBACK_PLACEHOLDER,
  className = "",
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...rest}
      src={hasError ? fallbackSrc : currentSrc}
      alt={alt || "VELOUR luxury garment"}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

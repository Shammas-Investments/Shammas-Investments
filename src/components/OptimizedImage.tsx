"use client";

import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { getShimmerPlaceholder, DEFAULT_BLUR_DATA_URL } from "@/lib/image-utils";

interface OptimizedImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  shimmer?: boolean;
  fallbackColor?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  shimmer = true,
  width,
  height,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if src is a static import (has blurDataURL built-in)
  const isStaticImport = typeof src === "object" && "src" in src;

  // Get blur data URL
  const blurDataURL = isStaticImport
    ? (src as StaticImageData).blurDataURL
    : shimmer
      ? getShimmerPlaceholder(
          typeof width === "number" ? width : 700,
          typeof height === "number" ? height : 475
        )
      : DEFAULT_BLUR_DATA_URL;

  if (hasError) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center bg-neutral-100",
          className
        )}
        style={{
          width: typeof width === "number" ? width : "100%",
          height: typeof height === "number" ? height : "auto",
        }}
      >
        <svg
          className="h-10 w-10 text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(
        className,
        "transition-opacity duration-300",
        isLoading ? "opacity-0" : "opacity-100"
      )}
      placeholder="blur"
      blurDataURL={blurDataURL}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setIsLoading(false);
        setHasError(true);
      }}
      {...props}
    />
  );
};

export default OptimizedImage;

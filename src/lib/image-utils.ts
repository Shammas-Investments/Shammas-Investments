// Image utility functions for blur placeholders

// Base64 encoded tiny placeholder image (1x1 gray pixel)
export const PLACEHOLDER_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwYABQAB/auq/HYAAAAASUVORK5CYII=";

// Shimmer effect SVG for loading state
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f5f5f5" offset="0%" />
      <stop stop-color="#e5e5e5" offset="50%" />
      <stop stop-color="#f5f5f5" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f5f5f5" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

// Generate shimmer placeholder data URL
export const getShimmerPlaceholder = (w: number = 700, h: number = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

// Generate a solid color placeholder
export const getColorPlaceholder = (color: string = "#f5f5f5") =>
  `data:image/svg+xml;base64,${toBase64(
    `<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="${color}"/></svg>`
  )}`;

// Default blur data URL for images (neutral gray)
export const DEFAULT_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg==";

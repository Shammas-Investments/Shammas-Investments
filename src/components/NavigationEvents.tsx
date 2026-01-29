"use client";

import { useEffect, useCallback, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: "ease",
  speed: 300,
});

function NavigationEventsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isNavigatingRef = useRef(false);

  // Handle navigation complete
  useEffect(() => {
    if (isNavigatingRef.current) {
      NProgress.done();
      isNavigatingRef.current = false;
    }
  }, [pathname, searchParams]);

  // Handle click events on links
  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");

    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    // Skip external links, hash links, and download links
    if (
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      anchor.hasAttribute("download") ||
      anchor.target === "_blank"
    ) {
      return;
    }

    // Skip if same page
    const currentPath = window.location.pathname + window.location.search;
    const newUrl = new URL(href, window.location.origin);
    const newPath = newUrl.pathname + newUrl.search;

    if (currentPath === newPath) {
      return;
    }

    // Start progress bar
    isNavigatingRef.current = true;
    NProgress.start();
  }, []);

  // Handle popstate (browser back/forward)
  const handlePopState = useCallback(() => {
    isNavigatingRef.current = true;
    NProgress.start();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
      NProgress.done();
    };
  }, [handleClick, handlePopState]);

  return null;
}

export default function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsContent />
    </Suspense>
  );
}

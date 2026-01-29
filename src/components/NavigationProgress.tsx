"use client";

import { useEffect } from "react";
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

/**
 * Navigation progress bar component
 * Shows a loading bar at the top of the page during route transitions
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}

/**
 * Hook to manually control progress bar
 */
export function useNavigationProgress() {
  const start = () => NProgress.start();
  const done = () => NProgress.done();
  const set = (n: number) => NProgress.set(n);
  const inc = (amount?: number) => NProgress.inc(amount);

  return { start, done, set, inc };
}

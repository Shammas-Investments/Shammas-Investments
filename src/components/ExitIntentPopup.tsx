"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const EXIT_INTENT_KEY = "exit-intent-shown";
const SHOW_AFTER_DAYS = 7; // Show again after 7 days

const ExitIntentPopup = () => {
  // Temporarily disabled - set to true to enable
  const ENABLED = false;

  const [isVisible, setIsVisible] = useState(false);

  // Return null if disabled
  if (!ENABLED) return null;

  const shouldShowPopup = useCallback(() => {
    if (typeof window === "undefined") return false;

    const lastShown = localStorage.getItem(EXIT_INTENT_KEY);
    if (!lastShown) return true;

    const daysSinceShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
    return daysSinceShown >= SHOW_AFTER_DAYS;
  }, []);

  useEffect(() => {
    if (!shouldShowPopup()) return;

    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 5 && !hasTriggered) {
        hasTriggered = true;
        setIsVisible(true);
      }
    };

    // Delay adding the listener to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldShowPopup]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(EXIT_INTENT_KEY, Date.now().toString());
  };

  const handleCTAClick = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600"
                aria-label="Close popup"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                  <svg className="h-8 w-8 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>

                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Wait! Before You Go...
                </h2>

                <p className="mt-3 text-neutral-600">
                  Get a <span className="font-semibold text-neutral-950">free consultation</span> to discuss your project.
                  No commitment required.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/get-quote"
                    onClick={handleCTAClick}
                    className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleCTAClick}
                    className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 px-6 py-3 font-semibold text-neutral-950 transition hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    Schedule a Call
                  </Link>
                </div>

                {/* Trust indicators */}
                <p className="mt-6 text-xs text-neutral-500">
                  Trusted by 50+ businesses worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

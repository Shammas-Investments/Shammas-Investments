"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "pending" | "accepted" | "declined";

const CookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      setConsentStatus(savedConsent as ConsentStatus);
      return;
    }

    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setIsVisible(false);

    // Enable analytics if accepted
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setIsVisible(false);

    // Disable analytics if declined
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  // Don't render if already made a choice
  if (consentStatus !== "pending" && !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 print:hidden"
        >
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-neutral-950 p-6 shadow-2xl ring-1 ring-white/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="text-sm text-neutral-300">
                    We use cookies to enhance your experience and analyze site traffic.
                    By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-white underline underline-offset-4 hover:text-neutral-200"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
                <div className="flex flex-shrink-0 gap-3">
                  <button
                    onClick={handleDecline}
                    className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

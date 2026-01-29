"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCSRF } from "@/hooks/useCSRF";

const NEWSLETTER_POPUP_KEY = "newsletter-popup-shown";
const SHOW_AFTER_DAYS = 7; // Show again after 7 days
const SHOW_DELAY_MS = 30000; // Show after 30 seconds on site

const NewsletterPopup = () => {
  const { csrfFetch, isReady: csrfReady } = useCSRF();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if we should show the popup
    const shouldShow = () => {
      if (typeof window === "undefined") return false;

      const lastShown = localStorage.getItem(NEWSLETTER_POPUP_KEY);
      if (!lastShown) return true;

      const daysSinceShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
      return daysSinceShown >= SHOW_AFTER_DAYS;
    };

    if (!shouldShow()) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(NEWSLETTER_POPUP_KEY, Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const response = await csrfFetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! Check your inbox.");
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600"
                aria-label="Close popup"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header background */}
              <div className="bg-neutral-950 px-8 py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-semibold text-white">
                  Stay Updated
                </h2>
                <p className="mt-2 text-neutral-300">
                  Get tech insights and updates delivered to your inbox
                </p>
              </div>

              {/* Form */}
              <div className="p-8">
                {status === "success" ? (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-medium text-neutral-950">{message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-full border border-neutral-200 px-5 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading" || !csrfReady}
                        className="w-full rounded-full bg-neutral-950 px-5 py-3 font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50"
                      >
                        {status === "loading" ? "Subscribing..." : "Subscribe"}
                      </button>
                    </div>
                    {status === "error" && (
                      <p className="mt-3 text-center text-sm text-red-600">{message}</p>
                    )}
                  </form>
                )}

                <p className="mt-4 text-center text-xs text-neutral-500">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;

"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Register service worker for PWA functionality
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register(
            "/service-worker.js"
          );
          if (process.env.NODE_ENV === 'development') {
            console.log("✅ Service Worker registered:", registration.scope);
          }

          // Listen for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (process.env.NODE_ENV === 'development') {
              console.log("🔄 New Service Worker version found");
            }
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  if (process.env.NODE_ENV === 'development') {
                    console.log(
                      "📦 New Service Worker installed (ready to activate)"
                    );
                  }
                  // Optionally show a notification to the user
                  // that new content is available
                }
              });
            }
          });
        } catch (error) {
          // Only log errors in development
          if (process.env.NODE_ENV === 'development') {
            console.error("❌ Service Worker registration failed:", error);
          }
        }
      };

      // Register on load or immediately if already loaded
      if (document.readyState === "loading") {
        window.addEventListener("load", () => {
          registerServiceWorker();
        });
      } else {
        registerServiceWorker();
      }
    }
  }, []);

  return null;
}

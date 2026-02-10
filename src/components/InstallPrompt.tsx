"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event for later use
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the install button after a short delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000); // Show after 3 seconds
      if (process.env.NODE_ENV === 'development') {
        console.log("PWA install prompt event fired");
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if app is already installed
    window.addEventListener("appinstalled", () => {
      if (process.env.NODE_ENV === 'development') {
        console.log("PWA was installed");
      }
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (process.env.NODE_ENV === 'development') {
        console.log("Install prompt not available");
      }
      return;
    }

    try {
      // Show the install prompt
      await deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (process.env.NODE_ENV === 'development') {
        console.log(`User response to the install prompt: ${outcome}`);
      }

      // We've used the prompt, and can't use it again
      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Error during PWA installation:", error);
      }
    }
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gradient-to-r from-neutral-900 to-neutral-950 text-white rounded-3xl shadow-2xl p-6 z-50 border border-neutral-800 animate-slide-in-bottom">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg mb-1">
            Install Shammas Development
          </h3>
          <p className="text-sm text-neutral-300">
            Add to your home screen for quick access and offline support!
          </p>
        </div>
        <button
          onClick={() => setShowPrompt(false)}
          className="flex-shrink-0 text-neutral-300 hover:text-white text-2xl transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleInstallClick}
          className="flex-1 bg-white text-neutral-950 font-semibold py-2.5 px-4 rounded-full hover:bg-neutral-200 transition-colors"
        >
          Install
        </button>
        <button
          onClick={() => setShowPrompt(false)}
          className="flex-1 bg-neutral-800 text-white font-semibold py-2.5 px-4 rounded-full hover:bg-neutral-700 transition-colors"
        >
          Later
        </button>
      </div>
    </div>
  );
}

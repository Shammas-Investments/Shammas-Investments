"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, useBootstrap?: boolean) => void;
    };
  }
}

const Trustpilot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) return;

    // Check if bootstrap script already loaded
    const existingScript = document.querySelector(
      `script[src*="widget.trustpilot.com"]`
    );
    if (existingScript) {
      setIsLoaded(true);
      // Initialize widget if Trustpilot API is ready
      if (window.Trustpilot && widgetRef.current) {
        window.Trustpilot.loadFromElement(widgetRef.current, true);
      }
      return;
    }

    // Delay loading to prioritize core content
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.type = "text/javascript";

      script.onload = () => {
        setIsLoaded(true);
        // Initialize the widget after script loads
        if (window.Trustpilot && widgetRef.current) {
          window.Trustpilot.loadFromElement(widgetRef.current, true);
        }
      };

      document.head.appendChild(script);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  return (
    <div
      ref={widgetRef}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="697a48ede90bef35dd94f4c3"
      data-style-height="52px"
      data-style-width="100%"
      data-token="47a263aa-8b3a-4194-969f-df36fb6ddc4f"
    >
      <a
        href="https://www.trustpilot.com/review/shammasdevelopment.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};

export default Trustpilot;

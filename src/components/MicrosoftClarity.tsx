"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

interface MicrosoftClarityProps {
  projectId?: string;
}

const MicrosoftClarity = ({
  projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
}: MicrosoftClarityProps) => {
  useEffect(() => {
    // Don't load if no project ID
    if (!projectId) {
      return;
    }

    // Check if already loaded
    if (window.clarity) {
      return;
    }

    // Load Microsoft Clarity script
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `;

    document.head.appendChild(script);

    return () => {
      // Cleanup is not typically needed for Clarity
    };
  }, [projectId]);

  return null;
};

export default MicrosoftClarity;

// Utility functions for Clarity
export const clarityIdentify = (userId: string, customData?: Record<string, string>) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("identify", userId);
    if (customData) {
      Object.entries(customData).forEach(([key, value]) => {
        window.clarity?.("set", key, value);
      });
    }
  }
};

export const claritySetTag = (key: string, value: string) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", key, value);
  }
};

export const clarityUpgrade = (reason: string) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("upgrade", reason);
  }
};

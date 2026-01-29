"use client";

import { useState, useEffect, useCallback } from "react";

const CSRF_TOKEN_NAME = "csrf_token";
const CSRF_HEADER_NAME = "x-csrf-token";

/**
 * Generate a cryptographically secure random token in the browser
 */
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

/**
 * Get CSRF token from cookie
 */
function getTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === CSRF_TOKEN_NAME) {
      return value;
    }
  }
  return null;
}

/**
 * Set CSRF token in cookie
 */
function setTokenCookie(token: string): void {
  if (typeof document === "undefined") return;

  const isProduction = window.location.protocol === "https:";
  const cookieOptions = [
    `${CSRF_TOKEN_NAME}=${token}`,
    "path=/",
    "SameSite=Strict",
    `max-age=${60 * 60 * 24}`, // 24 hours
    isProduction ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");

  document.cookie = cookieOptions;
}

/**
 * Hook to manage CSRF tokens for form submissions
 */
export function useCSRF() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Try to get existing token from cookie
    let existingToken = getTokenFromCookie();

    // If no token exists, generate a new one
    if (!existingToken) {
      existingToken = generateToken();
      setTokenCookie(existingToken);
    }

    setToken(existingToken);
  }, []);

  /**
   * Get headers with CSRF token for fetch requests
   */
  const getHeaders = useCallback(
    (additionalHeaders?: HeadersInit): HeadersInit => {
      return {
        ...additionalHeaders,
        [CSRF_HEADER_NAME]: token || "",
      };
    },
    [token]
  );

  /**
   * Fetch wrapper with CSRF token included
   */
  const csrfFetch = useCallback(
    async (url: string, options?: RequestInit): Promise<Response> => {
      const headers = new Headers(options?.headers);
      if (token) {
        headers.set(CSRF_HEADER_NAME, token);
      }

      return fetch(url, {
        ...options,
        headers,
        credentials: "same-origin",
      });
    },
    [token]
  );

  return {
    token,
    getHeaders,
    csrfFetch,
    headerName: CSRF_HEADER_NAME,
    isReady: token !== null,
  };
}

export { CSRF_TOKEN_NAME, CSRF_HEADER_NAME };

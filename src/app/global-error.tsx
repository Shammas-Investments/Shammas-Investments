"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="w-full max-w-md text-center">
          {/* Error Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Critical Error
          </h1>
          <p className="mt-4 text-gray-600">
            A critical error occurred and the application could not recover.
            We apologize for the inconvenience.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
              <p className="text-sm font-medium text-red-800">Error Details:</p>
              <p className="mt-1 font-mono text-xs text-red-600 break-all">{error.message}</p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={reset}
              className="w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Try Again
            </button>
            <a
              href="/"
              className="w-full rounded-full border-2 border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Go to Homepage
            </a>
          </div>

          {/* Contact */}
          <p className="mt-8 text-sm text-gray-500">
            Need help?{" "}
            <a href="mailto:info@shammasdevelopment.io" className="font-medium text-gray-900 hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;

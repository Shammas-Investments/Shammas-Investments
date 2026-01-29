"use client";

import Container from "@/components/Container";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-24">
      <div className="text-center">
        {/* Offline Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
          <svg
            className="h-12 w-12 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="mt-8 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
          You&apos;re Offline
        </h1>
        <p className="mt-4 max-w-md text-base text-neutral-600">
          It looks like you&apos;ve lost your internet connection. Some features
          may not be available until you&apos;re back online.
        </p>

        {/* What you can do */}
        <div className="mt-10 rounded-2xl bg-neutral-50 p-6 text-left">
          <h2 className="font-semibold text-neutral-950">
            While you&apos;re offline, you can:
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Browse previously visited pages
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              View cached content and images
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="text-neutral-400">
                Submit forms (requires connection)
              </span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-neutral-950 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Connection status indicator */}
        <p className="mt-8 text-sm text-neutral-400">
          We&apos;ll automatically reconnect when your connection is restored.
        </p>
      </div>
    </Container>
  );
}

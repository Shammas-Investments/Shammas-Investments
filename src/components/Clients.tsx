"use client";
import React from "react";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Clutch Logo SVG
const ClutchLogo = () => (
  <svg viewBox="0 0 100 30" className="h-8 w-auto" fill="currentColor">
    <path d="M15 3C8.4 3 3 8.4 3 15s5.4 12 12 12c3.2 0 6.1-1.3 8.2-3.3l-2.8-2.8c-1.4 1.4-3.3 2.2-5.4 2.2-4.4 0-8-3.6-8-8s3.6-8 8-8c2.1 0 4 .8 5.4 2.2l2.8-2.8C21.1 4.3 18.2 3 15 3z"/>
    <text x="30" y="20" fontSize="14" fontWeight="600">Clutch</text>
  </svg>
);

// Trustpilot Logo SVG
const TrustpilotLogo = () => (
  <svg viewBox="0 0 140 30" className="h-8 w-auto" fill="currentColor">
    <path d="M15 2l3.5 10.5H30l-9 6.5 3.5 10.5L15 23l-9.5 6.5L9 19 0 12.5h11.5L15 2z" fill="#00B67A"/>
    <text x="35" y="20" fontSize="14" fontWeight="600" fill="currentColor">Trustpilot</text>
  </svg>
);

// Google Logo SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 140 30" className="h-8 w-auto">
    <text x="0" y="21" fontSize="16" fontWeight="500">
      <tspan fill="#4285F4">G</tspan>
      <tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan>
      <tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan>
      <tspan fill="#EA4335">e</tspan>
      <tspan fill="currentColor"> Reviews</tspan>
    </text>
  </svg>
);

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-neutral-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

interface ReviewPlatform {
  name: string;
  logo: React.ReactNode;
  rating: number;
  reviewCount: string;
  url: string;
  bgColor: string;
}

const reviewPlatforms: ReviewPlatform[] = [
  {
    name: "Clutch",
    logo: <ClutchLogo />,
    rating: 4,
    reviewCount: "Good",
    url: "https://clutch.co/profile/shammas-development", // Update with your actual Clutch URL
    bgColor: "hover:bg-neutral-800",
  },
  {
    name: "Trustpilot",
    logo: <TrustpilotLogo />,
    rating: 4,
    reviewCount: "Good",
    url: "https://www.trustpilot.com/review/shammasdevelopment.io",
    bgColor: "hover:bg-neutral-800",
  },
  {
    name: "Google",
    logo: <GoogleLogo />,
    rating: 4,
    reviewCount: "Good",
    url: "https://g.page/shammas-development/review", // Update with your actual Google Reviews URL
    bgColor: "hover:bg-neutral-800",
  },
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by teams who care about quality, speed, and long-term reliability
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {reviewPlatforms.map((platform) => (
              <li key={platform.name}>
                <FadeIn>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 ${platform.bgColor} hover:border-neutral-700`}
                  >
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      {platform.logo}
                    </div>
                    <div className="mt-6">
                      <StarRating rating={platform.rating} />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {platform.reviewCount}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">
                      Read our reviews
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500 transition-colors group-hover:text-white">
                      <span>View on {platform.name}</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </a>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;

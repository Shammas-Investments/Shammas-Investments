"use client";

import { useEffect } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const TrustpilotReviews = () => {
  useEffect(() => {
    // Load Trustpilot widget script
    const script = document.createElement("script");
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          {/* Trustpilot Widget */}
          <div className="flex justify-center">
            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="YOUR_TRUSTPILOT_BUSINESS_ID"
              data-style-height="52px"
              data-style-width="100%"
            >
              <a
                href="https://www.trustpilot.com/review/shammasdevelopment.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-950"
              >
                View our Trustpilot reviews
              </a>
            </div>
          </div>

          {/* Fallback Reviews (shown while Trustpilot loads or as backup) */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <FadeIn key={index}>
                <div className="rounded-2xl bg-neutral-50 p-8">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-green-500" : "text-neutral-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                      {review.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-950">{review.author}</p>
                      <p className="text-sm text-neutral-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* View More Link */}
          <div className="mt-12 text-center">
            <a
              href="https://www.trustpilot.com/review/shammasdevelopment.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-neutral-950 hover:text-neutral-600 transition"
            >
              View all reviews on Trustpilot
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

// Sample reviews (replace with actual reviews or fetch from Trustpilot API)
const reviews = [
  {
    rating: 5,
    text: "Shammas Development transformed our entire e-commerce operation. The platform they built has become the backbone of our digital strategy. Highly recommended!",
    author: "Michael Chen",
    role: "VP of Digital Commerce",
  },
  {
    rating: 5,
    text: "The AI support system feels like magic. Our customers get instant, accurate responses, and our team can finally focus on what matters. Outstanding work!",
    author: "Sarah Johnson",
    role: "Head of Customer Success",
  },
  {
    rating: 5,
    text: "Professional, responsive, and delivered exactly what we needed. They understood our requirements perfectly and exceeded our expectations.",
    author: "David Park",
    role: "Founder & CEO",
  },
];

export default TrustpilotReviews;

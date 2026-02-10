"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface TechCarouselProps {
  items: string[];
}

const TechCarousel = ({ items }: TechCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const animationRef = useRef<number>(0);
  const touchStartRef = useRef<number>(0);
  const speed = 0.5;

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    },
    []
  );

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsPaused(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = touchStartRef.current - e.touches[0].clientX;
    touchStartRef.current = e.touches[0].clientX;
    offsetRef.current += delta;
    if (offsetRef.current < 0) offsetRef.current = 0;
    if (offsetRef.current >= el.scrollWidth / 2) offsetRef.current = 0;
    el.style.transform = `translateX(-${offsetRef.current}px)`;
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.transform = "translateX(0)";
      return;
    }

    const step = () => {
      if (!isPaused) {
        offsetRef.current += speed;
        if (offsetRef.current >= el.scrollWidth / 2) {
          offsetRef.current = 0;
        }
        el.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      ref={containerRef}
      role="marquee"
      aria-label="Technology stack carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 rounded-lg"
    >
      <div ref={scrollRef} className="flex w-max gap-3">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="sr-only">
        {isPaused ? "Carousel paused." : "Carousel scrolling."} Press Space or Enter to {isPaused ? "resume" : "pause"}.
      </span>
    </div>
  );
};

export default TechCarousel;

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./Container";
import FadeIn from "./FadeIn";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 10, suffix: "M+", label: "Revenue Generated" },
];

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ value, suffix, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {suffix === "$" ? "$" : ""}
      {count}
      {suffix !== "$" ? suffix : ""}
    </span>
  );
};

const AnimatedStats = () => {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Trusted by Growing Businesses
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              We&apos;ve helped companies across industries achieve measurable results
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-neutral-400 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AnimatedStats;

"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "black" | "gray";
  className?: string;
}

const LoadingSpinner = ({
  size = "md",
  color = "white",
  className,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const colorClasses = {
    white: "border-white/30 border-t-white",
    black: "border-neutral-300 border-t-neutral-900",
    gray: "border-neutral-200 border-t-neutral-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        "rounded-full border-2",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      style={{
        animation: "spin 0.8s linear infinite",
      }}
    />
  );
};

// Loading dots animation
export const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <span className={clsx("inline-flex items-center gap-1", className)}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="h-1 w-1 rounded-full bg-current"
        />
      ))}
    </span>
  );
};

// Pulse skeleton for loading states
export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-md bg-neutral-200",
        className
      )}
      {...props}
    />
  );
};

export default LoadingSpinner;

import clsx from "clsx";
import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "rounded";
  width?: string | number;
  height?: string | number;
  lines?: number;
  animate?: boolean;
}

/**
 * Skeleton loading component for displaying loading placeholders
 */
const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rectangular",
  width,
  height,
  lines = 1,
  animate = true,
}) => {
  const baseClasses = clsx(
    "bg-neutral-200",
    animate && "animate-pulse",
    {
      "rounded": variant === "text" || variant === "rounded",
      "rounded-full": variant === "circular",
      "rounded-none": variant === "rectangular",
    }
  );

  const style: React.CSSProperties = {
    width: width ?? (variant === "circular" ? height : "100%"),
    height: height ?? (variant === "text" ? "1em" : "auto"),
  };

  if (lines > 1 && variant === "text") {
    return (
      <div className={clsx("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={baseClasses}
            style={{
              ...style,
              width: index === lines - 1 ? "75%" : "100%",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={clsx(baseClasses, className)} style={style} />
  );
};

/**
 * Pre-configured skeleton variants
 */
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className,
}) => (
  <Skeleton variant="text" lines={lines} height="1rem" className={className} />
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className,
}) => (
  <Skeleton
    variant="circular"
    width={size}
    height={size}
    className={className}
  />
);

export const SkeletonCard: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div className={clsx("rounded-2xl bg-neutral-50 p-6", className)}>
    <Skeleton variant="rectangular" height={200} className="rounded-xl mb-4" />
    <Skeleton variant="text" height="1.5rem" className="mb-2" />
    <Skeleton variant="text" lines={2} height="1rem" />
  </div>
);

export const SkeletonButton: React.FC<{ className?: string }> = ({
  className,
}) => (
  <Skeleton
    variant="rounded"
    width={120}
    height={44}
    className={clsx("rounded-full", className)}
  />
);

export const SkeletonImage: React.FC<{
  aspectRatio?: string;
  className?: string;
}> = ({ aspectRatio = "16/9", className }) => (
  <div
    className={clsx("bg-neutral-200 animate-pulse rounded-2xl", className)}
    style={{ aspectRatio }}
  />
);

export default Skeleton;

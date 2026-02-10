"use client";

import React from "react";
import clsx from "clsx";

interface CalendlyButtonProps {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  children,
  invert = false,
  className,
}) => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  const handleClick = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Book a strategy call (opens in new window)"
      className={clsx(
        "inline-flex rounded-full px-5 py-2.5 sm:px-4 sm:py-1.5 text-sm font-semibold transition min-h-[44px] items-center justify-center",
        invert
          ? "bg-white text-neutral-950 hover:bg-neutral-200"
          : "bg-neutral-950 text-white hover:bg-neutral-800",
        className
      )}
    >
      <span>{children}</span>
    </button>
  );
};

export default CalendlyButton;

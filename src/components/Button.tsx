import Link from "next/link";
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  invert,
  href,
  className,
  children,
  ...props
}) => {
  const buttonClassName = clsx(
    className,
    "inline-flex rounded-full px-5 py-2.5 sm:px-4 sm:py-1.5 text-sm font-semibold transition min-h-[44px] items-center justify-center",
    // Focus states for accessibility
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    // Active state feedback
    "active:scale-95",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200 focus:ring-white"
      : "bg-neutral-950 text-white hover:bg-neutral-800 focus:ring-neutral-950",
    // Disabled state
    props.disabled && "opacity-60 cursor-not-allowed active:scale-100"
  );

  const inner = <span>{children}</span>;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {inner}
    </button>
  );
};

export default Button;

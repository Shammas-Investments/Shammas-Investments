import Link from "next/link";
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ invert, href, className, children, ...props }) => {
  const buttonClassName = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
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

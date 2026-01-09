import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  fillOnHover?: boolean;
}

const Logo: React.FC<LogoProps> = ({ invert, href, className, children, fillOnHover = false, ...props }) => {
  className = clsx(
    className,
    fillOnHover && "group-hover:text-neutral-700",
    invert ? "text-white" : "text-neutral-950"
  );

  const inner = <span className="relative">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;

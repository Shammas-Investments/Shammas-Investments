import clsx from "clsx";
import React from "react";

interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;

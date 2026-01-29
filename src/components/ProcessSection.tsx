import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

interface ProcessSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ title, icon, children }) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-start lg:gap-x-12 xl:gap-x-16">
        {/* Icon Section */}
        <FadeIn className="flex justify-center lg:justify-start">
          <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-3xl bg-neutral-950 text-white sm:h-32 sm:w-32 lg:h-40 lg:w-40">
            {icon}
          </div>
        </FadeIn>

        {/* Content Section */}
        <div className="mt-8 lg:mt-0 lg:flex-1">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
};

export default ProcessSection;

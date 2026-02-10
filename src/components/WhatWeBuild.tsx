import Link from "next/link";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";

const items = [
  {
    number: "01",
    title: "Internal Tools",
    description:
      "Dashboards, admin panels, workflow software.",
    href: "/internal-tools",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "LLM-powered workflows and document processing.",
    href: "/ai-automation",
  },
  {
    number: "03",
    title: "MVP and Product Builds",
    description:
      "Production-ready MVPs built to scale.",
    href: "/mvp-development",
  },
];

const WhatWeBuild = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="What We Build"
        title="Practical technology that solves real problems"
      >
        <p>
          We focus on execution and results building systems that work the way your business works.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FadeIn key={item.number}>
                <Link href={item.href}>
                  <div className="relative flex flex-col rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100">
                    <span className="font-display text-5xl font-light text-neutral-300">
                      {item.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950">
                      Learn more
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default WhatWeBuild;

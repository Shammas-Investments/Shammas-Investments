import ProcessSection from "./ProcessSection";

const BuildIcon = () => (
  <svg
    className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const Build = () => {
  return (
    <ProcessSection title="Build" icon={<BuildIcon />}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work in focused sprints to deliver incremental value while maintaining
          flexibility for evolving requirements. You see progress through{" "}
          <strong className="font-semibold text-neutral-950">weekly demos</strong>{" "}
          and stay informed at every stage.
        </p>
        <p>
          Our development team follows best practices including code reviews,
          continuous integration, and automated testing to ensure quality.
        </p>
        <p>
          Documentation is created alongside development, not as an afterthought —
          ensuring your team can maintain and extend the system confidently.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What you can expect
      </h3>
      <ul className="mt-4 space-y-2 text-base text-neutral-600">
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Weekly demos and progress updates</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Continuous testing and code reviews</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-neutral-950">•</span>
          <span>Documentation created alongside development</span>
        </li>
      </ul>
    </ProcessSection>
  );
};

export default Build;

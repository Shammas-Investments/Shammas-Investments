import ProcessSection from "./ProcessSection";
import { TagList, TagListItem } from "./TagList";

const LaunchIcon = () => (
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
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
);

const Launch = () => {
  return (
    <ProcessSection title="Launch" icon={<LaunchIcon />}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before going live, we conduct thorough{" "}
          <strong className="font-semibold text-neutral-950">testing</strong>{" "}
          across all scenarios. Every feature is validated against requirements
          and real-world conditions.
        </p>
        <p>
          Our deployment process follows best practices with staged rollouts.
          We coordinate closely with your team to ensure a smooth transition
          with minimal disruption.
        </p>
        <p>
          Post-launch, we provide{" "}
          <strong className="font-semibold text-neutral-950">handoff</strong>{" "}
          documentation and support options to ensure your team can confidently
          manage and extend the solution.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Deployment</TagListItem>
        <TagListItem>Handoff & training</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Support options</TagListItem>
      </TagList>
    </ProcessSection>
  );
};

export default Launch;

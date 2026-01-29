import ProcessSection from "./ProcessSection";
import { TagList, TagListItem } from "./TagList";

const DiscoverIcon = () => (
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
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const Discover = () => {
  return (
    <ProcessSection title="Discovery" icon={<DiscoverIcon />}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin every project with a focused discovery phase to understand your{" "}
          <strong className="font-semibold text-neutral-950">requirements</strong>,
          define the system outline, and establish clear success criteria.
        </p>
        <p>
          Through stakeholder interviews and technical analysis, we identify the optimal approach and ensure we have a complete picture before moving forward.
        </p>
        <p>
          Discovery concludes with a clear understanding of what we&apos;re building, why it matters, and how we&apos;ll measure success.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Requirements gathering</TagListItem>
        <TagListItem>System outline</TagListItem>
        <TagListItem>Success criteria</TagListItem>
        <TagListItem>Technical feasibility</TagListItem>
        <TagListItem>Stakeholder alignment</TagListItem>
      </TagList>
    </ProcessSection>
  );
};

export default Discover;

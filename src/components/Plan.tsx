import ProcessSection from "./ProcessSection";
import { TagList, TagListItem } from "./TagList";

const PlanIcon = () => (
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
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    />
  </svg>
);

const Plan = () => {
  return (
    <ProcessSection title="Planning" icon={<PlanIcon />}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With insights from discovery, we define a clear{" "}
          <strong className="font-semibold text-neutral-950">scope</strong>,
          create a detailed roadmap, and establish milestones with realistic timelines.
        </p>
        <p>
          We work with you to prioritize features and set expectations for each phase.
          No surprises — you know exactly what you&apos;re getting and when.
        </p>
        <p>
          The planning phase ensures alignment between your business goals and
          our technical approach, creating a foundation for predictable execution.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Scope definition</TagListItem>
        <TagListItem>Roadmap & milestones</TagListItem>
        <TagListItem>Timeline estimates</TagListItem>
        <TagListItem>Resource planning</TagListItem>
        <TagListItem>Risk assessment</TagListItem>
      </TagList>
    </ProcessSection>
  );
};

export default Plan;

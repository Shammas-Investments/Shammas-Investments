import ProcessSection from "./ProcessSection";
import { TagList, TagListItem } from "./TagList";

const SupportIcon = () => (
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
      d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
    />
  </svg>
);

const Support = () => {
  return (
    <ProcessSection title="Support" icon={<SupportIcon />}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our commitment doesn&apos;t end at launch. We provide{" "}
          <strong className="font-semibold text-neutral-950">
            ongoing support
          </strong>{" "}
          to ensure your solution continues to perform and evolve with your
          business needs.
        </p>
        <p>
          From bug fixes and security updates to feature enhancements and{" "}
          <strong className="font-semibold text-neutral-950">
            optimization
          </strong>
          , we&apos;re here for the long term. Your success is our success.
        </p>
        <p>
          We monitor system health, respond to issues proactively, and work with
          you to identify opportunities for{" "}
          <strong className="font-semibold text-neutral-950">
            continuous improvement
          </strong>
          .
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Ongoing maintenance</TagListItem>
        <TagListItem>Feature enhancements</TagListItem>
        <TagListItem>Proactive monitoring</TagListItem>
        <TagListItem>Security updates</TagListItem>
      </TagList>
    </ProcessSection>
  );
};

export default Support;

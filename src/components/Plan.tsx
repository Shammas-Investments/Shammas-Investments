import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import { TagList, TagListItem } from "./TagList";

const Plan = () => {
  return (
    <Section title="Plan" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With insights from discovery, we define a clear{" "}
          <strong className="font-semibold text-neutral-950">scope</strong> and
          create a detailed project plan. Every milestone is mapped out with
          realistic timelines and measurable success metrics.
        </p>
        <p>
          We work with you to prioritize features, establish{" "}
          <strong className="font-semibold text-neutral-950">
            deliverables
          </strong>
          , and set expectations for each phase. No surprises—you know exactly
          what you&apos;re getting and when.
        </p>
        <p>
          The planning phase ensures alignment between your business goals and
          our technical approach, creating a foundation for{" "}
          <strong className="font-semibold text-neutral-950">
            predictable execution
          </strong>
          .
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Scope definition</TagListItem>
        <TagListItem>Milestone planning</TagListItem>
        <TagListItem>Success metrics</TagListItem>
        <TagListItem>Resource allocation</TagListItem>
        <TagListItem>Risk assessment</TagListItem>
        <TagListItem>Timeline & budget</TagListItem>
      </TagList>
    </Section>
  );
};

export default Plan;

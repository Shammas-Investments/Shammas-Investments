import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import { TagList, TagListItem } from "./TagList";

const Launch = () => {
  return (
    <Section title="Launch" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before going live, we conduct comprehensive{" "}
          <strong className="font-semibold text-neutral-950">testing</strong>{" "}
          across all scenarios and devices. Every feature is validated against
          requirements and real-world conditions.
        </p>
        <p>
          Our deployment process follows best practices with staged rollouts and{" "}
          <strong className="font-semibold text-neutral-950">
            monitoring
          </strong>{" "}
          at every step. We coordinate closely with your team to ensure a smooth
          transition with minimal disruption.
        </p>
        <p>
          Post-launch, we provide training and documentation to ensure your team
          can confidently manage the solution from{" "}
          <strong className="font-semibold text-neutral-950">day one</strong>.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>QA testing</TagListItem>
        <TagListItem>Staged deployment</TagListItem>
        <TagListItem>Performance monitoring</TagListItem>
        <TagListItem>Team training</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Go-live support</TagListItem>
      </TagList>
    </Section>
  );
};

export default Launch;

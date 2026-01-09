import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin every project with a comprehensive discovery phase to understand your{" "}
          <strong className="font-semibold text-neutral-950">business objectives</strong>,
          technical requirements, and success metrics. Our team conducts in-depth stakeholder interviews and competitive analysis to ensure we have a complete picture.
        </p>
        <p>
          Through collaborative workshops and strategic planning sessions, we identify opportunities, potential challenges, and the optimal{" "}
          <strong className="font-semibold text-neutral-950">technology stack</strong> for your project. Our experts evaluate your existing infrastructure and workflows to recommend solutions that integrate seamlessly.
        </p>
        <p>
          The discovery phase concludes with a detailed{" "}
          <strong className="font-semibold text-neutral-950">project roadmap</strong>,
          technical specifications, and transparent timeline and budget estimates that set clear expectations for success.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Requirements analysis</TagListItem>
        <TagListItem>Technical feasibility study</TagListItem>
        <TagListItem>Competitive research</TagListItem>
        <TagListItem>Architecture planning</TagListItem>
        <TagListItem>Project roadmap & timeline</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;

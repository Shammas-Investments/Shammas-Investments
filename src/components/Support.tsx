import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import List, { ListItem } from "./List";

const Support = () => {
  return (
    <Section title="Support" image={{ src: imageWhiteboard, shape: 2 }}>
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
      <List className="mt-8">
        <ListItem title="Ongoing Maintenance">
          Regular updates, security patches, and performance optimization to
          keep your system running smoothly.
        </ListItem>
        <ListItem title="Feature Enhancements">
          Iterative improvements based on user feedback and evolving business
          requirements.
        </ListItem>
        <ListItem title="Proactive Monitoring">
          24/7 system monitoring with alerts and rapid response to any issues
          that arise.
        </ListItem>
      </List>
    </Section>
  );
};

export default Support;

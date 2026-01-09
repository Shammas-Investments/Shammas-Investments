import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach launch, our QA team conducts comprehensive{" "}
          <strong className="font-semibold text-neutral-950">
            testing
          </strong>{" "}
          across all devices and scenarios to ensure flawless performance. We validate every feature against the original requirements and conduct user acceptance testing.
        </p>
        <p>
          Our deployment process follows industry best practices with staged rollouts, automated monitoring, and immediate{" "}
          <strong className="font-semibold text-neutral-950">rollback capabilities</strong>.
          We coordinate closely with your team to ensure a smooth launch with minimal disruption to your operations.
        </p>
        <p>
          Post-launch, we provide comprehensive training, documentation, and ongoing{" "}
          <strong className="font-semibold text-neutral-950">
            support
          </strong>{" "}
          to ensure your team can confidently manage and optimize the solution. Our commitment to your success extends well beyond deployment.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Comprehensive Testing">
          Rigorous QA processes including unit tests, integration tests, performance testing, and security audits to ensure enterprise-grade quality.
        </ListItem>
        <ListItem title="Cloud Infrastructure">
          Enterprise-level hosting on AWS, Azure, or Google Cloud with auto-scaling, redundancy, and 99.9% uptime guarantees.
        </ListItem>
        <ListItem title="Ongoing Support">
          Dedicated support team, performance monitoring, security updates, and continuous optimization to keep your solution running at peak performance.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;

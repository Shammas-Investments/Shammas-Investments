import clsx from "clsx";
import React from "react";

interface OfficeProps {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}

function Office({ name, children, invert = false }: OfficeProps) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

interface OfficesProps extends React.HTMLAttributes<HTMLUListElement> {
  invert?: boolean;
}

const Offices: React.FC<OfficesProps> = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Remote-First" invert={invert}>
          Serving clients across
          <br />
          the United States
        </Office>
      </li>
    </ul>
  );
};

export default Offices;

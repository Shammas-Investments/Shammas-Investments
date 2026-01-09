import clsx from "clsx";

function Office({ name, children, invert = false }) {
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

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Headquarters" invert={invert}>
          123 Innovation Drive
          <br />
          Suite 500
          <br />
          New York, NY 10001
          <br />
          United States
        </Office>
      </li>
      <li>
        <Office name="West Coast Office" invert={invert}>
          456 Technology Blvd
          <br />
          Floor 12
          <br />
          San Francisco, CA 94102
          <br />
          United States
        </Office>
      </li>
    </ul>
  );
};

export default Offices;

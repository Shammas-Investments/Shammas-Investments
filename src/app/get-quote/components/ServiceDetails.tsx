"use client";

import { services, serviceSubOptions } from "./data/services";
import clsx from "clsx";

interface ServiceDetailsProps {
  selectedServices: string[];
  serviceDetails: Record<string, Record<string, string>>;
  onDetailChange: (serviceId: string, optionId: string, value: string) => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  selectedServices,
  serviceDetails,
  onDetailChange,
}) => {
  // Get services that have sub-options
  const servicesWithOptions = selectedServices.filter(
    (id) => serviceSubOptions[id] && serviceSubOptions[id].length > 0
  );

  if (servicesWithOptions.length === 0) {
    return (
      <div>
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Service Details
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            No additional details needed for your selected services.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-8 text-center ring-1 ring-neutral-950/5">
          <p className="text-neutral-600">
            Your selected services don&apos;t require additional configuration. Click
            &quot;Next&quot; to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Service Details
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Please provide additional details for your selected services.
        </p>
      </div>

      <div className="space-y-8">
        {servicesWithOptions.map((serviceId) => {
          const service = services.find((s) => s.id === serviceId);
          const subOptions = serviceSubOptions[serviceId];

          if (!service || !subOptions) return null;

          return (
            <div
              key={serviceId}
              className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5"
            >
              <h3 className="font-display text-lg font-semibold text-neutral-950">
                {service.name}
              </h3>

              <div className="mt-6 space-y-6">
                {subOptions.map((option) => (
                  <div key={option.id}>
                    <label className="mb-3 block text-sm font-medium text-neutral-950">
                      {option.label}
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {option.options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() =>
                            onDetailChange(serviceId, option.id, opt.value)
                          }
                          className={clsx(
                            "rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all",
                            serviceDetails[serviceId]?.[option.id] === opt.value
                              ? "border-neutral-950 bg-neutral-950 text-white"
                              : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;

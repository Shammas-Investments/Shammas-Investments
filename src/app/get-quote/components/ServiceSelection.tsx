"use client";

import { services, getCategories, getServicesByCategory, formatPrice } from "./data/services";
import type { ServiceOption } from "./data/services";
import clsx from "clsx";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServiceToggle: (serviceId: string) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  selectedServices,
  onServiceToggle,
}) => {
  const categories = getCategories();

  const getSelectedMonthlyServices = () => {
    return services.filter(
      (s) => selectedServices.includes(s.id) && s.priceType === "monthly"
    );
  };

  const getSelectedOneTimeServices = () => {
    return services.filter(
      (s) => selectedServices.includes(s.id) && s.priceType === "one-time"
    );
  };

  const oneTimeTotal = getSelectedOneTimeServices().reduce((sum, s) => sum + s.price, 0);
  const monthlyTotal = getSelectedMonthlyServices().reduce((sum, s) => sum + s.price, 0);

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Select Your Services
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Choose the services you need. You can select multiple services.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-4 font-display text-lg font-semibold text-neutral-950">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {getServicesByCategory(category).map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServices.includes(service.id)}
                  onToggle={() => onServiceToggle(service.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Running total */}
      {selectedServices.length > 0 && (
        <div className="mt-8 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-600">
                {selectedServices.length} service{selectedServices.length !== 1 ? "s" : ""} selected
              </p>
              <div className="mt-1 flex flex-wrap gap-4">
                {oneTimeTotal > 0 && (
                  <p className="text-lg font-semibold text-neutral-950">
                    Starting from{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(oneTimeTotal)}{" "}
                    <span className="text-sm font-normal text-neutral-500">(one-time)</span>
                  </p>
                )}
                {monthlyTotal > 0 && (
                  <p className="text-lg font-semibold text-neutral-950">
                    +{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(monthlyTotal)}
                    /mo
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ServiceCardProps {
  service: ServiceOption;
  isSelected: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSelected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isSelected}
      aria-label={`${service.name} - Starting from ${formatPrice(service.price, service.priceType)}${isSelected ? " (selected)" : ""}`}
      className={clsx(
        "group relative flex w-full cursor-pointer flex-col rounded-2xl border-2 p-4 text-left transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
        isSelected
          ? "border-neutral-950 bg-neutral-950 text-white"
          : "border-neutral-200 bg-white text-neutral-950 hover:border-neutral-400"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium leading-tight">{service.name}</span>
        <div
          aria-hidden="true"
          className={clsx(
            "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition",
            isSelected
              ? "border-white bg-white"
              : "border-neutral-300 bg-transparent group-hover:border-neutral-400"
          )}
        >
          {isSelected && (
            <svg
              className="h-3 w-3 text-neutral-950"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span
        className={clsx(
          "mt-2 text-xs",
          isSelected ? "text-neutral-300" : "text-neutral-500"
        )}
      >
        Starting from {formatPrice(service.price, service.priceType)}
      </span>
    </button>
  );
};

export default ServiceSelection;

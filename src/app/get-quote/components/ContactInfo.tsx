"use client";

import { timelineOptions } from "./data/services";
import clsx from "clsx";
import { useId } from "react";

export interface ContactData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  timeline: string;
}

interface ContactInfoProps {
  contact: ContactData;
  onContactChange: (field: keyof ContactData, value: string) => void;
  errors: Partial<Record<keyof ContactData, string>>;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  contact,
  onContactChange,
  errors,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Contact Information
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Please provide your details so we can prepare your custom quote.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-white/50 ring-1 ring-neutral-950/5">
          <div className="-space-y-px">
            <FloatingInput
              label="Full Name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={contact.fullName}
              onChange={(e) => onContactChange("fullName", e.target.value)}
              required
              error={errors.fullName}
              isFirst
            />
            <FloatingInput
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={contact.email}
              onChange={(e) => onContactChange("email", e.target.value)}
              required
              error={errors.email}
            />
            <FloatingInput
              label="Phone (optional)"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={contact.phone}
              onChange={(e) => onContactChange("phone", e.target.value)}
            />
            <FloatingInput
              label="Company Name (optional)"
              name="company"
              type="text"
              autoComplete="organization"
              value={contact.company}
              onChange={(e) => onContactChange("company", e.target.value)}
              isLast
            />
          </div>
        </div>

        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5">
          <h3 className="mb-4 text-base font-medium text-neutral-950">
            Project Timeline
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="Project Timeline">
            {timelineOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onContactChange("timeline", option.value)}
                aria-pressed={contact.timeline === option.value}
                className={clsx(
                  "rounded-xl border-2 px-4 py-3 min-h-[44px] text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
                  contact.timeline === option.value
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  error,
  isFirst,
  isLast,
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        placeholder=" "
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          "peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5",
          isFirst && "rounded-t-2xl",
          isLast && "rounded-b-2xl",
          error && "border-red-500 focus:border-red-500"
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          "pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold",
          error
            ? "text-red-500 peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500"
            : "text-neutral-500 peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:text-neutral-950"
        )}
      >
        {label}
      </label>
      {error && (
        <p id={errorId} role="alert" className="absolute -bottom-5 left-6 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default ContactInfo;

import React, { useId } from "react";
import clsx from "clsx";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  isFirst,
  isLast,
  required,
  className,
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        aria-required={required}
        placeholder=" "
        className={clsx(
          "peer block w-full border bg-transparent px-4 sm:px-6 pb-4 pt-10 sm:pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:outline-none focus:ring-neutral-950/5",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
            : "border-neutral-300 focus:border-neutral-950",
          isFirst && "rounded-t-2xl",
          isLast && "rounded-b-2xl",
          !isFirst && !isLast && "group-first:rounded-t-2xl group-last:rounded-b-2xl",
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          "pointer-events-none absolute left-4 sm:left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200",
          "peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold",
          "peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold",
          error
            ? "text-red-500 peer-focus:text-red-600 peer-[:not(:placeholder-shown)]:text-red-600"
            : "text-neutral-500 peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:text-neutral-950"
        )}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="absolute -bottom-5 left-4 sm:left-6 text-xs text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;

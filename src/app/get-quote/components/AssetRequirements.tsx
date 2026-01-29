"use client";

import { assetQuestions } from "./data/services";
import clsx from "clsx";

interface AssetRequirementsProps {
  assets: Record<string, string>;
  onAssetChange: (questionId: string, value: string) => void;
}

const AssetRequirements: React.FC<AssetRequirementsProps> = ({
  assets,
  onAssetChange,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Assets & Requirements
        </h2>
        <p className="mt-2 text-base text-neutral-600">
          Let us know what assets you already have and what you&apos;ll need us to create.
        </p>
      </div>

      <div className="space-y-6">
        {assetQuestions.map((question) => (
          <div
            key={question.id}
            className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5"
          >
            <h3 className="mb-4 text-base font-medium text-neutral-950">
              {question.question}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onAssetChange(question.id, option.value)}
                  className={clsx(
                    "flex items-center gap-3 rounded-xl border-2 px-4 py-4 text-left transition-all",
                    assets[question.id] === option.value
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                  )}
                >
                  <div
                    className={clsx(
                      "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2",
                      assets[question.id] === option.value
                        ? "border-white bg-white"
                        : "border-neutral-300"
                    )}
                  >
                    {assets[question.id] === option.value && (
                      <div className="h-2 w-2 rounded-full bg-neutral-950" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetRequirements;

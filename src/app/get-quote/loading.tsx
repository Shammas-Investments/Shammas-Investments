import Container from "@/components/Container";

const QuoteLoadingSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-3xl">
          <div className="h-4 w-28 animate-pulse rounded bg-neutral-200" />
          <div className="mt-6 h-12 w-72 animate-pulse rounded bg-neutral-200" />
          <div className="mt-6 space-y-3">
            <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200" />
          </div>
        </div>
      </Container>

      {/* Plan Builder Skeleton */}
      <Container className="mt-16 sm:mt-20 lg:mt-24 mb-24">
        <div className="mx-auto max-w-4xl">
          {/* Step Indicator Skeleton */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-8 w-8 animate-pulse rounded-full bg-neutral-200" />
                {i < 4 && <div className="h-0.5 w-8 animate-pulse bg-neutral-200" />}
              </div>
            ))}
          </div>

          {/* Service Cards Skeleton */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 animate-pulse rounded-lg bg-neutral-200" />
                  <div className="flex-1">
                    <div className="h-5 w-36 animate-pulse rounded bg-neutral-200" />
                    <div className="mt-2 h-4 w-full animate-pulse rounded bg-neutral-200" />
                    <div className="mt-1 h-4 w-3/4 animate-pulse rounded bg-neutral-200" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-5 w-20 animate-pulse rounded bg-neutral-200" />
                  <div className="h-6 w-6 animate-pulse rounded bg-neutral-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Skeleton */}
          <div className="mt-8 flex justify-end">
            <div className="h-12 w-24 animate-pulse rounded-full bg-neutral-200" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuoteLoadingSkeleton;

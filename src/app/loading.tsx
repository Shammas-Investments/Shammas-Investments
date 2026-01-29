import Container from "@/components/Container";

const PageSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />

          {/* Title */}
          <div className="mt-6 space-y-4">
            <div className="h-12 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-12 w-3/4 animate-pulse rounded bg-neutral-200" />
          </div>

          {/* Description */}
          <div className="mt-6 space-y-3">
            <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-5 w-5/6 animate-pulse rounded bg-neutral-200" />
            <div className="h-5 w-4/6 animate-pulse rounded bg-neutral-200" />
          </div>
        </div>
      </Container>

      {/* Content Section Skeleton */}
      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl bg-neutral-50 p-6">
              <div className="h-6 w-32 animate-pulse rounded bg-neutral-200" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
                <div className="h-4 w-4/6 animate-pulse rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PageSkeleton;

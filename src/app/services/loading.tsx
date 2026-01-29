import Container from "@/components/Container";

const ServicesLoadingSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-3xl">
          <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />
          <div className="mt-6 space-y-4">
            <div className="h-12 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-12 w-2/3 animate-pulse rounded bg-neutral-200" />
          </div>
          <div className="mt-6 space-y-3">
            <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-5 w-5/6 animate-pulse rounded bg-neutral-200" />
          </div>
        </div>
      </Container>

      {/* Services Grid Skeleton */}
      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <div className="space-y-24">
          {[...Array(3)].map((_, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="h-8 w-48 animate-pulse rounded bg-neutral-200" />
              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-2xl bg-neutral-50 p-8">
                    <div className="h-12 w-12 animate-pulse rounded-lg bg-neutral-200" />
                    <div className="mt-6 h-6 w-40 animate-pulse rounded bg-neutral-200" />
                    <div className="mt-4 space-y-2">
                      <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
                      <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
                      <div className="h-4 w-4/6 animate-pulse rounded bg-neutral-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ServicesLoadingSkeleton;

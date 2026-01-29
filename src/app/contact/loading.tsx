import Container from "@/components/Container";

const ContactLoadingSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-3xl">
          <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />
          <div className="mt-6 h-12 w-64 animate-pulse rounded bg-neutral-200" />
          <div className="mt-6 space-y-3">
            <div className="h-5 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-5 w-4/5 animate-pulse rounded bg-neutral-200" />
          </div>
        </div>
      </Container>

      {/* Contact Form Section Skeleton */}
      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* Office Info Skeleton */}
          <div>
            <div className="h-6 w-32 animate-pulse rounded bg-neutral-200" />
            <div className="mt-6 space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <div className="h-5 w-24 animate-pulse rounded bg-neutral-200" />
                  <div className="mt-2 h-4 w-48 animate-pulse rounded bg-neutral-200" />
                </div>
              ))}
            </div>

            <div className="mt-16 h-6 w-32 animate-pulse rounded bg-neutral-200" />
            <div className="mt-6 space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-4 w-40 animate-pulse rounded bg-neutral-200" />
              ))}
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="rounded-2xl bg-neutral-50 p-8">
            <div className="h-6 w-36 animate-pulse rounded bg-neutral-200" />
            <div className="mt-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-14 w-full animate-pulse rounded-xl bg-neutral-200" />
              ))}
            </div>
            <div className="mt-6 h-12 w-40 animate-pulse rounded-full bg-neutral-200" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactLoadingSkeleton;

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Button from "@/components/Button";

const popularPages = [
  { name: "Services", href: "/services", description: "Explore our offerings" },
  { name: "Get a Quote", href: "/get-quote", description: "Build your custom plan" },
  { name: "Contact", href: "/contact", description: "Get in touch with us" },
  { name: "About Us", href: "/about", description: "Learn about our team" },
];

const NotFound = () => {
  return (
    <Container className="flex min-h-[60vh] items-center pt-20 sm:pt-24 lg:pt-32 pb-16">
      <FadeIn className="w-full">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated 404 */}
          <div className="relative">
            <p className="font-display text-[10rem] font-bold leading-none text-neutral-100 sm:text-[14rem]">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="mx-auto h-16 w-16 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-neutral-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
            deleted, or never existed in the first place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">
              Go to Homepage
            </Button>
            <Button href="/contact" invert>
              Contact Support
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mt-16">
            <p className="text-sm font-semibold text-neutral-950">Popular pages</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-4 transition hover:bg-neutral-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:bg-neutral-800">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-neutral-950">{page.name}</p>
                    <p className="text-sm text-neutral-600">{page.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default NotFound;

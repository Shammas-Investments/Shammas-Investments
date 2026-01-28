export function constructMetadata({
  title = "Shammas Development - Complete IT Solutions & Technology Services",
  description = "Leading IT solutions provider specializing in software development, AI/ML, e-commerce platforms (Amazon, Walmart, Shopify), cloud management, and digital transformation services.",
  image = "/og-image.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    keywords: [
      "software development",
      "application development",
      "game development",
      "e-commerce solutions",
      "Amazon seller services",
      "Walmart marketplace",
      "Shopify development",
      "AI development",
      "machine learning",
      "LLM chatbots",
      "cloud management",
      "graphic design",
      "content management",
      "social media management",
      "IT consulting",
      "digital transformation"
    ],
    authors: [{ name: "Shammas Development" }],
    creator: "Shammas Development",
    publisher: "Shammas Development",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://shammasdevelopment.io",
      siteName: "Shammas Development",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Shammas Development - IT Solutions Provider",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@shammasdev",
    },
    icons,
    metadataBase: new URL("https://shammasdevelopment.io"),
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

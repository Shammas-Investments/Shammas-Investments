export function constructMetadata({
  title = "Shammas Investments - Complete IT Solutions & Technology Services",
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
    authors: [{ name: "Shammas Investments" }],
    creator: "Shammas Investments",
    publisher: "Shammas Investments",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://shammasinvestments.com",
      siteName: "Shammas Investments",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Shammas Investments - IT Solutions Provider",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@shammasinvest",
    },
    icons,
    metadataBase: new URL("https://shammasinvestments.com"),
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

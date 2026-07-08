import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Consolidate the Vercel preview domain onto the canonical www domain.
      // Both veganster.vercel.app and www.veganster.com served identical,
      // indexable content — Google saw a full duplicate site. This 308 sends
      // any *.vercel.app request to the same path on www.veganster.com.
      // (Requests that already arrive as www.veganster.com don't match the
      // host condition, so there is no redirect loop.)
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://www.veganster.com/:path*",
        permanent: true,
      },
      // The "Juice Pharmacy" section was renamed to remove the last medical
      // word from the URL/canonical. 308 the old path (and its posts) to the
      // new /juices-and-smoothies path so no inbound links break.
      {
        source: "/juice-pharmacy",
        destination: "/juices-and-smoothies",
        permanent: true,
      },
      {
        source: "/juice-pharmacy/:slug*",
        destination: "/juices-and-smoothies/:slug*",
        permanent: true,
      },
      // The old broken /blog/undefined URL and the removed duplicate whole-food
      // post both 308 to the single canonical whole-food article, so no old
      // crawled URL 404s and there is no redirect chain.
      {
        source: "/blog/undefined",
        destination:
          "/blog/unlock-your-best-health-the-benefits-of-a-whole-food-plant-b",
        permanent: true,
      },
      {
        source: "/blog/whole-food-plant-based-eating-for-beginners",
        destination:
          "/blog/unlock-your-best-health-the-benefits-of-a-whole-food-plant-b",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

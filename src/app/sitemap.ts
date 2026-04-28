import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://veganster.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/blog",
    "/recipes",
    "/diet-plans",
    "/juice-pharmacy",
    "/privacy",
    "/terms",
  ].map((path) => {
    const isLegal = path === "/privacy" || path === "/terms";
    return {
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: isLegal ? ("yearly" as const) : ("weekly" as const),
      priority: path === "" ? 1 : isLegal ? 0.3 : 0.7,
    };
  });

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}

import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { recipes } from "@/content/recipes";
import { juices } from "@/content/juice-pharmacy";
import { dietPlans } from "@/content/diet-plans";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.veganster.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/recipes",
    "/diet-plans",
    "/juices-and-smoothies",
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

  const detailRoutes: MetadataRoute.Sitemap = [
    ...recipes.map((r) => `/recipes/${r.slug}`),
    ...juices.map((j) => `/juices-and-smoothies/${j.slug}`),
    ...dietPlans.map((p) => `/diet-plans/${p.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...detailRoutes];
}

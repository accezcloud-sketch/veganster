import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { recipes } from "@/content/recipes";
import { juices } from "@/content/juice-pharmacy";
import { dietPlans } from "@/content/diet-plans";
import { absoluteUrl } from "@/lib/seo";

/**
 * `changeFrequency` and `priority` are gone: Google ignores both.
 *
 * `lastModified` is now only set where a real content date exists (blog post
 * frontmatter). It used to be `new Date()` on every entry, so every deploy
 * told Google that all 68 URLs had just changed — which trains Google to
 * distrust the lastmod on this sitemap entirely, including the blog dates
 * that are genuine.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/contact",
    "/blog",
    "/recipes",
    "/diet-plans",
    "/juices-and-smoothies",
    "/privacy",
    "/terms",
  ].map((path) => ({ url: absoluteUrl(path) }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00Z`),
  }));

  const detailRoutes: MetadataRoute.Sitemap = [
    ...recipes.map((r) => `/recipes/${r.slug}`),
    ...juices.map((j) => `/juices-and-smoothies/${j.slug}`),
    ...dietPlans.map((p) => `/diet-plans/${p.slug}`),
  ].map((path) => ({ url: absoluteUrl(path) }));

  return [...staticRoutes, ...postRoutes, ...detailRoutes];
}

import type { Metadata } from "next";

/* ─── Site constants ─────────────────────────────────────────────────── */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.veganster.com";

export const SITE_NAME = "Veganster";

/** Stable @id targets so every page's JSON-LD points at one Organization. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The photograph the homepage hero already uses. Reused as the default social
 * card so pages without artwork of their own still share with an image
 * instead of a bare link.
 */
export const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&h=900&fit=crop";

/* ─── URLs ───────────────────────────────────────────────────────────── */

/**
 * Next renders `alternates.canonical: "/"` as the bare origin (no trailing
 * slash), so JSON-LD and the sitemap use the same shape and agree with the
 * canonical tag.
 */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/* ─── Images ─────────────────────────────────────────────────────────── */

/**
 * Every image on this site is an Unsplash URL whose dimensions live in the
 * query string, so we can request the exact crop a consumer needs rather than
 * reusing one 600x400 thumbnail everywhere. `fm` is dropped deliberately:
 * every blog cover asks for `fm=webp` and social scrapers do not reliably
 * render WebP. Non-Unsplash URLs are returned untouched.
 */
export function sizedImage(url: string, width: number, height: number): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "images.unsplash.com") return url;
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("h", String(height));
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.delete("fm");
    return parsed.toString();
  } catch {
    return url;
  }
}

/**
 * Structured data needs absolute image URLs. Metadata fields get that for free
 * from `metadataBase`, JSON-LD does not — and PHOTO_GUIDE.md/swap-photos.py
 * will replace these Unsplash URLs with root-relative "/images/..." paths as
 * the owner adds their own photography.
 */
export function absoluteImage(url: string): string {
  return url.startsWith("/") ? `${SITE_URL}${url}` : url;
}

/** Open Graph / Twitter cards are read at 1200x630. */
export function ogImage(url: string): string {
  return sizedImage(url, 1200, 630);
}

/**
 * Google asks for recipe images at least 1200px wide and, where possible, in
 * 1x1, 4x3 and 16x9 so it can pick the crop that fits the result surface.
 */
export function recipeImageSet(url: string): string[] {
  return Array.from(
    new Set([
      absoluteImage(sizedImage(url, 1200, 1200)),
      absoluteImage(sizedImage(url, 1200, 900)),
      absoluteImage(sizedImage(url, 1200, 675)),
    ]),
  );
}

/* ─── Durations ──────────────────────────────────────────────────────── */

/**
 * Times in the content are free text ("25 min", "5 min + overnight"). Anything
 * that cannot be read with certainty returns undefined so the schema field is
 * omitted rather than guessed at.
 */
function parseMinutes(value?: string): number | undefined {
  if (!value) return undefined;
  const match = value
    .trim()
    .match(
      /^(?:(\d+)\s*(?:h|hr|hrs|hour|hours))?\s*(?:(\d+)\s*(?:m|min|mins|minute|minutes))?$/i,
    );
  if (!match) return undefined;
  const minutes = (Number(match[1] ?? 0) || 0) * 60 + (Number(match[2] ?? 0) || 0);
  return minutes > 0 ? minutes : undefined;
}

function isoFromMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `PT${hours ? `${hours}H` : ""}${rest || !hours ? `${rest}M` : ""}`;
}

/** ISO-8601 duration for a single free-text time, or undefined. */
export function isoDuration(value?: string): string | undefined {
  const minutes = parseMinutes(value);
  return minutes === undefined ? undefined : isoFromMinutes(minutes);
}

/** Sum of several times — undefined if any one of them is unparseable. */
export function isoTotalDuration(
  ...values: (string | undefined)[]
): string | undefined {
  let total = 0;
  for (const value of values) {
    const minutes = parseMinutes(value);
    if (minutes === undefined) return undefined;
    total += minutes;
  }
  return total > 0 ? isoFromMinutes(total) : undefined;
}

/* ─── Page metadata ──────────────────────────────────────────────────── */

interface PageMetadataInput {
  /** Page title without the site suffix — the layout template appends it. */
  title: string;
  description: string;
  /** Route path, e.g. "/recipes" or "/" — used for canonical and og:url. */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}

/**
 * Builds a page's metadata in one place. Two things this protects against:
 * every route gets its own self-referencing canonical (previously only /blog
 * and /contact had one), and og:url is set per page (the root layout used to
 * set og:url="/" which every child inherited, so every page claimed to be the
 * homepage). Metadata merges shallowly in Next, so `openGraph` has to be
 * spelled out in full on each page that defines it.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt,
  type = "website",
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} — ${SITE_NAME}`;
  const social = ogImage(image);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        { url: social, width: 1200, height: 630, alt: imageAlt ?? title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [social],
    },
  };
}

/* ─── Structured data ────────────────────────────────────────────────── */

/**
 * Publisher identity, emitted once on the homepage and referenced by @id
 * elsewhere. No `logo`: Google requires an organisation logo of at least
 * 112x112 and the only logo in this repo is 47x37, so claiming one would fail
 * validation. No `sameAs` either — the site publishes no social profiles.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "en",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

export interface Crumb {
  name: string;
  /** Omit on the final crumb — it is the page the user is already on. */
  path?: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  };
}

/**
 * Carousel-style summary list for a collection page. Google's format for a
 * summary page is position + url only; the detail pages carry the full markup.
 */
export function itemListJsonLd(paths: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: paths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(path),
    })),
  };
}

/**
 * Turns the {item, amount} pairs the juice content stores into the single
 * ingredient line a recipe parser expects. Amounts sometimes carry a trailing
 * qualifier ("1/2, juiced"), which reads wrong glued in front of the item, so
 * that part is moved after it: "1/2 Lemon, juiced". Pure re-ordering — no
 * wording is added.
 */
export function formatIngredient(item: string, amount?: string): string {
  if (!amount) return item;
  const qualified = amount.match(/^(.+?),\s*(.+)$/);
  if (qualified) return `${qualified[1]} ${item}, ${qualified[2]}`;
  return `${amount} ${item}`;
}

export interface RecipeSchemaInput {
  name: string;
  description: string;
  path: string;
  image: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  category?: string;
  keywords?: string[];
  ingredients: string[];
  instructions: string[];
}

/**
 * Recipe is one of the few structured data types that still produces a rich
 * result, so it is worth getting right. Every field here is copied straight
 * from the recipe's own data; anything the content doesn't have (nutrition,
 * ratings, cuisine, publish dates) is left out rather than invented. Note
 * `aggregateRating` is deliberately absent — the `rating` numbers in the
 * content have no review count behind them and Google requires ratings to
 * come from real users.
 */
export function recipeJsonLd({
  name,
  description,
  path,
  image,
  prepTime,
  cookTime,
  servings,
  category,
  keywords,
  ingredients,
  instructions,
}: RecipeSchemaInput) {
  const url = absoluteUrl(path);
  const prep = isoDuration(prepTime);
  const cook = isoDuration(cookTime);
  const total = isoTotalDuration(prepTime, cookTime);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: recipeImageSet(image),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    ...(prep ? { prepTime: prep } : {}),
    ...(cook ? { cookTime: cook } : {}),
    ...(total ? { totalTime: total } : {}),
    ...(servings
      ? { recipeYield: `${servings} serving${servings === 1 ? "" : "s"}` }
      : {}),
    ...(category ? { recipeCategory: category } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    recipeIngredient: ingredients,
    recipeInstructions: instructions.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
      url: `${url}#step-${index + 1}`,
    })),
  };
}

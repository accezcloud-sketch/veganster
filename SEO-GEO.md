# SEO & GEO — how this site is set up

Notes for anyone changing metadata, structured data or content. Written 10 Aug 2026.

## The rules this site follows

- **Recipe structured data still produces rich results in Google.** For a recipe site this is the highest-value markup available, and it is now on all 17 recipes and juices. Only populate fields the source content genuinely has — never invent nutrition, ratings, cuisine or dates.
- **AI crawlers do not execute JavaScript** (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot). Anything that only appears after hydration is invisible to them. Everything here is statically prerendered — keep it that way.
- **Never set `alternates.canonical` on the root layout.** Next.js inherits it to every child page, telling Google those pages are duplicates of one URL.
- **A `'use client'` page cannot export `metadata`.** It silently inherits the parent's title, description and canonical.
- **JSON-LD must be a raw server-rendered `<script>`.** `next/script` injects client-side and never reaches the HTML — a silent failure that looks fine in the browser.
- **Social scrapers do not reliably render WebP.** Open Graph images are always 1200×630 JPEG, even though the page itself may serve WebP.
- Sitemap `changefreq` and `priority` are ignored by Google. `lastmod` is used, so only set it where a real date exists.
- `FAQPage` rich results were retired 7 May 2026 and `HowTo` in 2023. Don't add either — but Q&A *content* is still worth writing, because AI answers retrieve it.

## How it's wired

- `src/lib/seo.ts` — the single source of truth for site URL, page metadata, image sizing, ISO-8601 duration parsing, and every JSON-LD builder. **Use `pageMetadata()` on every new page.**
- `src/components/JsonLd.tsx` — the only correct way to emit structured data here.
- `src/app/robots.ts` — splits AI crawlers deliberately: **retrieval** bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Applebot) are allowed, because "vegan buddha bowl recipe" is exactly the kind of question people now ask an assistant, and a citation sends a real reader here; **training-only** bots (GPTBot, CCBot, Google-Extended, Applebot-Extended, Bytespider) are blocked. Each crawler obeys only its own most-specific group — a named bot inherits nothing from `*`.
- Organization + WebSite live on the home page; Recipes and Articles reference them by `@id`.
- `absoluteImage()` already handles the switch from Unsplash URLs to local `/images/...` paths, so `scripts/swap-photos.py` won't break structured data.

## Two things that were removed on purpose — do not add them back

1. **`aggregateRating` is deliberately absent.** The recipes previously carried hardcoded ratings (4.5–4.9) with **no review count and no review mechanism**. Google requires ratings to come from real users; marking those up risks a manual action. The star display was removed from the UI and the `rating` field from the data. If real reviews are collected later, both can return together.
2. **Honey was removed from the Berry Acai Smoothie Bowl.** Honey is not vegan, and this audience notices immediately. This is also why `suitableForDiet: VeganDiet` is not asserted anywhere — the markup must not claim something the content contradicts. Blog posts that *discuss* honey (explaining why vegans avoid it) are correct and stay.

Related: two recipes are tagged `Gluten-Free` and one `Gluten-Free Option`, but `GlutenFreeDiet` is not emitted for any of them. Coeliac safety should not be inferred from a tag.

## GEO (generative engine optimization)

Posts open with a **summary block**: 2–4 lines beginning with `> `, 60–90 words, answering the article's core question on its own, so an AI assistant quoting one passage still gets a correct answer. Each post also carries a 3-question FAQ section.

The site's **CONTENT SAFETY RULES apply inside both** — no medical claims, no invented statistics. That constraint is written into the prompt itself.

There is no separate "AI optimization" beyond this: Google states plainly that AI Overviews and AI Mode use the same index and ranking systems as normal Search, and that `llms.txt` neither helps nor harms.

## Blog automation

Posts come from n8n (`veganster-blog-auto-deploy`) into `src/content/blog/<slug>.md`. Single prompt node.

That prompt carries **CONTENT SAFETY RULES that must never be weakened**: no claim that any food treats, cures, prevents, heals, detoxes, boosts immunity or reduces inflammation; no invented statistics or "studies show". It also supplies a fixed list of related-article links to copy verbatim, which is why this site has no hallucinated internal links — worth preserving.

The workflow JSON in the n8n repo is a **record, not the running copy** — n8n keeps its workflows in its own database. Changing the JSON does not change what runs; the prompt has to be edited in the n8n UI.

## Open items — need a decision, not code

- **Named human authors.** Everything is "Veganster Team". Nutrition content sits near YMYL, where Google weights author trust hardest. Needs real names, credentials and profile URLs.
- **Organization logo and `sameAs`.** The only logo is 47×37; Google wants ≥112×112, ideally 512×512. No social profiles are published.
- **100% stock photography.** `PHOTO_GUIDE.md` notes AdSense already flagged this. `scripts/swap-photos.py` is ready and waiting.
- **Apex → www is a 307 (temporary); it should be 308.** Vercel domain config, not code.

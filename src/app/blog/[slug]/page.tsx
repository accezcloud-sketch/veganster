import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import {
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  absoluteImage,
  absoluteUrl,
  breadcrumbJsonLd,
  ogImage,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  // Every cover image in the content asks for `fm=webp`, which social
  // scrapers do not reliably render — ogImage() serves the same photo as a
  // 1200x630 raster instead.
  const social = ogImage(post.coverImage);

  return {
    title: post.title,
    description: post.description,
    // `keywords` removed: meta keywords is not used by Google.
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: SITE_NAME,
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: social,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [social],
    },
  };
}

const linkClass =
  "text-forest underline underline-offset-2 hover:text-forest-light";

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-4 mt-10 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3 mt-8">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal mb-3 mt-6">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-warm-gray leading-relaxed text-lg mb-6">{children}</p>
  ),
  a: ({ href, children }) => {
    if (href && href.startsWith("/")) {
      return (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={linkClass}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-charcoal">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-warm-gray text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-warm-gray text-lg">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-forest pl-5 my-6 italic text-warm-gray">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-cream-dark" />,
  code: ({ children }) => (
    <code className="bg-cream-dark text-charcoal px-1.5 py-0.5 rounded text-base">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-charcoal text-cream p-4 rounded-lg overflow-x-auto mb-6 text-sm">
      {children}
    </pre>
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    // 1200x630 raster rather than the frontmatter's WebP URL, and sized to
    // the minimum Google wants for article images.
    image: [absoluteImage(ogImage(post.coverImage))],
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Organization",
        name: post.author,
        url: SITE_URL,
      },
    ],
    // publisher.logo dropped: Google requires a publisher logo of at least
    // 112x112 and the only logo in this repo is 47x37, so declaring one would
    // fail validation. The Organization itself is declared on the homepage.
    publisher: { "@id": ORGANIZATION_ID },
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    inLanguage: "en",
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title },
        ])}
      />

      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-72 md:h-[28rem] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-3">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span>By {post.author}</span>
                <span>·</span>
                <time dateTime={post.date}>{post.dateDisplay}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        {post.coverImageCredit && (
          <p className="text-xs text-warm-gray-light text-right max-w-3xl mx-auto px-6 pt-2">
            Photo:{" "}
            {post.coverImageCreditUrl ? (
              <a
                href={post.coverImageCreditUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="underline underline-offset-2 hover:text-forest"
              >
                {post.coverImageCredit}
              </a>
            ) : (
              post.coverImageCredit
            )}
          </p>
        )}
      </section>

      {/* Article body */}
      <section className="py-16 bg-cream">
        <article className="max-w-3xl mx-auto px-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      {/* Author card */}
      <section className="bg-cream border-t border-cream-dark">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
              <span className="text-2xl">🌱</span>
            </div>
            <div>
              <p className="font-semibold text-charcoal">{post.author}</p>
              <p className="text-sm text-warm-gray mt-1">
                Articles on this site are written and edited collaboratively by
                the Veganster team — a small group of plant-based home cooks,
                nutrition enthusiasts, and wellness writers. We aim for content
                that is practical, evidence-aware, and honest about its limits.
                Always consult a qualified professional before making major
                dietary changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal text-center mb-10">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.coverImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-peach uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mt-1">
                      {p.title}
                    </h3>
                    <span className="text-xs text-warm-gray-light mt-1 block">
                      {p.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Veganster",
      locale: "en_US",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 800,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
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
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://veganster.example.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Person",
        name: post.author,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Veganster",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
              <span className="text-2xl font-bold text-forest">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="font-semibold text-charcoal">{post.author}</p>
              <p className="text-sm text-warm-gray mt-1">
                Contributing writer at Veganster, passionate about plant-based
                nutrition and evidence-based wellness.
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

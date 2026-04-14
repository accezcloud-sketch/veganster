"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

const categories = ["All", "Nutrition", "Wellness", "Lifestyle"];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              cat === active
                ? "bg-forest text-white"
                : "bg-white text-warm-gray hover:bg-forest/10 hover:text-forest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-12"
        >
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[16rem] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-peach uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <span className="text-xs text-warm-gray-light">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-4">
                  {featured.title}
                </h2>
                <p className="text-warm-gray leading-relaxed mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-warm-gray-light">
                    {featured.date}
                  </span>
                  <span className="text-forest font-semibold text-sm hover:text-forest-light transition-colors">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* Posts grid */}
      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-warm-gray-light">
                      {post.readTime}
                    </span>
                    <span className="text-xs text-warm-gray-light">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-2">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-forest font-semibold text-sm hover:text-forest-light transition-colors">
                    Read Article →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-warm-gray-light py-12">
          No articles found in this category.
        </p>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog — Veganster",
  description:
    "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <PageHeader
        label="Latest Articles"
        title="Blog"
        description="Health tips, nutrition science, and plant-based lifestyle articles to fuel your journey."
        image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&h=600&fit=crop"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {["All", "Nutrition", "Wellness", "Lifestyle"].map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-forest text-white"
                    : "bg-white text-warm-gray hover:bg-forest/10 hover:text-forest"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <article className="group mb-12 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-peach uppercase tracking-wider">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-xs text-warm-gray-light">
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-warm-gray leading-relaxed mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-warm-gray-light">
                    {blogPosts[0].date}
                  </span>
                  <span className="text-forest font-semibold text-sm hover:text-forest-light transition-colors cursor-pointer">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
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
                  <span className="text-forest font-semibold text-sm hover:text-forest-light transition-colors cursor-pointer">
                    Read Article →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

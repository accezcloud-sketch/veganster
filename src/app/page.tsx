import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { recipes } from "@/content/recipes";
import { juices } from "@/content/juice-pharmacy";
import { dietPlans } from "@/content/diet-plans";
import { getAllPosts } from "@/lib/blog";

/* ─── Helpers ────────────────────────────────────────────────────────── */

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-sm text-peach font-medium">
      {"★".repeat(Math.floor(rating))}
      <span className="text-warm-gray-light ml-1">{rating}</span>
    </span>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function Home() {
  const featuredRecipes = recipes.slice(0, 3);
  const featuredJuices = juices.slice(0, 3);
  const featuredPlans = dietPlans.slice(0, 3);
  const featuredPosts = getAllPosts().slice(0, 2);

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&h=900&fit=crop"
            alt="Colorful plant-based meal spread"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-4">
            Plant-Based Living
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white leading-tight max-w-2xl">
            Nourish Your Body,{" "}
            <span className="text-sage-light">Heal With Food</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
            Discover vibrant vegan recipes, healing juice blends, and wellness
            programs designed to transform your relationship with food.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/recipes"
              className="px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
            >
              Explore Recipes
            </Link>
            <Link
              href="/juice-pharmacy"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Juice Pharmacy
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Recipes ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              From Our Kitchen
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal">
              Featured Recipes
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
              Simple, wholesome dishes bursting with flavor — proof that
              plant-based eating is anything but boring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <article
                key={recipe.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-warm-gray-light">
                      {recipe.cookTime}
                    </span>
                    <Stars rating={recipe.rating} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
                    {recipe.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-sage-light/20 text-forest rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Juice Pharmacy ── */}
      <section className="py-24 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-3">
              Liquid Healing
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold">
              Juice Pharmacy
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Nature&apos;s medicine cabinet — healing smoothies and juice
              blends crafted for specific health benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredJuices.map((juice) => (
              <article
                key={juice.slug}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={juice.image}
                    alt={juice.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-3 bg-forest/10 text-sage-light">
                    {juice.benefit}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-2">
                    {juice.title}
                  </h3>
                  <p className="text-sm text-white/60">{juice.ingredients.map((ing) => ing.item).join(", ")}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/juice-pharmacy"
              className="inline-block px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              View All Blends
            </Link>
          </div>
        </div>
      </section>

      {/* ── Diet Plans ── */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              Your Wellness Journey
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal">
              Diet Plans
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
              Structured programs designed by nutritionists to help you thrive
              on a plant-based lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPlans.map((plan) => (
              <article
                key={plan.slug}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-5">{plan.icon}</div>
                <span className="text-xs font-semibold text-forest bg-forest/10 px-3 py-1 rounded-full">
                  {plan.duration}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mt-5 mb-3">
                  {plan.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {plan.excerpt}
                </p>
                <span className="inline-block mt-6 text-forest font-semibold hover:text-forest-light transition-colors cursor-pointer">
                  Learn More →
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/diet-plans"
              className="inline-block px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              Latest Articles
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal">
              From the Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-peach uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-2">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-forest font-semibold text-sm hover:text-forest-light transition-colors cursor-pointer">
                    Read Article →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-3">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            What is Veganster?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Veganster was born from a simple belief — that the food we eat has
            the power to heal, energize, and transform our lives. We&apos;re a
            community of plant-based food lovers, wellness seekers, and kitchen
            adventurers sharing recipes, knowledge, and inspiration for a
            healthier, more compassionate world.
          </p>
          <Link
            href="/about"
            className="inline-block mt-10 px-8 py-3.5 bg-white text-forest font-semibold rounded-full hover:bg-cream transition-colors"
          >
            Learn Our Story
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

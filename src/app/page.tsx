import Image from "next/image";
import Header from "@/components/Header";
import NewsletterForm from "@/components/NewsletterForm";

/* ─── Data ───────────────────────────────────────────────────────────── */

const recipes = [
  {
    title: "Rainbow Buddha Bowl",
    time: "25 min",
    rating: 4.9,
    tags: ["Gluten-Free", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
  {
    title: "Avocado & Chickpea Toast",
    time: "10 min",
    rating: 4.7,
    tags: ["Quick", "High Fiber"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
  },
  {
    title: "Thai Peanut Noodles",
    time: "30 min",
    rating: 4.8,
    tags: ["Nut-Free Option", "Meal Prep"],
    image:
      "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=400&fit=crop",
  },
];

const juices = [
  {
    name: "Green Immunity Elixir",
    ingredients: "Kale, Ginger, Lemon, Apple",
    benefit: "Immune Boost",
    color: "bg-forest/10 text-forest",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=500&fit=crop",
  },
  {
    name: "Berry Radiance Blend",
    ingredients: "Blueberry, Acai, Banana, Oat Milk",
    benefit: "Skin Health",
    color: "bg-purple-100 text-purple-800",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=500&fit=crop",
  },
  {
    name: "Golden Turmeric Tonic",
    ingredients: "Turmeric, Mango, Coconut Milk, Black Pepper",
    benefit: "Anti-Inflammatory",
    color: "bg-amber-100 text-amber-800",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=500&fit=crop",
  },
];

const dietPlans = [
  {
    title: "7-Day Reset Cleanse",
    description:
      "A gentle whole-food cleanse to reset your gut health and energy levels.",
    duration: "7 Days",
    icon: "🌿",
  },
  {
    title: "High-Protein Plant Power",
    description:
      "Build muscle and stay energized with protein-packed plant-based meals.",
    duration: "30 Days",
    icon: "💪",
  },
  {
    title: "Anti-Inflammatory Plan",
    description:
      "Reduce chronic inflammation with healing foods, spices, and superfoods.",
    duration: "21 Days",
    icon: "✨",
  },
];

const blogPosts = [
  {
    title: "10 Plant Proteins That Beat Meat",
    excerpt:
      "Discover the most nutrient-dense plant proteins and how to incorporate them into every meal.",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
  },
  {
    title: "The Science Behind Gut Health",
    excerpt:
      "How a plant-based diet transforms your microbiome and boosts overall wellness.",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
  },
];

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
            <a
              href="#recipes"
              className="px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
            >
              Explore Recipes
            </a>
            <a
              href="#juice-pharmacy"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Juice Pharmacy
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Recipes ── */}
      <section id="recipes" className="py-24 bg-cream">
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
            {recipes.map((recipe) => (
              <article
                key={recipe.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-warm-gray-light">
                      {recipe.time}
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
        </div>
      </section>

      {/* ── Juice Pharmacy ── */}
      <section id="juice-pharmacy" className="py-24 bg-forest-dark text-white">
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
            {juices.map((juice) => (
              <article
                key={juice.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={juice.image}
                    alt={juice.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-3 ${juice.color}`}
                  >
                    {juice.benefit}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-2">
                    {juice.name}
                  </h3>
                  <p className="text-sm text-white/60">{juice.ingredients}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diet Plans ── */}
      <section id="diet-plans" className="py-24 bg-cream-dark">
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
            {dietPlans.map((plan) => (
              <article
                key={plan.title}
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
                  {plan.description}
                </p>
                <button className="mt-6 text-forest font-semibold hover:text-forest-light transition-colors">
                  Learn More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section id="blog" className="py-24 bg-cream">
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
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
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
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section id="about" className="py-24 bg-forest text-white">
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
          <a
            href="#about"
            className="inline-block mt-10 px-8 py-3.5 bg-white text-forest font-semibold rounded-full hover:bg-cream transition-colors"
          >
            Learn Our Story
          </a>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-4">
            Join the Veganster Community
          </h2>
          <p className="text-warm-gray mb-8">
            Get weekly recipes, wellness tips, and plant-based inspiration
            delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-charcoal text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                Veganster
              </span>
              <p className="mt-4 text-sm leading-relaxed">
                Plant-based recipes, healing juices, and wellness programs for a
                healthier, happier you.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#recipes" className="hover:text-white transition-colors">Recipes</a>
                </li>
                <li>
                  <a href="#juice-pharmacy" className="hover:text-white transition-colors">Juice Pharmacy</a>
                </li>
                <li>
                  <a href="#diet-plans" className="hover:text-white transition-colors">Diet Plans</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; 2026 Veganster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

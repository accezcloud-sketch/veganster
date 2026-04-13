export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "plant-proteins-that-beat-meat",
    title: "10 Plant Proteins That Beat Meat",
    excerpt:
      "Discover the most nutrient-dense plant proteins and how to incorporate them into every meal for optimal health.",
    category: "Nutrition",
    readTime: "7 min read",
    date: "Apr 8, 2026",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
  },
  {
    slug: "science-behind-gut-health",
    title: "The Science Behind Gut Health",
    excerpt:
      "How a plant-based diet transforms your microbiome and boosts overall wellness from the inside out.",
    category: "Wellness",
    readTime: "9 min read",
    date: "Apr 3, 2026",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
  },
  {
    slug: "beginners-guide-to-going-vegan",
    title: "A Beginner's Guide to Going Vegan",
    excerpt:
      "Everything you need to know about transitioning to a plant-based lifestyle — from pantry staples to meal planning.",
    category: "Lifestyle",
    readTime: "12 min read",
    date: "Mar 28, 2026",
    image:
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=400&fit=crop",
  },
  {
    slug: "superfoods-you-should-eat-daily",
    title: "7 Superfoods You Should Eat Daily",
    excerpt:
      "From chia seeds to turmeric — the powerhouse plants that can transform your energy, skin, and immunity.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "Mar 21, 2026",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=400&fit=crop",
  },
  {
    slug: "meal-prep-for-busy-weekdays",
    title: "Vegan Meal Prep for Busy Weekdays",
    excerpt:
      "Save time and eat well with these batch-cooking strategies and make-ahead recipes for the whole week.",
    category: "Lifestyle",
    readTime: "8 min read",
    date: "Mar 14, 2026",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
  },
  {
    slug: "anti-inflammatory-foods-guide",
    title: "The Ultimate Anti-Inflammatory Foods Guide",
    excerpt:
      "Learn which foods fight chronic inflammation and how to build an anti-inflammatory plate every day.",
    category: "Wellness",
    readTime: "10 min read",
    date: "Mar 7, 2026",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
  },
];

export interface Juice {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  prepTime: string;
  ingredients: string;
  benefit: string;
  image: string;
}

export const juices: Juice[] = [
  {
    slug: "green-immunity-elixir",
    title: "Green Immunity Elixir",
    excerpt:
      "A powerful green juice packed with vitamins and antioxidants to supercharge your immune system.",
    category: "Immune Support",
    prepTime: "5 min",
    ingredients: "Kale, Ginger, Lemon, Apple, Spinach",
    benefit: "Immune Boost",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop",
  },
  {
    slug: "berry-radiance-blend",
    title: "Berry Radiance Blend",
    excerpt:
      "A antioxidant-rich berry smoothie that nourishes your skin from within for a natural glow.",
    category: "Skin Health",
    prepTime: "5 min",
    ingredients: "Blueberry, Acai, Banana, Oat Milk, Collagen Booster",
    benefit: "Skin Health",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
  },
  {
    slug: "golden-turmeric-tonic",
    title: "Golden Turmeric Tonic",
    excerpt:
      "An ancient-inspired golden blend that fights inflammation and soothes the body naturally.",
    category: "Anti-Inflammatory",
    prepTime: "5 min",
    ingredients: "Turmeric, Mango, Coconut Milk, Black Pepper, Ginger",
    benefit: "Anti-Inflammatory",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&h=400&fit=crop",
  },
  {
    slug: "tropical-energy-surge",
    title: "Tropical Energy Surge",
    excerpt:
      "A refreshing tropical blend loaded with natural sugars and B-vitamins for sustained energy all day.",
    category: "Energy",
    prepTime: "5 min",
    ingredients: "Pineapple, Mango, Passion Fruit, Coconut Water, Lime",
    benefit: "Energy Boost",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop",
  },
  {
    slug: "beet-recovery-elixir",
    title: "Beet Recovery Elixir",
    excerpt:
      "A vibrant beetroot juice that supports post-workout recovery, blood flow, and endurance.",
    category: "Recovery",
    prepTime: "10 min",
    ingredients: "Beetroot, Carrot, Apple, Ginger, Celery",
    benefit: "Muscle Recovery",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
  },
  {
    slug: "calm-lavender-moon-milk",
    title: "Calm Lavender Moon Milk",
    excerpt:
      "A soothing, warm blend of adaptogens and calming herbs to wind down your evening and promote restful sleep.",
    category: "Sleep & Calm",
    prepTime: "10 min",
    ingredients: "Oat Milk, Lavender, Ashwagandha, Honey, Cinnamon",
    benefit: "Better Sleep",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
  },
  {
    slug: "detox-celery-cleanse",
    title: "Detox Celery Cleanse",
    excerpt:
      "A simple but effective celery-based juice for daily detoxification and gut support.",
    category: "Detox",
    prepTime: "5 min",
    ingredients: "Celery, Cucumber, Green Apple, Lemon, Parsley",
    benefit: "Detox & Cleanse",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
  },
  {
    slug: "chocolate-protein-shake",
    title: "Chocolate Protein Power Shake",
    excerpt:
      "A rich, indulgent chocolate shake that delivers 25g of plant protein — perfect for post-gym fuel.",
    category: "Protein",
    prepTime: "5 min",
    ingredients: "Cacao, Banana, Peanut Butter, Oat Milk, Hemp Protein",
    benefit: "Muscle Building",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop",
  },
];

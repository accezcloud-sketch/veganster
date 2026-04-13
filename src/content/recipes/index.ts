export interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cookTime: string;
  rating: number;
  tags: string[];
  image: string;
}

export const recipes: Recipe[] = [
  {
    slug: "rainbow-buddha-bowl",
    title: "Rainbow Buddha Bowl",
    excerpt:
      "A vibrant bowl packed with roasted sweet potato, quinoa, avocado, and a creamy tahini dressing.",
    category: "Bowls",
    cookTime: "25 min",
    rating: 4.9,
    tags: ["Gluten-Free", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
  {
    slug: "avocado-chickpea-toast",
    title: "Avocado & Chickpea Toast",
    excerpt:
      "Crispy sourdough topped with smashed chickpeas, ripe avocado, cherry tomatoes, and a squeeze of lemon.",
    category: "Breakfast",
    cookTime: "10 min",
    rating: 4.7,
    tags: ["Quick", "High Fiber"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
  },
  {
    slug: "thai-peanut-noodles",
    title: "Thai Peanut Noodles",
    excerpt:
      "Silky rice noodles tossed in a spicy peanut sauce with crunchy vegetables and fresh herbs.",
    category: "Mains",
    cookTime: "30 min",
    rating: 4.8,
    tags: ["Nut-Free Option", "Meal Prep"],
    image:
      "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=400&fit=crop",
  },
  {
    slug: "mediterranean-stuffed-peppers",
    title: "Mediterranean Stuffed Peppers",
    excerpt:
      "Bell peppers filled with herbed rice, sun-dried tomatoes, olives, and a balsamic glaze.",
    category: "Mains",
    cookTime: "45 min",
    rating: 4.6,
    tags: ["Gluten-Free", "Whole Food"],
    image:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop",
  },
  {
    slug: "mango-coconut-chia-pudding",
    title: "Mango Coconut Chia Pudding",
    excerpt:
      "Creamy overnight chia pudding layered with fresh mango and toasted coconut flakes.",
    category: "Breakfast",
    cookTime: "5 min + overnight",
    rating: 4.8,
    tags: ["No-Cook", "Meal Prep"],
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&h=400&fit=crop",
  },
  {
    slug: "roasted-cauliflower-tacos",
    title: "Roasted Cauliflower Tacos",
    excerpt:
      "Spiced cauliflower florets on warm tortillas with pickled onion, cilantro lime crema, and fresh salsa.",
    category: "Mains",
    cookTime: "35 min",
    rating: 4.9,
    tags: ["Crowd Pleaser", "Gluten-Free Option"],
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
  },
  {
    slug: "green-goddess-salad",
    title: "Green Goddess Salad",
    excerpt:
      "Crunchy romaine, cucumber, and edamame with a creamy herbed green goddess dressing.",
    category: "Salads",
    cookTime: "15 min",
    rating: 4.5,
    tags: ["Raw", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
  },
  {
    slug: "sweet-potato-black-bean-chili",
    title: "Sweet Potato & Black Bean Chili",
    excerpt:
      "A hearty, smoky chili loaded with tender sweet potatoes, black beans, corn, and warming spices.",
    category: "Soups",
    cookTime: "40 min",
    rating: 4.7,
    tags: ["Comfort Food", "Freezer-Friendly"],
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
  },
  {
    slug: "berry-acai-smoothie-bowl",
    title: "Berry Acai Smoothie Bowl",
    excerpt:
      "Thick and creamy acai blended with mixed berries, topped with granola, banana, and hemp seeds.",
    category: "Breakfast",
    cookTime: "10 min",
    rating: 4.8,
    tags: ["Quick", "Superfood"],
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
  },
];

export interface DietPlan {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  duration: string;
  icon: string;
  image: string;
}

export const dietPlans: DietPlan[] = [
  {
    slug: "7-day-reset-cleanse",
    title: "7-Day Reset Cleanse",
    excerpt:
      "A gentle whole-food cleanse to reset your gut health, boost energy levels, and kickstart healthier habits.",
    category: "Detox",
    duration: "7 Days",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
  },
  {
    slug: "high-protein-plant-power",
    title: "High-Protein Plant Power",
    excerpt:
      "Build muscle and stay energized with 30 days of protein-packed plant-based meals and snacks.",
    category: "Fitness",
    duration: "30 Days",
    icon: "💪",
    image:
      "https://images.unsplash.com/photo-1505576399279-0d06b1398e31?w=600&h=400&fit=crop",
  },
  {
    slug: "anti-inflammatory-plan",
    title: "Anti-Inflammatory Plan",
    excerpt:
      "Reduce chronic inflammation with 21 days of healing foods, warming spices, and nutrient-dense superfoods.",
    category: "Healing",
    duration: "21 Days",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
  {
    slug: "gut-health-restore",
    title: "Gut Health Restore",
    excerpt:
      "Rebuild your microbiome with fermented foods, prebiotics, and fiber-rich whole plant meals.",
    category: "Digestive",
    duration: "14 Days",
    icon: "🫶",
    image:
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=400&fit=crop",
  },
  {
    slug: "weight-management-plan",
    title: "Whole-Food Weight Management",
    excerpt:
      "A sustainable, calorie-conscious plan focused on satiety, whole foods, and balanced macronutrients.",
    category: "Weight Loss",
    duration: "30 Days",
    icon: "⚖️",
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop",
  },
  {
    slug: "energy-vitality-boost",
    title: "Energy & Vitality Boost",
    excerpt:
      "Combat fatigue with iron-rich greens, complex carbs, and adaptogenic superfoods across 14 energizing days.",
    category: "Energy",
    duration: "14 Days",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=400&fit=crop",
  },
];

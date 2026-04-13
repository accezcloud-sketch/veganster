export interface DayPlan {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}

export interface DietPlan {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  duration: string;
  icon: string;
  image: string;
  highlights: string[];
  schedule: DayPlan[];
}

export const dietPlans: DietPlan[] = [
  {
    slug: "7-day-reset-cleanse",
    title: "7-Day Reset Cleanse",
    excerpt:
      "A gentle whole-food cleanse to reset your gut health, boost energy levels, and kickstart healthier habits.",
    description:
      "This 7-day cleanse focuses on whole, unprocessed plant foods to give your digestive system a break, flood your body with nutrients, and reset your palate. You'll eliminate processed foods, refined sugars, caffeine, and alcohol while nourishing yourself with vibrant, satisfying meals.",
    category: "Detox",
    duration: "7 Days",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    highlights: [
      "Eliminates processed foods and refined sugars",
      "Focus on hydration and fiber-rich meals",
      "Includes daily morning lemon water ritual",
      "Gentle enough for beginners",
    ],
    schedule: [
      { day: "Day 1", breakfast: "Green smoothie with spinach, banana, and almond milk", lunch: "Large rainbow salad with lemon tahini dressing", dinner: "Vegetable miso soup with brown rice", snack: "Apple slices with almond butter" },
      { day: "Day 2", breakfast: "Overnight oats with chia seeds, berries, and coconut", lunch: "Quinoa tabbouleh with cucumber and tomatoes", dinner: "Roasted cauliflower and chickpea curry", snack: "Celery sticks with hummus" },
      { day: "Day 3", breakfast: "Fresh fruit bowl with hemp seeds and mint", lunch: "Lentil soup with crusty whole grain bread", dinner: "Stuffed sweet potatoes with black beans and avocado", snack: "Trail mix with walnuts and dried cranberries" },
      { day: "Day 4", breakfast: "Açaí smoothie bowl with granola and fresh fruit", lunch: "Buddha bowl with roasted vegetables and tahini", dinner: "Zucchini noodles with marinara and white beans", snack: "Carrot sticks with cashew dip" },
      { day: "Day 5", breakfast: "Chia pudding with mango and toasted coconut", lunch: "Avocado and sprout wrap with mixed greens", dinner: "Thai vegetable coconut curry with jasmine rice", snack: "Fresh berries with coconut yogurt" },
      { day: "Day 6", breakfast: "Warm oatmeal with cinnamon, walnuts, and banana", lunch: "Roasted beet and arugula salad with citrus vinaigrette", dinner: "Black bean and sweet potato chili", snack: "Sliced pear with almond butter" },
      { day: "Day 7", breakfast: "Green juice (celery, cucumber, apple, ginger)", lunch: "Mediterranean mezze plate with hummus and falafel", dinner: "Mushroom and herb risotto with side salad", snack: "Dark chocolate (80%+) with a handful of almonds" },
    ],
  },
  {
    slug: "high-protein-plant-power",
    title: "High-Protein Plant Power",
    excerpt:
      "Build muscle and stay energized with 30 days of protein-packed plant-based meals and snacks.",
    description:
      "Designed for active individuals, this 30-day plan delivers 80-120g of plant protein daily through strategic meal combinations. Each day is optimized for muscle recovery, sustained energy, and satiety — proving you can build serious strength on plants.",
    category: "Fitness",
    duration: "30 Days",
    icon: "💪",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    highlights: [
      "80-120g plant protein daily",
      "Pre and post-workout meal timing",
      "Complete amino acid profiles in every meal",
      "Grocery lists and batch-cooking guides included",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Tofu scramble with spinach, mushrooms, and nutritional yeast (25g protein)", lunch: "Lentil and quinoa power bowl with roasted vegetables (28g protein)", dinner: "Tempeh stir-fry with broccoli, edamame, and brown rice (32g protein)", snack: "Chocolate protein shake with hemp seeds and peanut butter (20g protein)" },
      { day: "Week 2", breakfast: "Protein-packed overnight oats with hemp, chia, and protein powder (22g protein)", lunch: "Chickpea and black bean burrito bowl with cashew crema (30g protein)", dinner: "Seitan and vegetable kebabs with hummus and tabbouleh (35g protein)", snack: "Edamame with sea salt and trail mix (18g protein)" },
      { day: "Week 3", breakfast: "High-protein smoothie bowl with spirulina, banana, and almond butter (24g protein)", lunch: "Red lentil dal with brown rice and roasted cauliflower (26g protein)", dinner: "TVP bolognese with whole wheat pasta and side salad (34g protein)", snack: "Roasted chickpeas and protein energy balls (16g protein)" },
      { day: "Week 4", breakfast: "Chickpea flour omelette with peppers, onions, and avocado (20g protein)", lunch: "Tempeh BLT wrap with white bean spread (28g protein)", dinner: "Tofu and peanut curry with rice noodles and snap peas (30g protein)", snack: "Greek-style soy yogurt with walnuts and berries (15g protein)" },
    ],
  },
  {
    slug: "anti-inflammatory-plan",
    title: "Anti-Inflammatory Plan",
    excerpt:
      "Reduce chronic inflammation with 21 days of healing foods, warming spices, and nutrient-dense superfoods.",
    description:
      "This science-backed 21-day plan strategically incorporates anti-inflammatory powerhouses — turmeric, ginger, berries, omega-3-rich seeds, and leafy greens — into every meal. By eliminating inflammatory triggers and flooding your body with healing compounds, most participants report reduced pain, clearer skin, and improved energy within the first week.",
    category: "Healing",
    duration: "21 Days",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    highlights: [
      "Eliminates common inflammatory triggers",
      "Rich in turmeric, ginger, and omega-3 foods",
      "Includes anti-inflammatory golden milk daily",
      "Guided by nutritional science research",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Golden turmeric oatmeal with walnuts, blueberries, and flaxseed", lunch: "Kale and quinoa salad with anti-inflammatory ginger-miso dressing", dinner: "Turmeric coconut lentil soup with wilted greens", snack: "Berry smoothie with flax and ginger" },
      { day: "Week 2", breakfast: "Chia pudding with mixed berries, hemp seeds, and cinnamon", lunch: "Roasted sweet potato and black bean bowl with avocado", dinner: "Ginger-garlic vegetable stir-fry with brown rice and edamame", snack: "Golden milk latte with turmeric, cinnamon, and black pepper" },
      { day: "Week 3", breakfast: "Green anti-inflammatory smoothie with spinach, pineapple, and turmeric", lunch: "Mediterranean lentil and roasted vegetable salad with olive oil", dinner: "Mushroom and barley stew with thyme and rosemary", snack: "Walnuts, dark chocolate, and fresh berries" },
    ],
  },
  {
    slug: "gut-health-restore",
    title: "Gut Health Restore",
    excerpt:
      "Rebuild your microbiome with fermented foods, prebiotics, and fiber-rich whole plant meals.",
    description:
      "Your gut microbiome is the foundation of your health. This 14-day plan is specifically designed to increase microbial diversity by incorporating 30+ different plant foods per week, daily fermented foods, and targeted prebiotic fibers. Follow this plan to reduce bloating, improve digestion, and strengthen your immune system.",
    category: "Digestive",
    duration: "14 Days",
    icon: "🫶",
    image:
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=400&fit=crop",
    highlights: [
      "30+ different plants per week for microbiome diversity",
      "Daily fermented foods (kimchi, sauerkraut, miso, tempeh)",
      "Prebiotic-rich meals to feed beneficial bacteria",
      "Eliminates common gut irritants",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Warm miso soup with tofu and seaweed, plus overnight oats with prebiotic banana", lunch: "Rainbow grain bowl with 8+ vegetables and sauerkraut", dinner: "Tempeh and vegetable kimchi stew with brown rice", snack: "Kefir smoothie with berries and flaxseed" },
      { day: "Week 2", breakfast: "Sourdough toast with avocado, sauerkraut, and pumpkin seeds", lunch: "Lentil and vegetable soup with fermented pickles", dinner: "Miso-glazed roasted vegetables with quinoa and tempeh", snack: "Kombucha with raw vegetables and hummus" },
    ],
  },
  {
    slug: "weight-management-plan",
    title: "Whole-Food Weight Management",
    excerpt:
      "A sustainable, calorie-conscious plan focused on satiety, whole foods, and balanced macronutrients.",
    description:
      "This isn't a crash diet — it's a 30-day sustainable approach to weight management through whole plant foods. By focusing on fiber-rich, nutrient-dense meals that keep you full and satisfied, you'll naturally find your optimal weight without counting calories or feeling deprived.",
    category: "Weight Loss",
    duration: "30 Days",
    icon: "⚖️",
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop",
    highlights: [
      "No calorie counting — focus on food quality",
      "High fiber and volume for natural satiety",
      "Balanced macros in every meal",
      "Sustainable approach — no deprivation",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Veggie-loaded tofu scramble with whole grain toast and fruit", lunch: "Massive chopped salad with chickpeas, seeds, and lemon dressing", dinner: "Cauliflower rice stir-fry with edamame and cashew sauce", snack: "Apple with a thin spread of almond butter" },
      { day: "Week 2", breakfast: "Overnight oats with berries, flax, and a protein boost", lunch: "Lentil vegetable soup with a large side salad", dinner: "Stuffed bell peppers with quinoa, black beans, and salsa", snack: "Cucumber and carrot sticks with white bean dip" },
      { day: "Week 3", breakfast: "Smoothie with greens, banana, protein powder, and almond milk", lunch: "Buddha bowl with sweet potato, kale, tahini, and chickpeas", dinner: "Mushroom and lentil bolognese over zucchini noodles", snack: "Small handful of mixed nuts and an orange" },
      { day: "Week 4", breakfast: "Chia pudding with fresh fruit and a sprinkle of granola", lunch: "Mediterranean wrap with hummus, roasted veggies, and greens", dinner: "Thai vegetable curry with cauliflower rice", snack: "Roasted chickpeas with smoked paprika" },
    ],
  },
  {
    slug: "energy-vitality-boost",
    title: "Energy & Vitality Boost",
    excerpt:
      "Combat fatigue with iron-rich greens, complex carbs, and adaptogenic superfoods across 14 energizing days.",
    description:
      "Feeling drained? This 14-day plan targets the root causes of low energy: nutrient deficiencies, blood sugar imbalances, and adrenal fatigue. Every meal is designed to provide sustained energy through iron-rich greens, complex carbohydrates, B-vitamins, and adaptogenic superfoods like maca and ashwagandha.",
    category: "Energy",
    duration: "14 Days",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=400&fit=crop",
    highlights: [
      "Iron-rich meals paired with vitamin C for absorption",
      "Complex carbs for sustained blood sugar",
      "Adaptogenic superfoods (maca, ashwagandha)",
      "No caffeine crashes — natural energy only",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Maca-boosted banana smoothie with spinach, oats, and almond butter", lunch: "Iron-rich lentil and kale salad with lemon-tahini and pumpkin seeds", dinner: "Sweet potato and black bean power bowl with quinoa and avocado", snack: "Energy balls with dates, oats, maca, and cacao" },
      { day: "Week 2", breakfast: "Ashwagandha golden oatmeal with walnuts, banana, and hemp seeds", lunch: "Chickpea and spinach curry with iron-fortified brown rice", dinner: "Tempeh and broccoli stir-fry with sesame and ginger", snack: "Trail mix with Brazil nuts, pumpkin seeds, and dried apricots" },
    ],
  },
];

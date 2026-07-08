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
    slug: "7-day-whole-food-reset",
    title: "7-Day Whole-Food Reset",
    excerpt:
      "A week of simple, whole-food plant-based meals to build fresh habits and enjoy more vegetables, grains, and legumes.",
    description:
      "This 7-day plan is built around whole, minimally processed plant foods — vegetables, fruits, whole grains, legumes, nuts, and seeds. It's a simple way to fill your week with colorful, satisfying meals and get comfortable cooking plant-based at home.",
    category: "Reset",
    duration: "7 Days",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    highlights: [
      "Built around whole, minimally processed foods",
      "Colorful, fibre-rich meals every day",
      "Simple recipes with everyday ingredients",
      "Beginner-friendly and easy to follow",
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
      "30 days of protein-rich plant-based meals and snacks for active, hungry days.",
    description:
      "Designed for active people, this 30-day plan builds meals around protein-rich plant foods like tofu, tempeh, seitan, lentils, beans, and hemp. Each day combines filling, flavorful meals and snacks to keep an active lifestyle well-fueled — proof that you can eat plenty of protein on plants.",
    category: "Fitness",
    duration: "30 Days",
    icon: "💪",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    highlights: [
      "Protein-rich meals built on tofu, tempeh, beans, and lentils",
      "Ideas for pre- and post-workout meals",
      "A variety of complete-protein combinations",
      "Grocery lists and batch-cooking tips included",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Tofu scramble with spinach, mushrooms, and nutritional yeast (25g protein)", lunch: "Lentil and quinoa power bowl with roasted vegetables (28g protein)", dinner: "Tempeh stir-fry with broccoli, edamame, and brown rice (32g protein)", snack: "Chocolate protein shake with hemp seeds and peanut butter (20g protein)" },
      { day: "Week 2", breakfast: "Protein-packed overnight oats with hemp, chia, and protein powder (22g protein)", lunch: "Chickpea and black bean burrito bowl with cashew crema (30g protein)", dinner: "Seitan and vegetable kebabs with hummus and tabbouleh (35g protein)", snack: "Edamame with sea salt and trail mix (18g protein)" },
      { day: "Week 3", breakfast: "High-protein smoothie bowl with spirulina, banana, and almond butter (24g protein)", lunch: "Red lentil dal with brown rice and roasted cauliflower (26g protein)", dinner: "TVP bolognese with whole wheat pasta and side salad (34g protein)", snack: "Roasted chickpeas and protein energy balls (16g protein)" },
      { day: "Week 4", breakfast: "Chickpea flour omelette with peppers, onions, and avocado (20g protein)", lunch: "Tempeh BLT wrap with white bean spread (28g protein)", dinner: "Tofu and peanut curry with rice noodles and snap peas (30g protein)", snack: "Greek-style soy yogurt with walnuts and berries (15g protein)" },
    ],
  },
  {
    slug: "colorful-whole-foods-plan",
    title: "Colorful Whole-Foods Plan",
    excerpt:
      "21 days of vibrant, plant-packed meals featuring turmeric, ginger, berries, greens, and warming spices.",
    description:
      "This 21-day plan is all about variety and color. Meals are built around turmeric, ginger, berries, leafy greens, omega-3-rich seeds, and warming spices — a flavorful way to enjoy a wider range of whole plant foods across your week.",
    category: "Whole Foods",
    duration: "21 Days",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    highlights: [
      "Meals rich in turmeric, ginger, and colorful produce",
      "Plenty of omega-3 foods like flax and walnuts",
      "A warming golden-milk-style drink to enjoy",
      "Lots of variety and flavor across the week",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Golden turmeric oatmeal with walnuts, blueberries, and flaxseed", lunch: "Kale and quinoa salad with ginger-miso dressing", dinner: "Turmeric coconut lentil soup with wilted greens", snack: "Berry smoothie with flax and ginger" },
      { day: "Week 2", breakfast: "Chia pudding with mixed berries, hemp seeds, and cinnamon", lunch: "Roasted sweet potato and black bean bowl with avocado", dinner: "Ginger-garlic vegetable stir-fry with brown rice and edamame", snack: "Golden milk latte with turmeric, cinnamon, and black pepper" },
      { day: "Week 3", breakfast: "Green smoothie with spinach, pineapple, and turmeric", lunch: "Mediterranean lentil and roasted vegetable salad with olive oil", dinner: "Mushroom and barley stew with thyme and rosemary", snack: "Walnuts, dark chocolate, and fresh berries" },
    ],
  },
  {
    slug: "fibre-and-ferments-plan",
    title: "Fibre & Ferments Plan",
    excerpt:
      "14 days centered on fibre-rich whole foods and fermented favorites like kimchi, sauerkraut, miso, and tempeh.",
    description:
      "This 14-day plan leans into two things plant-based eating does really well: fibre and fermented foods. You'll aim for a wide variety of plants across the week and enjoy daily fermented foods like kimchi, sauerkraut, miso, and tempeh — a delicious way to keep meals interesting and full of flavor.",
    category: "Whole Foods",
    duration: "14 Days",
    icon: "🫶",
    image:
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=400&fit=crop",
    highlights: [
      "Aim for 30+ different plants across the week",
      "Daily fermented foods (kimchi, sauerkraut, miso, tempeh)",
      "Fibre-rich meals with beans, grains, and greens",
      "Plenty of variety and flavor",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Warm miso soup with tofu and seaweed, plus overnight oats with banana", lunch: "Rainbow grain bowl with 8+ vegetables and sauerkraut", dinner: "Tempeh and vegetable kimchi stew with brown rice", snack: "Kefir-style smoothie with berries and flaxseed" },
      { day: "Week 2", breakfast: "Sourdough toast with avocado, sauerkraut, and pumpkin seeds", lunch: "Lentil and vegetable soup with fermented pickles", dinner: "Miso-glazed roasted vegetables with quinoa and tempeh", snack: "Kombucha with raw vegetables and hummus" },
    ],
  },
  {
    slug: "balanced-whole-food-plan",
    title: "Balanced Whole-Food Plan",
    excerpt:
      "A sustainable, satisfying approach to everyday eating built on filling, fibre-rich whole foods.",
    description:
      "This isn't a crash diet — it's a 30-day approach to balanced, everyday eating. By focusing on fibre-rich, filling whole-plant meals, it's easy to eat well and feel satisfied without counting calories or feeling deprived.",
    category: "Balanced",
    duration: "30 Days",
    icon: "⚖️",
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop",
    highlights: [
      "No calorie counting — focus on food quality",
      "High-fibre, high-volume meals that satisfy",
      "Balanced plates at every meal",
      "A sustainable approach — no deprivation",
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
    title: "Energy & Vitality Plan",
    excerpt:
      "14 days of meals built around iron-rich greens, slow-release carbs, and satisfying plant foods.",
    description:
      "This 14-day plan builds meals around iron-rich greens, slow-release complex carbohydrates, and plenty of colorful plants — a tasty way to keep your plate varied and your meals satisfying throughout the day.",
    category: "Energy",
    duration: "14 Days",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=400&fit=crop",
    highlights: [
      "Iron-rich meals paired with vitamin C foods",
      "Slow-release complex carbs for steady meals",
      "Optional adaptogen add-ins like maca",
      "Naturally caffeine-free",
    ],
    schedule: [
      { day: "Week 1", breakfast: "Banana smoothie with spinach, oats, almond butter, and optional maca", lunch: "Iron-rich lentil and kale salad with lemon-tahini and pumpkin seeds", dinner: "Sweet potato and black bean power bowl with quinoa and avocado", snack: "Energy balls with dates, oats, and cacao" },
      { day: "Week 2", breakfast: "Golden oatmeal with walnuts, banana, and hemp seeds", lunch: "Chickpea and spinach curry with brown rice", dinner: "Tempeh and broccoli stir-fry with sesame and ginger", snack: "Trail mix with Brazil nuts, pumpkin seeds, and dried apricots" },
    ],
  },
];

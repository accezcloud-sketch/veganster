export interface Juice {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  prepTime: string;
  servings: number;
  benefit: string;
  image: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
  healthBenefits: string[];
}

export const juices: Juice[] = [
  {
    slug: "green-machine-juice",
    title: "Green Machine Juice",
    excerpt:
      "A crisp green juice of kale, spinach, apple, and ginger — bright, zingy, and refreshing.",
    category: "Green",
    prepTime: "5 min",
    servings: 1,
    benefit: "Crisp & Green",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Kale leaves", amount: "2 large handfuls" },
      { item: "Fresh spinach", amount: "1 cup" },
      { item: "Green apple", amount: "1 medium" },
      { item: "Fresh ginger root", amount: "1-inch piece" },
      { item: "Lemon", amount: "1/2, juiced" },
      { item: "Celery stalks", amount: "2" },
      { item: "Water or coconut water", amount: "1/2 cup" },
    ],
    instructions: [
      "Wash all produce thoroughly under cold running water.",
      "Roughly chop the kale, spinach, celery, and apple into pieces that fit your juicer or blender.",
      "If using a juicer: feed the kale, spinach, celery, apple, and ginger through the juicer. Stir in the lemon juice at the end.",
      "If using a blender: add all ingredients with 1/2 cup water, blend on high for 60 seconds, then strain through a nut milk bag or fine mesh sieve.",
      "Pour over ice and enjoy fresh.",
    ],
    healthBenefits: [
      "Kale and spinach are naturally rich in vitamins A, C, and K.",
      "Fresh ginger and lemon add brightness and a warming kick.",
      "Celery keeps the blend light and hydrating.",
      "Tastes best over ice, right after juicing.",
    ],
  },
  {
    slug: "berry-radiance-blend",
    title: "Berry & Açaí Smoothie",
    excerpt:
      "A thick, antioxidant-rich blend of blueberries, açaí, and banana on a creamy oat-milk base.",
    category: "Berry",
    prepTime: "5 min",
    servings: 1,
    benefit: "Berry & Creamy",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Frozen blueberries", amount: "1/2 cup" },
      { item: "Frozen açaí packet", amount: "1 (100g)" },
      { item: "Banana", amount: "1 medium" },
      { item: "Oat milk", amount: "1 cup" },
      { item: "Flaxseed meal", amount: "1 tbsp" },
      { item: "Chia seeds", amount: "1 tbsp" },
      { item: "Maple syrup", amount: "1 tsp (optional)" },
    ],
    instructions: [
      "Run the açaí packet under warm water for a few seconds to soften slightly.",
      "Add all ingredients to a high-speed blender.",
      "Blend on high for 45-60 seconds until completely smooth and creamy.",
      "Taste and adjust sweetness with maple syrup if desired.",
      "Pour into a glass and drink right away for the best texture.",
    ],
    healthBenefits: [
      "Blueberries and açaí are known for their deep color and antioxidants.",
      "Oat milk and banana make it naturally creamy without dairy.",
      "Flaxseed and chia add fibre and a dose of omega-3s.",
      "Blend and drink straight away so it stays thick.",
    ],
  },
  {
    slug: "golden-turmeric-tonic",
    title: "Golden Turmeric Smoothie",
    excerpt:
      "A warming golden blend of turmeric, mango, ginger, and coconut milk with a hint of cinnamon.",
    category: "Golden",
    prepTime: "5 min",
    servings: 1,
    benefit: "Warm & Golden",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Fresh turmeric root (or 1 tsp powder)", amount: "2-inch piece" },
      { item: "Frozen mango chunks", amount: "1/2 cup" },
      { item: "Coconut milk", amount: "1 cup" },
      { item: "Fresh ginger root", amount: "1/2-inch piece" },
      { item: "Black pepper", amount: "Pinch" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Maple syrup", amount: "1 tbsp" },
    ],
    instructions: [
      "If using fresh turmeric, peel and roughly chop it. Wear gloves — turmeric stains!",
      "Add turmeric, mango, coconut milk, ginger, black pepper, cinnamon, and maple syrup to a blender.",
      "Blend on high for 60 seconds until smooth and golden.",
      "For a warm version: pour into a saucepan and gently heat over medium-low without boiling. Serve warm.",
      "For a cold version: pour over ice and enjoy immediately.",
    ],
    healthBenefits: [
      "Turmeric and ginger give this blend its warm, earthy flavor and golden color.",
      "A pinch of black pepper is traditional in golden blends.",
      "Coconut milk makes it rich and satisfying.",
      "Enjoy it warmed like a latte or cold over ice.",
    ],
  },
  {
    slug: "tropical-sunrise-smoothie",
    title: "Tropical Sunrise Smoothie",
    excerpt:
      "A bright, refreshing blend of pineapple, mango, and passion fruit in coconut water.",
    category: "Tropical",
    prepTime: "5 min",
    servings: 1,
    benefit: "Bright & Fruity",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Fresh pineapple chunks", amount: "1 cup" },
      { item: "Frozen mango", amount: "1/2 cup" },
      { item: "Passion fruit", amount: "2, scooped" },
      { item: "Coconut water", amount: "1 cup" },
      { item: "Lime", amount: "1/2, juiced" },
      { item: "Fresh mint leaves", amount: "4-5" },
    ],
    instructions: [
      "Cut the passion fruits in half and scoop out the pulp and seeds.",
      "Add pineapple, mango, passion fruit pulp, coconut water, lime juice, and mint to a blender.",
      "Blend on high for 30-45 seconds until smooth. Leave some passion fruit seeds for texture if desired.",
      "Pour over ice into a tall glass.",
      "Garnish with a sprig of fresh mint and a lime wheel. A refreshing pick for a warm afternoon.",
    ],
    healthBenefits: [
      "Pineapple, mango, and passion fruit make a naturally sweet, tangy combo.",
      "Coconut water keeps it light and hydrating.",
      "Fresh mint and lime lift the whole glass.",
      "Serve well-chilled over plenty of ice.",
    ],
  },
  {
    slug: "beet-carrot-ginger-juice",
    title: "Beet, Carrot & Ginger Juice",
    excerpt:
      "An earthy-sweet juice of beetroot, carrot, and apple with a fresh ginger finish.",
    category: "Root",
    prepTime: "10 min",
    servings: 1,
    benefit: "Earthy & Sweet",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Raw beetroot", amount: "1 medium, peeled" },
      { item: "Carrots", amount: "2 medium" },
      { item: "Green apple", amount: "1" },
      { item: "Fresh ginger root", amount: "1-inch piece" },
      { item: "Celery stalk", amount: "1" },
      { item: "Lemon", amount: "1/2, juiced" },
    ],
    instructions: [
      "Wash and peel the beetroot. Cut into chunks small enough for your juicer.",
      "Wash carrots, apple, and celery. Cut into appropriate-sized pieces.",
      "Feed all ingredients through the juicer, alternating between soft and hard produce for best extraction.",
      "Stir in the lemon juice and a pinch of salt.",
      "Pour over ice and enjoy soon after juicing — a vibrant mid-morning refresher.",
    ],
    healthBenefits: [
      "Beetroot and carrot give this juice its deep color and earthy sweetness.",
      "Green apple and lemon balance it with a touch of tartness.",
      "Ginger adds a gentle, warming kick.",
      "Drink soon after juicing for the freshest flavor.",
    ],
  },
  {
    slug: "lavender-moon-milk",
    title: "Lavender Moon Milk",
    excerpt:
      "A cozy, warm oat-milk blend with lavender, vanilla, and cinnamon — a soothing evening treat.",
    category: "Creamy",
    prepTime: "10 min",
    servings: 1,
    benefit: "Cozy & Warm",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Oat milk", amount: "1 1/2 cups" },
      { item: "Dried culinary lavender", amount: "1 tsp" },
      { item: "Ashwagandha powder (optional)", amount: "1/2 tsp" },
      { item: "Maple syrup", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Vanilla extract", amount: "1/2 tsp" },
      { item: "Nutmeg", amount: "Pinch" },
    ],
    instructions: [
      "Pour oat milk into a small saucepan over medium-low heat. Add dried lavender buds.",
      "Gently warm the milk for 5 minutes, stirring occasionally. Do not let it boil.",
      "Strain out the lavender buds through a fine mesh sieve into a mug.",
      "Whisk in cinnamon, vanilla, nutmeg, and ashwagandha (if using) until smooth.",
      "Stir in maple syrup to taste. Sip warm as a calming end to the day.",
    ],
    healthBenefits: [
      "Warm oat milk, vanilla, and cinnamon make this naturally comforting.",
      "Culinary lavender adds a gentle floral aroma.",
      "A touch of maple syrup rounds out the sweetness.",
      "A cozy, caffeine-free drink for winding down in the evening.",
    ],
  },
  {
    slug: "celery-cucumber-cooler",
    title: "Celery & Cucumber Cooler",
    excerpt:
      "A light, hydrating green juice of celery, cucumber, apple, and parsley with a squeeze of lemon.",
    category: "Green",
    prepTime: "5 min",
    servings: 1,
    benefit: "Light & Hydrating",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Celery stalks", amount: "1 large bunch (about 8 stalks)" },
      { item: "Cucumber", amount: "1/2 large" },
      { item: "Green apple", amount: "1" },
      { item: "Lemon", amount: "1/2, juiced" },
      { item: "Fresh parsley", amount: "Small handful" },
      { item: "Fresh ginger root", amount: "1/2-inch piece (optional)" },
    ],
    instructions: [
      "Wash all produce thoroughly. Cut celery, cucumber, and apple into pieces.",
      "Feed celery through the juicer first, followed by cucumber, apple, parsley, and ginger.",
      "Stir in the fresh lemon juice.",
      "Pour over ice and serve well-chilled.",
      "Best enjoyed fresh, any time of day.",
    ],
    healthBenefits: [
      "Celery and cucumber make this one of the lightest, most hydrating blends.",
      "Green apple adds just enough natural sweetness.",
      "Fresh parsley and lemon keep it crisp and bright.",
      "Enjoy it well-chilled, straight after juicing.",
    ],
  },
  {
    slug: "chocolate-protein-shake",
    title: "Chocolate Peanut Butter Shake",
    excerpt:
      "A rich, creamy cacao and peanut butter shake with banana and a scoop of plant protein.",
    category: "Creamy",
    prepTime: "5 min",
    servings: 1,
    benefit: "Rich & Creamy",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Raw cacao powder", amount: "2 tbsp" },
      { item: "Frozen banana", amount: "1 large" },
      { item: "Peanut butter or almond butter", amount: "2 tbsp" },
      { item: "Oat milk", amount: "1 1/4 cups" },
      { item: "Hemp or pea protein powder", amount: "1 scoop (25g)" },
      { item: "Medjool date", amount: "1, pitted" },
      { item: "Ice cubes", amount: "4-5" },
    ],
    instructions: [
      "Add oat milk, frozen banana, cacao powder, nut butter, protein powder, and pitted date to a blender.",
      "Add ice cubes for extra thickness and a frosty texture.",
      "Blend on high for 60 seconds until completely smooth and creamy.",
      "Pour into a large glass or shaker bottle.",
      "Optional: top with a drizzle of nut butter, cacao nibs, or a sprinkle of cinnamon.",
    ],
    healthBenefits: [
      "Cacao and peanut butter make this taste like dessert.",
      "Banana and a Medjool date add natural sweetness.",
      "A scoop of hemp or pea protein makes it more filling.",
      "Blend with ice for a thick, frosty shake.",
    ],
  },
];

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
    slug: "green-immunity-elixir",
    title: "Green Immunity Elixir",
    excerpt:
      "A powerful green juice packed with vitamins and antioxidants to supercharge your immune system.",
    category: "Immune Support",
    prepTime: "5 min",
    servings: 1,
    benefit: "Immune Boost",
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
      "Pour over ice and enjoy immediately for maximum nutrient benefit.",
    ],
    healthBenefits: [
      "Kale and spinach provide vitamins A, C, and K for immune cell function",
      "Ginger has powerful anti-viral and anti-bacterial properties",
      "Lemon delivers a concentrated dose of vitamin C",
      "Celery provides hydrating electrolytes and antioxidants",
    ],
  },
  {
    slug: "berry-radiance-blend",
    title: "Berry Radiance Blend",
    excerpt:
      "An antioxidant-rich berry smoothie that nourishes your skin from within for a natural glow.",
    category: "Skin Health",
    prepTime: "5 min",
    servings: 1,
    benefit: "Skin Health",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Frozen blueberries", amount: "1/2 cup" },
      { item: "Frozen acai packet", amount: "1 (100g)" },
      { item: "Banana", amount: "1 medium" },
      { item: "Oat milk", amount: "1 cup" },
      { item: "Flaxseed meal", amount: "1 tbsp" },
      { item: "Vitamin E oil (food grade)", amount: "1 capsule" },
      { item: "Maple syrup", amount: "1 tsp (optional)" },
    ],
    instructions: [
      "Run the acai packet under warm water for a few seconds to soften slightly.",
      "Add all ingredients to a high-speed blender.",
      "Blend on high for 45-60 seconds until completely smooth and creamy.",
      "Taste and adjust sweetness with maple syrup if desired.",
      "Pour into a glass and drink immediately. Best consumed in the morning on an empty stomach for maximum skin benefits.",
    ],
    healthBenefits: [
      "Blueberries and acai are among the highest antioxidant foods on earth",
      "Vitamin E supports skin elasticity and fights free radical damage",
      "Flaxseed provides omega-3 fatty acids essential for skin hydration",
      "Banana delivers potassium and biotin for healthy skin cell turnover",
    ],
  },
  {
    slug: "golden-turmeric-tonic",
    title: "Golden Turmeric Tonic",
    excerpt:
      "An ancient-inspired golden blend that fights inflammation and soothes the body naturally.",
    category: "Anti-Inflammatory",
    prepTime: "5 min",
    servings: 1,
    benefit: "Anti-Inflammatory",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Fresh turmeric root (or 1 tsp powder)", amount: "2-inch piece" },
      { item: "Frozen mango chunks", amount: "1/2 cup" },
      { item: "Coconut milk", amount: "1 cup" },
      { item: "Fresh ginger root", amount: "1/2-inch piece" },
      { item: "Black pepper", amount: "Pinch (activates curcumin)" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Maple syrup", amount: "1 tbsp" },
    ],
    instructions: [
      "If using fresh turmeric, peel and roughly chop it. Wear gloves — turmeric stains!",
      "Add turmeric, mango, coconut milk, ginger, black pepper, cinnamon, and maple syrup to a blender.",
      "Blend on high for 60 seconds until smooth and golden.",
      "For a warm tonic: pour into a saucepan and gently heat over medium-low without boiling. Serve warm.",
      "For a cold version: pour over ice and enjoy immediately.",
    ],
    healthBenefits: [
      "Curcumin in turmeric is one of nature's most powerful anti-inflammatory compounds",
      "Black pepper increases curcumin absorption by up to 2000%",
      "Ginger complements turmeric's anti-inflammatory action",
      "Coconut milk provides healthy medium-chain fatty acids",
    ],
  },
  {
    slug: "tropical-energy-surge",
    title: "Tropical Energy Surge",
    excerpt:
      "A refreshing tropical blend loaded with natural sugars and B-vitamins for sustained energy all day.",
    category: "Energy",
    prepTime: "5 min",
    servings: 1,
    benefit: "Energy Boost",
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
      "Garnish with a sprig of fresh mint and a lime wheel. Best consumed mid-morning for an energy lift.",
    ],
    healthBenefits: [
      "Pineapple contains bromelain for digestion and natural energy release",
      "Mango is rich in B-vitamins essential for converting food to energy",
      "Coconut water provides natural electrolytes for sustained hydration",
      "Passion fruit delivers iron and vitamin C to combat fatigue",
    ],
  },
  {
    slug: "beet-recovery-elixir",
    title: "Beet Recovery Elixir",
    excerpt:
      "A vibrant beetroot juice that supports post-workout recovery, blood flow, and endurance.",
    category: "Recovery",
    prepTime: "10 min",
    servings: 1,
    benefit: "Muscle Recovery",
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
      "Pour over ice and drink within 30 minutes of making for peak nutrition. Best consumed 1-2 hours before or after exercise.",
    ],
    healthBenefits: [
      "Beetroot nitrates improve blood flow and oxygen delivery to muscles",
      "Carrots provide beta-carotene for reducing exercise-induced oxidative stress",
      "Ginger reduces post-workout muscle soreness by up to 25%",
      "Natural sugars replenish glycogen stores after intense exercise",
    ],
  },
  {
    slug: "calm-lavender-moon-milk",
    title: "Calm Lavender Moon Milk",
    excerpt:
      "A soothing, warm blend of adaptogens and calming herbs to wind down your evening and promote restful sleep.",
    category: "Sleep & Calm",
    prepTime: "10 min",
    servings: 1,
    benefit: "Better Sleep",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Oat milk", amount: "1 1/2 cups" },
      { item: "Dried culinary lavender", amount: "1 tsp" },
      { item: "Ashwagandha powder", amount: "1/2 tsp" },
      { item: "Raw honey or maple syrup", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Vanilla extract", amount: "1/2 tsp" },
      { item: "Nutmeg", amount: "Pinch" },
    ],
    instructions: [
      "Pour oat milk into a small saucepan over medium-low heat. Add dried lavender buds.",
      "Gently warm the milk for 5 minutes, stirring occasionally. Do not let it boil.",
      "Strain out the lavender buds through a fine mesh sieve into a mug.",
      "Whisk in ashwagandha powder, cinnamon, vanilla, and nutmeg until smooth.",
      "Stir in honey or maple syrup to taste. Drink warm, 30-60 minutes before bedtime for best results.",
    ],
    healthBenefits: [
      "Lavender has been clinically shown to reduce anxiety and improve sleep quality",
      "Ashwagandha is an adaptogen that lowers cortisol and calms the nervous system",
      "Warm milk triggers the release of tryptophan, a precursor to melatonin",
      "Cinnamon helps stabilize blood sugar overnight for uninterrupted sleep",
    ],
  },
  {
    slug: "detox-celery-cleanse",
    title: "Detox Celery Cleanse",
    excerpt:
      "A simple but effective celery-based juice for daily detoxification and gut support.",
    category: "Detox",
    prepTime: "5 min",
    servings: 1,
    benefit: "Detox & Cleanse",
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
      "Drink on an empty stomach first thing in the morning. Wait 15-20 minutes before eating breakfast.",
      "For best results, consume daily for at least 7 consecutive days as part of a cleanse.",
    ],
    healthBenefits: [
      "Celery juice supports liver detoxification and bile production",
      "High water content promotes hydration and kidney flushing",
      "Cucumber provides silica for healthy skin and connective tissue",
      "Parsley is a natural diuretic that helps reduce bloating",
    ],
  },
  {
    slug: "chocolate-protein-shake",
    title: "Chocolate Protein Power Shake",
    excerpt:
      "A rich, indulgent chocolate shake that delivers 25g of plant protein — perfect for post-gym fuel.",
    category: "Protein",
    prepTime: "5 min",
    servings: 1,
    benefit: "Muscle Building",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop",
    ingredients: [
      { item: "Raw cacao powder", amount: "2 tbsp" },
      { item: "Frozen banana", amount: "1 large" },
      { item: "Peanut butter or almond butter", amount: "2 tbsp" },
      { item: "Oat milk", amount: "1 1/4 cups" },
      { item: "Hemp protein powder", amount: "1 scoop (25g)" },
      { item: "Medjool date", amount: "1, pitted" },
      { item: "Ice cubes", amount: "4-5" },
    ],
    instructions: [
      "Add oat milk, frozen banana, cacao powder, nut butter, hemp protein, and pitted date to a blender.",
      "Add ice cubes for extra thickness and a frosty texture.",
      "Blend on high for 60 seconds until completely smooth and creamy.",
      "Pour into a large glass or shaker bottle. Best consumed within 30 minutes post-workout.",
      "Optional: top with a drizzle of nut butter, cacao nibs, or a sprinkle of cinnamon.",
    ],
    healthBenefits: [
      "25g of complete plant protein supports muscle repair and growth",
      "Raw cacao is rich in magnesium for muscle relaxation and recovery",
      "Banana provides fast-acting carbs to replenish glycogen stores",
      "Healthy fats from nut butter aid sustained energy and satiety",
    ],
  },
];

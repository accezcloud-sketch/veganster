export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  author: string;
  image: string;
  imageAlt: string;
  tags: string[];
  content: string[];
}

export function wordCount(post: Pick<BlogPost, "content">): number {
  return post.content.reduce(
    (sum, block) => sum + block.trim().split(/\s+/).filter(Boolean).length,
    0,
  );
}

export function estimateReadTime(post: Pick<BlogPost, "content">): string {
  const minutes = Math.max(1, Math.round(wordCount(post) / 220));
  return `${minutes} min read`;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "plant-proteins-that-beat-meat",
    title: "10 Plant Proteins That Beat Meat",
    excerpt:
      "Discover the most nutrient-dense plant proteins and how to incorporate them into every meal for optimal health.",
    description:
      "A dietitian's guide to 10 high-protein plants — lentils, tempeh, hemp, chickpeas, quinoa, tofu and more — with per-serving grams and how to cook each one.",
    category: "Nutrition",
    readTime: "7 min read",
    date: "Apr 8, 2026",
    dateISO: "2026-04-08",
    author: "Dr. Maya Green",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Overhead flat lay of lentils, chickpeas, quinoa, tofu and seeds on a wooden board",
    tags: ["plant protein", "vegan nutrition", "lentils", "tempeh", "tofu"],
    content: [
      "The protein question is the first thing anyone hears when they mention going plant-based. \"But where do you get your protein?\" The truth is, plants are packed with protein — and many deliver it alongside fiber, antioxidants, and phytonutrients that animal sources simply can't match.",
      "## 1. Lentils — 18g per cup\n\nLentils are a protein powerhouse that also delivers nearly half your daily fiber. They cook in under 30 minutes without soaking, making them one of the most convenient plant proteins available. Red lentils work beautifully in soups and curries, while green and black varieties hold their shape for salads.",
      "## 2. Tempeh — 31g per cup\n\nFermented from whole soybeans, tempeh is a complete protein with all nine essential amino acids. The fermentation process makes it easier to digest and increases nutrient absorption. Slice it thin, marinate it, and pan-fry for a crispy, satisfying protein that rivals any meat.",
      "## 3. Hemp Seeds — 10g per 3 tablespoons\n\nThese tiny seeds are nutritional giants. Hemp seeds provide complete protein plus a perfect ratio of omega-3 to omega-6 fatty acids. Sprinkle them on salads, blend into smoothies, or stir into oatmeal for an effortless protein boost.",
      "## 4. Chickpeas — 15g per cup\n\nFrom hummus to curries to roasted snacks, chickpeas are incredibly versatile. They're also rich in folate, iron, and manganese. A can of chickpeas in the pantry is your secret weapon for any quick, protein-rich meal.",
      "## 5. Quinoa — 8g per cup\n\nTechnically a seed, quinoa is one of the few plant foods that's a complete protein. It cooks like a grain, works in both savory and sweet dishes, and provides a satisfying base for Buddha bowls and grain salads.",
      "## 6. Black Beans — 15g per cup\n\nBlack beans are rich in both protein and anthocyanins — the same antioxidants found in blueberries. They're the foundation of countless Latin American dishes and pair beautifully with rice for a complete amino acid profile.",
      "## 7. Tofu — 20g per cup\n\nTofu is a blank canvas that absorbs whatever flavors you give it. Press it well, marinate it, and bake or pan-fry for a transformation that can satisfy even the most dedicated meat-eater. Silken tofu also works wonderfully in smoothies, desserts, and creamy sauces.",
      "## 8. Nutritional Yeast — 8g per 2 tablespoons\n\nThis deactivated yeast has a savory, cheese-like flavor that makes it invaluable in plant-based cooking. It's also fortified with B12 — a crucial nutrient for anyone on a plant-based diet. Sprinkle it on popcorn, pasta, or blend it into sauces.",
      "## 9. Spirulina — 8g per 2 tablespoons\n\nThis blue-green algae is about 60% protein by weight, making it one of the most protein-dense foods on the planet. Add a teaspoon to your morning smoothie for a nutrient boost you can feel.",
      "## The Bottom Line\n\nMeeting your protein needs on a plant-based diet isn't just possible — it's easy. By incorporating a variety of these protein sources throughout your day, you'll not only meet your goals but benefit from the fiber, antioxidants, and micronutrients that come along for the ride. Your body and the planet will thank you. Next, read our [beginner's guide to going vegan](/blog/beginners-guide-to-going-vegan) or explore [7 superfoods you should eat daily](/blog/superfoods-you-should-eat-daily).",
    ],
  },
  {
    slug: "science-behind-gut-health",
    title: "The Science Behind Gut Health",
    excerpt:
      "How a plant-based diet transforms your microbiome and boosts overall wellness from the inside out.",
    description:
      "The research-backed link between plant-based eating, microbiome diversity and whole-body health — plus practical steps to heal your gut in four weeks.",
    category: "Wellness",
    readTime: "9 min read",
    date: "Apr 3, 2026",
    dateISO: "2026-04-03",
    author: "Dr. James Liu",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Colorful bowl of plant-based foods with leafy greens, fermented vegetables and seeds",
    tags: ["gut health", "microbiome", "fiber", "fermented foods", "wellness"],
    content: [
      "Your gut is home to trillions of microorganisms that influence everything from your mood to your immune system. Recent research has shown that what you eat is the single most powerful lever you have to shape this internal ecosystem — and plant-based diets consistently come out on top.",
      "## The Microbiome: Your Second Brain\n\nThe gut-brain axis is a bidirectional communication highway between your digestive system and your brain. The microorganisms in your gut produce neurotransmitters like serotonin (95% of your body's supply is made in the gut), GABA, and dopamine. When your gut flora is balanced, your mental clarity, mood, and even sleep improve.",
      "## Why Plants Win\n\nResearch from the American Gut Project found that people who eat 30 or more different plants per week have significantly more diverse microbiomes than those who eat fewer than 10. Diversity is the key metric for gut health — the more varied your gut bacteria, the more resilient your immune system and the better your digestion.",
      "## Fiber: The Unsung Hero\n\nPlant foods are the only source of dietary fiber — animal products contain zero. Fiber is what feeds your beneficial gut bacteria through a process called fermentation. When these bacteria break down fiber, they produce short-chain fatty acids (SCFAs) like butyrate, which reduce inflammation, strengthen the gut lining, and even protect against colon cancer.",
      "## Fermented Foods: Living Probiotics\n\nKimchi, sauerkraut, miso, tempeh, and kombucha deliver live beneficial bacteria directly to your gut. Studies show that consuming fermented foods daily for just 10 weeks significantly increases microbial diversity and reduces markers of inflammation throughout the body.",
      "## Practical Steps to Heal Your Gut\n\nStart by adding one new plant to your diet each week. Eat the rainbow — different colored plants provide different types of fiber and polyphenols. Include fermented foods daily. Reduce processed foods, which feed harmful bacteria. And be patient — it takes about 2-4 weeks for your microbiome to begin shifting in response to dietary changes.",
      "## The Bottom Line\n\nYour gut is a garden. Plant-based foods are the seeds, water, and sunshine that help it flourish. By prioritizing fiber-rich whole foods, fermented products, and dietary diversity, you're not just improving digestion — you're boosting immunity, enhancing mood, and laying the foundation for long-term health. For more on fiber-rich eating, see [10 plant proteins that beat meat](/blog/plant-proteins-that-beat-meat) and [the ultimate anti-inflammatory foods guide](/blog/anti-inflammatory-foods-guide).",
    ],
  },
  {
    slug: "beginners-guide-to-going-vegan",
    title: "A Beginner's Guide to Going Vegan",
    excerpt:
      "Everything you need to know about transitioning to a plant-based lifestyle — from pantry staples to meal planning.",
    description:
      "A step-by-step transition plan for new vegans: pantry staples, five must-master meals, nutrient watch-outs and how to handle eating out.",
    category: "Lifestyle",
    readTime: "12 min read",
    date: "Mar 28, 2026",
    dateISO: "2026-03-28",
    author: "Sarah Mitchell",
    image:
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Person preparing a plant-based meal with fresh vegetables on a marble kitchen counter",
    tags: [
      "vegan beginner",
      "plant-based lifestyle",
      "meal planning",
      "vegan pantry",
    ],
    content: [
      "Going vegan doesn't have to be an overnight transformation. In fact, the most successful transitions happen gradually — swapping one meal at a time, discovering new favorites, and building confidence in the kitchen. This guide will walk you through everything you need to get started.",
      "## Start With What You Already Love\n\nLook at the meals you already enjoy and find plant-based versions. Love spaghetti bolognese? Try it with lentils. Enjoy stir-fry? Swap the chicken for tofu or tempeh. Taco night? Seasoned black beans and roasted cauliflower are incredible. You don't have to reinvent your entire diet — just reimagine it.",
      "## Stock Your Pantry\n\nA well-stocked plant-based pantry makes everything easier. Essentials include: canned beans and lentils, rice and pasta, canned tomatoes, coconut milk, nutritional yeast, nuts and seeds, nut butters, soy sauce or tamari, olive oil, and a variety of spices. With these on hand, you can throw together a meal in minutes.",
      "## Master 5 Simple Meals\n\nYou don't need 100 recipes to start. Master five simple meals you genuinely enjoy, and rotate them through the week. A Buddha bowl, a hearty soup, a stir-fry, a pasta dish, and a wrap or taco — that's a full week of dinners. Expand your repertoire over time as you discover what you love.",
      "## Nutrients to Watch\n\nA well-planned plant-based diet provides everything you need, but a few nutrients deserve attention. Vitamin B12 is the one supplement every vegan should take — it's not reliably available from plant foods. Also pay attention to omega-3s (from flax, chia, and walnuts), iron (from lentils, spinach, and fortified foods), and vitamin D (from sunshine or supplements).",
      "## Eating Out and Social Situations\n\nMost restaurants now offer plant-based options, and ethnic cuisines — Indian, Thai, Ethiopian, Mexican, Mediterranean — are naturally rich in vegan dishes. When eating at someone's home, offer to bring a dish. Most people are curious and supportive when you approach the conversation positively.",
      "## Be Kind to Yourself\n\nPerfection isn't the goal — progress is. If you accidentally eat something non-vegan, or have a moment of weakness, don't beat yourself up. Every plant-based meal makes a difference. Focus on adding more plants rather than eliminating things, and the transition will feel natural and sustainable. When you're ready to go deeper, read [10 plant proteins that beat meat](/blog/plant-proteins-that-beat-meat) and [vegan meal prep for busy weekdays](/blog/meal-prep-for-busy-weekdays).",
    ],
  },
  {
    slug: "superfoods-you-should-eat-daily",
    title: "7 Superfoods You Should Eat Daily",
    excerpt:
      "From chia seeds to turmeric — the powerhouse plants that can transform your energy, skin, and immunity.",
    description:
      "The seven plant-based superfoods — chia, turmeric, blueberries, leafy greens, flax, sweet potatoes and walnuts — that actually deliver on the hype.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "Mar 21, 2026",
    dateISO: "2026-03-21",
    author: "Dr. Maya Green",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Assortment of superfoods including chia seeds, turmeric root, blueberries and leafy greens",
    tags: ["superfoods", "nutrition", "antioxidants", "omega-3", "turmeric"],
    content: [
      "The term \"superfood\" gets thrown around a lot, but some foods genuinely earn the title. These seven plant-based powerhouses deliver outsized nutritional benefits per serving — and they're easy to incorporate into meals you already eat.",
      "## 1. Chia Seeds\n\nJust two tablespoons deliver 10g of fiber, 5g of protein, and a hefty dose of omega-3 fatty acids. They absorb 12 times their weight in water, helping you stay hydrated and full. Add them to smoothies, oatmeal, or make overnight chia pudding.",
      "## 2. Turmeric\n\nCurcumin, the active compound in turmeric, is one of nature's most potent anti-inflammatories. Pair it with black pepper (which increases absorption by 2000%) and add it to golden lattes, soups, curries, and scrambles.",
      "## 3. Blueberries\n\nPacked with anthocyanins — antioxidants that protect your brain, heart, and skin. Studies show eating blueberries regularly can improve memory and delay cognitive aging by up to 2.5 years. Fresh or frozen, the benefits are the same.",
      "## 4. Leafy Greens\n\nKale, spinach, Swiss chard, and arugula are loaded with vitamins K, A, C, folate, and iron. They also provide nitrates that support cardiovascular health and exercise performance. Aim for at least 2 cups daily — in smoothies, salads, or sautéed.",
      "## 5. Flaxseed\n\nGround flaxseed is the richest plant source of alpha-linolenic acid (ALA), an essential omega-3 fat. It also contains lignans — compounds with powerful antioxidant properties. One tablespoon daily supports heart health, hormone balance, and digestion.",
      "## 6. Sweet Potatoes\n\nOne medium sweet potato provides over 400% of your daily vitamin A (as beta-carotene), plus fiber, potassium, and complex carbohydrates for sustained energy. Roast them, mash them, or add them to soups and stews.",
      "## 7. Walnuts\n\nShaped like tiny brains for good reason — walnuts are the best nut for brain health. They provide ALA omega-3s, polyphenols, and vitamin E. Just a small handful daily has been linked to improved mood, memory, and cardiovascular markers.",
      "## Making It Practical\n\nYou don't need to eat all seven every day. Aim for 4-5, and rotate naturally. A morning smoothie with chia, blueberries, and spinach knocks out three before 9am. Add turmeric to your lunch, walnuts as a snack, and sweet potato with dinner — done. To stretch these ingredients further, see [vegan meal prep for busy weekdays](/blog/meal-prep-for-busy-weekdays) and [the ultimate anti-inflammatory foods guide](/blog/anti-inflammatory-foods-guide).",
    ],
  },
  {
    slug: "meal-prep-for-busy-weekdays",
    title: "Vegan Meal Prep for Busy Weekdays",
    excerpt:
      "Save time and eat well with these batch-cooking strategies and make-ahead recipes for the whole week.",
    description:
      "A weekend batch-cooking blueprint — mix-and-match building blocks, freezer meals, snack prep and the containers that actually work.",
    category: "Lifestyle",
    readTime: "8 min read",
    date: "Mar 14, 2026",
    dateISO: "2026-03-14",
    author: "Sarah Mitchell",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Row of glass meal-prep containers filled with grains, roasted vegetables and legumes",
    tags: [
      "meal prep",
      "batch cooking",
      "vegan recipes",
      "weeknight dinners",
    ],
    content: [
      "The biggest barrier to eating well isn't knowledge — it's time. When you get home exhausted at 7pm, the last thing you want to do is start cooking from scratch. That's where meal prep comes in. A few hours on Sunday can set you up for a full week of nourishing plant-based meals.",
      "## The Sunday Strategy\n\nBlock out 2-3 hours on Sunday afternoon. Put on a podcast, pour yourself a drink, and batch-cook your way through the week. Cook two grains (rice and quinoa), one large pot of beans or lentils, roast two trays of vegetables, and make one or two sauces or dressings.",
      "## The Mix-and-Match Method\n\nInstead of prepping five identical meals (hello, boredom), prepare building blocks that combine differently each day. Monday: quinoa bowl with roasted veggies and tahini. Tuesday: rice with lentil curry. Wednesday: grain salad with different veggies and peanut dressing. Same ingredients, completely different meals.",
      "## Breakfast on Autopilot\n\nOvernight oats and chia pudding are meal-prep gold — make five jars on Sunday night, and breakfast is handled for the entire week. Vary the toppings: berries and nuts one day, banana and cacao the next, mango and coconut on Wednesday.",
      "## Freezer-Friendly Meals\n\nSoups, chili, curry, and stews freeze beautifully for 2-3 months. When you make a batch, double the recipe and freeze half in portions. On really busy nights, just thaw and reheat. Your future self will thank you.",
      "## Smart Snack Prep\n\nCut vegetables (carrots, celery, peppers, cucumber) and store them in water in the fridge — they stay crisp for days. Make a big batch of hummus. Portion out trail mix into small bags. Energy balls keep for a week in the fridge and are perfect grab-and-go snacks.",
      "## Essential Equipment\n\nGood containers make all the difference. Glass containers with snap-lock lids are ideal — they're microwave-safe, don't stain, and last forever. Get a variety of sizes: large ones for salads and bowls, medium for mains, and small for sauces and snacks. For ingredient inspiration, see [7 superfoods you should eat daily](/blog/superfoods-you-should-eat-daily) and [a beginner's guide to going vegan](/blog/beginners-guide-to-going-vegan).",
    ],
  },
  {
    slug: "anti-inflammatory-foods-guide",
    title: "The Ultimate Anti-Inflammatory Foods Guide",
    excerpt:
      "Learn which foods fight chronic inflammation and how to build an anti-inflammatory plate every day.",
    description:
      "Which foods fuel chronic inflammation, which ones fight it, and exactly how to build an anti-inflammatory plate — with a 7-day challenge to try.",
    category: "Wellness",
    readTime: "10 min read",
    date: "Mar 7, 2026",
    dateISO: "2026-03-07",
    author: "Dr. James Liu",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=800&fit=crop&fm=webp&q=80",
    imageAlt:
      "Plate of anti-inflammatory foods with berries, leafy greens, turmeric, olive oil and nuts",
    tags: [
      "anti-inflammatory",
      "chronic inflammation",
      "plant-based diet",
      "wellness",
    ],
    content: [
      "Chronic inflammation is the silent driver behind heart disease, diabetes, autoimmune conditions, and even depression. Unlike acute inflammation (your body's healthy response to injury), chronic inflammation simmers under the surface for months or years — and diet is one of the most powerful tools to control it.",
      "## Understanding Inflammation\n\nWhen you eat highly processed foods, refined sugars, and industrial seed oils, your body triggers an immune response. Over time, this constant low-grade activation damages tissues, accelerates aging, and increases disease risk. Plant-based whole foods do the opposite — they contain thousands of compounds that actively fight inflammation.",
      "## The Top Anti-Inflammatory Foods\n\nBerries (especially blueberries and strawberries) are rich in anthocyanins. Leafy greens provide antioxidants and vitamin K. Turmeric and ginger are powerful anti-inflammatory spices. Walnuts and flaxseed deliver anti-inflammatory omega-3 fats. Tomatoes provide lycopene. Extra virgin olive oil contains oleocanthal, which works similarly to ibuprofen.",
      "## Foods That Fuel Inflammation\n\nRefined sugar and high-fructose corn syrup trigger inflammatory cytokines. Processed meats contain advanced glycation end products (AGEs). Refined carbohydrates spike blood sugar and insulin. Industrial seed oils (soybean, corn, sunflower) are high in pro-inflammatory omega-6 fats. Excessive alcohol damages the gut lining and promotes inflammation.",
      "## Building an Anti-Inflammatory Plate\n\nFill half your plate with colorful vegetables and leafy greens. Add a quarter plate of whole grains or starchy vegetables. Include a quarter plate of plant protein (beans, lentils, tofu). Dress everything with olive oil and anti-inflammatory spices. Add a side of berries or fruit for dessert.",
      "## The 7-Day Challenge\n\nCommit to one week of anti-inflammatory eating and pay attention to how you feel. Most people report reduced joint pain, better digestion, clearer skin, and more stable energy within just a few days. Keep a simple journal noting your energy, mood, and any symptoms — the results often speak for themselves.",
      "## Beyond Diet\n\nWhile food is foundational, other lifestyle factors matter too. Regular movement, quality sleep, stress management, and time in nature all reduce inflammation. Think of anti-inflammatory eating as one pillar of a broader wellness strategy — the pillar you interact with three times a day. To go deeper, read [the science behind gut health](/blog/science-behind-gut-health) and [7 superfoods you should eat daily](/blog/superfoods-you-should-eat-daily).",
    ],
  },
];

# 📸 Photo Guide — replace the stock photos with your own

**Why this matters:** the #1 reason AdSense said the site "isn't ready" is that
every image is Unsplash stock. Real photos of your own food are the single
strongest signal that a real person makes this site. You don't need a fancy
camera — clear phone photos in good daylight are perfect.

You do **not** have to do all of these at once. Add what you can, run one
command, and the site updates. Add more later and run it again.

---

## How it works (3 steps)

1. Take/choose a photo and save it with the **exact file name** from the tables
   below into the matching folder under `public/images/`.
   - Accepted types: `.jpg`, `.jpeg`, `.png`, `.webp` (`.webp` = smallest files).
   - Example: your Rainbow Buddha Bowl photo →
     `public/images/recipes/rainbow-buddha-bowl.jpg`
2. From the project folder, run:
   ```
   python3 scripts/swap-photos.py
   ```
   It swaps in every photo it finds and lists which ones are still on stock.
3. Rebuild to see them: `npm run build` (or `npm run dev` while editing).

> Prefer not to touch the command line? Just drop the photos in the folders with
> the right names and tell me — I'll wire them in for you.

---

## ⭐ Priority 1 — Recipe photos (do these first)

These are the "I actually cooked this" proof. Photograph the finished dish.
Folder: `public/images/recipes/`

| Save as (file name) | Dish |
|---|---|
| `rainbow-buddha-bowl.jpg` | Rainbow Buddha Bowl |
| `avocado-chickpea-toast.jpg` | Avocado & Chickpea Toast |
| `thai-peanut-noodles.jpg` | Thai Peanut Noodles |
| `mediterranean-stuffed-peppers.jpg` | Mediterranean Stuffed Peppers |
| `mango-coconut-chia-pudding.jpg` | Mango Coconut Chia Pudding |
| `roasted-cauliflower-tacos.jpg` | Roasted Cauliflower Tacos |
| `green-goddess-salad.jpg` | Green Goddess Salad |
| `sweet-potato-black-bean-chili.jpg` | Sweet Potato & Black Bean Chili |
| `berry-acai-smoothie-bowl.jpg` | Berry Acai Smoothie Bowl |

## ⭐ Priority 1 — Juice & smoothie photos

Photograph the finished drink in a glass. Folder: `public/images/juices/`

| Save as (file name) | Drink |
|---|---|
| `green-machine-juice.jpg` | Green Machine Juice |
| `berry-radiance-blend.jpg` | Berry & Açaí Smoothie |
| `golden-turmeric-tonic.jpg` | Golden Turmeric Smoothie |
| `tropical-sunrise-smoothie.jpg` | Tropical Sunrise Smoothie |
| `beet-carrot-ginger-juice.jpg` | Beet, Carrot & Ginger Juice |
| `lavender-moon-milk.jpg` | Lavender Moon Milk |
| `celery-cucumber-cooler.jpg` | Celery & Cucumber Cooler |
| `chocolate-protein-shake.jpg` | Chocolate Peanut Butter Shake |

---

## Priority 2 — Blog cover photos

One photo per article (a related dish, ingredient, or kitchen scene).
Folder: `public/images/blog/`

| Save as (file name) | Article |
|---|---|
| `10-high-fibre-foods-that-support-gut-health.jpg` | 10 High-Fibre Foods That Support Gut Health |
| `beginners-guide-to-going-vegan.jpg` | A Beginner's Guide to Going Vegan |
| `beyond-the-sip-crafting-a-smoothie-that-actually-keeps-you.jpg` | Beyond the Sip: Crafting a Smoothie That Keeps You Full |
| `decoding-your-dinner-plate-a-vegan-s-guide-to-reading-food.jpg` | Decoding Your Dinner Plate: Reading Food Labels |
| `dining-out-as-a-vegan-your-realistic-guide-to-deliciously.jpg` | Dining Out as a Vegan |
| `master-your-week-the-ultimate-guide-to-plant-based-meal-prep.jpg` | Master Your Week: Plant-Based Meal Prep |
| `nourish-your-body-nurture-your-planet-the-environmental.jpg` | The Environmental Case for Plant-Based Meals |
| `one-pot-plant-based-dinners-for-busy-weeknights.jpg` | One-Pot Plant-Based Dinners |
| `sweet-success-your-guide-to-plant-based-baking-swaps.jpg` | Plant-Based Baking Swaps |
| `the-truth-about-vegan-protein-complete-vs-incomplete.jpg` | The Truth About Vegan Protein |
| `tofu-transformations-a-beginner-s-guide-to-cooking-this.jpg` | Tofu Transformations |
| `unlock-the-power-of-plants-your-guide-to-the-best-omega-3.jpg` | The Best Omega-3 Sources |
| `unlock-your-best-health-the-benefits-of-a-whole-food-plant-b.jpg` | Benefits of a Whole-Food Plant-Based Diet |
| `vegan-on-a-budget-eating-well-for-less.jpg` | Vegan on a Budget |
| `what-a-balanced-day-of-vegan-eating-actually-looks-like.jpg` | What a Balanced Day of Vegan Eating Looks Like |

## Priority 2 — Diet-plan photos

A nice spread of the kind of food in each plan. Folder: `public/images/diet-plans/`

| Save as (file name) | Plan |
|---|---|
| `7-day-whole-food-reset.jpg` | 7-Day Whole-Food Reset |
| `high-protein-plant-power.jpg` | High-Protein Plant Power |
| `colorful-whole-foods-plan.jpg` | Colorful Whole-Foods Plan |
| `fibre-and-ferments-plan.jpg` | Fibre & Ferments Plan |
| `balanced-whole-food-plan.jpg` | Balanced Whole-Food Plan |
| `energy-vitality-boost.jpg` | Energy & Vitality Plan |

---

## Priority 3 — Big banner images (I'll wire these in for you)

These are the large photos at the top of pages. The auto-swap script does **not**
handle these — once you've added the files below to `public/images/site/`, tell
me and I'll switch them in the page code (it's a couple of minutes).

| Save as (file name) | Where it appears |
|---|---|
| `home-hero.jpg` | Big homepage banner (wide, ~1600px) |
| `recipes-hero.jpg` | Top of the Recipes page |
| `juices-hero.jpg` | Top of the Juices & Smoothies page |
| `diet-plans-hero.jpg` | Top of the Diet Plans page |
| `about-hero.jpg` | Top of the About page (also reused on Contact) |
| `about-mission.jpg` | Side photo in the About "Food You'll Love" section |

---

## Tips for good phone food photos

- **Shoot in daylight**, near a window. Avoid overhead artificial light.
- **From above** (flat-lay) or **45°** both work well for food.
- Keep the background simple — a plain table, board, or plate.
- Fill the frame with the food; a little steam or a garnish helps.
- Landscape (wide) photos fit the layout best. Bigger than 1000px wide is ideal.
- It's completely fine if they look homemade — that's exactly the point.

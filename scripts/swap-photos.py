#!/usr/bin/env python3
"""
swap-photos.py — wire your own photos into the Veganster site.

HOW IT WORKS
------------
Drop a photo into the matching folder under public/images/, named after the
item's slug (see PHOTO_GUIDE.md for the exact list), then run:

    python3 scripts/swap-photos.py

For every photo that EXISTS, this script rewrites the site to use it instead of
the Unsplash stock URL. It only touches items whose photo is present, so it is
safe to run again and again as you add more photos over time. Nothing is
deleted; if a photo isn't there yet, that item is simply left on stock for now.

Accepted file types: .jpg .jpeg .png .webp   (.webp gives the smallest files)

After it runs, rebuild to see the result:  npm run build   (or  npm run dev)
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public", "images")
EXTS = (".jpg", ".jpeg", ".png", ".webp")

# section folder -> data file that holds `image: "..."` per slug
DATA_FILES = {
    "recipes": "src/content/recipes/index.ts",
    "juices": "src/content/juice-pharmacy/index.ts",
    "diet-plans": "src/content/diet-plans/index.ts",
}

swapped, pending = [], []


def find_photo(section, slug):
    for ext in EXTS:
        p = os.path.join(PUB, section, slug + ext)
        if os.path.exists(p):
            return f"/images/{section}/{slug}{ext}"
    return None


def slugs_in_data(text):
    return re.findall(r'slug:\s*"([^"]+)"', text)


def swap_data_file(section, rel_path):
    full = os.path.join(ROOT, rel_path)
    with open(full, encoding="utf-8") as f:
        text = f.read()
    changed = False
    for slug in slugs_in_data(text):
        local = find_photo(section, slug)
        if not local:
            pending.append(f"{section}/{slug}")
            continue
        # replace the first image: "..." that follows this slug's declaration
        pat = re.compile(
            r'(slug:\s*"' + re.escape(slug) + r'"[\s\S]*?image:\s*")([^"]+)(")'
        )
        new_text, n = pat.subn(lambda m: m.group(1) + local + m.group(3), text, count=1)
        if n and local not in text:
            text = new_text
            changed = True
            swapped.append(f"{section}/{slug}  ->  {local}")
        elif n and f'"{local}"' in text:
            # already swapped previously
            pass
        else:
            text = new_text
            if n:
                changed = True
                swapped.append(f"{section}/{slug}  ->  {local}")
    if changed:
        with open(full, "w", encoding="utf-8") as f:
            f.write(text)


def swap_blog():
    blog_dir = os.path.join(ROOT, "src", "content", "blog")
    for fn in sorted(os.listdir(blog_dir)):
        if not fn.endswith(".md"):
            continue
        slug = fn[:-3]
        local = find_photo("blog", slug)
        if not local:
            pending.append(f"blog/{slug}")
            continue
        full = os.path.join(blog_dir, fn)
        with open(full, encoding="utf-8") as f:
            text = f.read()
        new_text, n = re.subn(
            r'^(coverImage:\s*).*$',
            lambda m: m.group(1) + local,
            text,
            count=1,
            flags=re.MULTILINE,
        )
        if n and new_text != text:
            with open(full, "w", encoding="utf-8") as f:
                f.write(new_text)
            swapped.append(f"blog/{slug}  ->  {local}")


def main():
    for section, rel in DATA_FILES.items():
        swap_data_file(section, rel)
    swap_blog()

    print("\n=== Photos wired in this run ===")
    if swapped:
        for s in swapped:
            print("  ✔ " + s)
    else:
        print("  (none — no matching photos found yet)")

    print(f"\n=== Still on stock, waiting for a photo ({len(pending)}) ===")
    for p in pending:
        print("  … " + p)

    print(
        "\nHero/banner images (homepage, About, section tops) are handled "
        "separately — see PHOTO_GUIDE.md."
    )
    print("Next: run  npm run build  to rebuild the site.\n")


if __name__ == "__main__":
    sys.exit(main())

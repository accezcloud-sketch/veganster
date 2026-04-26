import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  date: string;
  dateDisplay: string;
  author: string;
  coverImage: string;
  coverImageAlt: string;
  coverImageCredit?: string;
  coverImageCreditUrl?: string;
  readTime: string;
  tags: string[];
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function formatDateDisplay(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  const date = toIsoDate(data.date);
  const excerpt = String(data.excerpt ?? "");
  const fallbackReadTime = `${Math.max(
    1,
    Math.round(readingTime(content).minutes),
  )} min read`;

  return {
    slug,
    title: String(data.title ?? ""),
    excerpt,
    description: data.description ? String(data.description) : excerpt,
    category: String(data.category ?? ""),
    date,
    dateDisplay: formatDateDisplay(date),
    author: String(data.author ?? ""),
    coverImage: String(data.coverImage ?? ""),
    coverImageAlt: String(data.coverImageAlt ?? ""),
    coverImageCredit: data.coverImageCredit
      ? String(data.coverImageCredit)
      : undefined,
    coverImageCreditUrl: data.coverImageCreditUrl
      ? String(data.coverImageCreditUrl)
      : undefined,
    readTime: data.readTime ? String(data.readTime) : fallbackReadTime,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filename = `${slug}.md`;
  const fullPath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(fullPath)) return undefined;
  return readPost(filename);
}

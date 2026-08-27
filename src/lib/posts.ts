import fs from "fs";
import path from "path";
import { slugify } from "@/utils";
import { Heading, PostMeta, PostSummary } from "@/types";

const contentDir = path.join(process.cwd(), "src/content");

const readSource = (slug: string) => {
  return fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf8");
}

const withoutCode = (source: string) => {
  return source.replace(/```[\s\S]*?```/g, "");
}

const isPublished = (post: PostMeta) => {
  return !post.draft || process.env.NODE_ENV !== "production";
}

export const getSlugs = () => {
  return fs
    .readdirSync(contentDir)
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.replace(/\.mdx$/, ""));
}

export const getReadingTime = (slug: string) => {
  const words = withoutCode(readSource(slug))
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 200));
}

export const getHeadings = (slug: string): Heading[] => {
  const headings: Heading[] = [];

  for (const line of withoutCode(readSource(slug)).split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;

    const text = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugify(text), text, level: match[1].length as 2 | 3 });
  }

  return headings;
}

export const getPostMeta = async (slug: string): Promise<PostMeta> => {
  const { metadata } = await import(`@/content/${slug}.mdx`);
  return metadata;
}

export const getAllPosts = async (): Promise<PostSummary[]> => {
  const posts = await Promise.all(
    getSlugs().map(async slug => ({
      slug,
      readingTime: getReadingTime(slug),
      ...(await getPostMeta(slug)),
    }))
  );

  return posts
    .filter(isPublished)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPublishedSlugs = async () => {
  return (await getAllPosts()).map(post => post.slug);
}

export const getFeaturedPosts = async (limit = 3): Promise<PostSummary[]> => {
  const posts = await getAllPosts();
  const featured = posts.filter(post => post.featured);

  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

export interface PostGroup {
  key: string;
  label: string;
  posts: PostSummary[];
}

// Newest month first, and posts already arrive newest first from getAllPosts.
export const groupPostsByMonth = (posts: PostSummary[]): PostGroup[] => {
  const groups = new Map<string, PostGroup>();

  for (const post of posts) {
    const key = post.date.slice(0, 7);

    if (!groups.has(key)) {
      groups.set(key, {
        key,
        label: new Date(`${key}-01T00:00:00Z`).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        }),
        posts: [],
      });
    }

    groups.get(key)!.posts.push(post);
  }

  return Array.from(groups.values());
}

import fs from "fs";
import path from "path";
import { slugify } from "@/utils";
import { Heading, PostMeta, PostSummary } from "@/types";

const contentDir = path.join(process.cwd(), "src/content");
const draftsDir = path.join(contentDir, "drafts");

interface SourceRef {
  slug: string;
  file: string;
  inDraftsDir: boolean;
}

// A post is a draft either by living in content/drafts or by carrying
// draft: true in its metadata. Either one keeps it off the site in production.
const listSources = (): SourceRef[] => {
  const mdx = (dir: string, inDraftsDir: boolean) => {
    if (!fs.existsSync(dir)) return [];

    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(entry => entry.isFile() && entry.name.endsWith(".mdx"))
      .map(entry => ({
        slug: entry.name.replace(/\.mdx$/, ""),
        file: path.join(dir, entry.name),
        inDraftsDir,
      }));
  }

  return [...mdx(contentDir, false), ...mdx(draftsDir, true)];
}

const findSource = (slug: string) => listSources().find(source => source.slug === slug);

const withoutCode = (source: string) => {
  return source.replace(/```[\s\S]*?```/g, "");
}

const showDrafts = () => process.env.NODE_ENV !== "production";

export const getSlugs = () => listSources().map(source => source.slug);

export const importPost = async (slug: string) => {
  const source = findSource(slug);
  if (!source) return null;

  return source.inDraftsDir
    ? await import(`@/content/drafts/${slug}.mdx`)
    : await import(`@/content/${slug}.mdx`);
}

export const getReadingTime = (slug: string) => {
  const source = findSource(slug);
  if (!source) return 1;

  const words = withoutCode(fs.readFileSync(source.file, "utf8"))
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 200));
}

export const getHeadings = (slug: string): Heading[] => {
  const source = findSource(slug);
  if (!source) return [];

  const headings: Heading[] = [];

  for (const line of withoutCode(fs.readFileSync(source.file, "utf8")).split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;

    const text = match[2].replace(/[*_`]/g, "").replace(/&lt;/g, "<").trim();
    headings.push({ id: slugify(text), text, level: match[1].length as 2 | 3 });
  }

  return headings;
}

export const getPostMeta = async (slug: string): Promise<PostMeta | null> => {
  const source = findSource(slug);
  if (!source) return null;

  const mod = await importPost(slug);
  const meta: PostMeta = mod.metadata;

  return { ...meta, draft: source.inDraftsDir || !!meta.draft };
}

export const isDraft = async (slug: string) => {
  const meta = await getPostMeta(slug);
  return !!meta?.draft;
}

export const getAllPosts = async (): Promise<PostSummary[]> => {
  const posts = await Promise.all(
    getSlugs().map(async slug => {
      const meta = await getPostMeta(slug);
      return meta && { slug, readingTime: getReadingTime(slug), ...meta };
    })
  );

  return posts
    .filter((post): post is PostSummary => post !== null)
    .filter(post => !post.draft || showDrafts())
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPublishedSlugs = async () => {
  return (await getAllPosts()).map(post => post.slug);
}

export const getFeaturedPosts = async (limit = 3): Promise<PostSummary[]> => {
  const posts = (await getAllPosts()).filter(post => !post.draft);
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

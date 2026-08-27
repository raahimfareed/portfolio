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

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
  { path: "/contact", priority: 0.5 },
  { path: "/credits", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    ...staticRoutes.map(route => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...posts.map(post => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}

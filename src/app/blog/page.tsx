import MainLayout from "@/layouts/MainLayout";
import { getAllPosts, groupPostsByMonth } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";
import { formatDayMonth } from "@/utils";
import type { Metadata } from "next";
import Link from "next/link";

const title = "Blog";
const description = "Notes on backends, APIs, self hosting and whatever else I end up taking apart.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    siteName: site.name,
    locale: site.locale,
    title: `${title} // ${site.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} // ${site.name}`,
    description,
    creator: site.author.twitter,
  },
};

export default async function Blog() {
  const posts = await getAllPosts();
  const groups = groupPostsByMonth(posts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: `${title} // ${site.name}`,
    description,
    url: absoluteUrl("/blog"),
    author: { "@type": "Person", name: site.author.name, url: site.author.url },
    blogPost: posts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      url: absoluteUrl(`/blog/${post.slug}`),
      keywords: post.tags,
    })),
  };

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-24 md:py-32 lg:py-48">
        <div className="flex flex-row justify-center gap-8 xl:gap-16">
          <div className="flex flex-col gap-10 w-full min-w-0 lg:w-[64ch] shrink-0">
            <header className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="opacity-70">{description}</p>
            </header>

            {groups.length === 0
              ? <p className="opacity-70">Nothing published yet.</p>
              : groups.map(group => (
                <section key={group.key} className="flex flex-col gap-1">
                  <h2 className="text-xs uppercase tracking-widest opacity-60 mb-2">{group.label}</h2>
                  <ul className="flex flex-col border-t border-accent">
                    {group.posts.map(post => (
                      <li key={post.slug} className="border-b border-accent">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex flex-row items-baseline gap-4 py-2.5 transition hover:bg-secondary/40 -mx-2 px-2 rounded">
                          <span className="min-w-0 flex-1 truncate group-hover:underline">{post.title}</span>
                          <time
                            dateTime={post.date}
                            className="shrink-0 text-sm tabular-nums opacity-60">
                            {formatDayMonth(post.date)}
                          </time>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
          </div>
          <div className="hidden lg:block w-64 shrink-0" aria-hidden />
        </div>
      </section>
    </MainLayout>
  )
}

import MainLayout from "@/layouts/MainLayout";
import { PostRail } from "@/components/blog/PostRail";
import { getHeadings, getPostMeta, getPublishedSlugs, getReadingTime, importPost } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";
import { formatDate } from "@/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const generateStaticParams = async () => {
  return (await getPublishedSlugs()).map(slug => ({ slug }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  if (!(await getPublishedSlugs()).includes(slug)) return {};

  const meta = await getPostMeta(slug);
  if (!meta) return {};

  const url = absoluteUrl(`/blog/${slug}`);
  const images = meta.cover ? [{ url: absoluteUrl(meta.cover), alt: meta.coverAlt ?? meta.title }] : undefined;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    authors: [{ name: site.author.name, url: site.author.url }],
    alternates: { canonical: `/blog/${slug}` },
    robots: meta.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      locale: site.locale,
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      modifiedTime: meta.updated ?? meta.date,
      authors: [site.author.url],
      tags: meta.tags,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: meta.title,
      description: meta.description,
      creator: site.author.twitter,
      images,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(await getPublishedSlugs()).includes(slug)) notFound();

  const mod = await importPost(slug);
  if (!mod) notFound();

  const { default: Content } = mod;
  const metadata = (await getPostMeta(slug))!;
  const readingTime = getReadingTime(slug);
  const headings = getHeadings(slug);
  const dateLabel = formatDate(metadata.date);
  const url = absoluteUrl(`/blog/${slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date,
    dateModified: metadata.updated ?? metadata.date,
    keywords: metadata.tags,
    wordCount: readingTime * 200,
    image: metadata.cover ? absoluteUrl(metadata.cover) : undefined,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: site.author.name,
      url: site.author.url,
      sameAs: site.author.sameAs,
    },
    publisher: { "@type": "Person", name: site.author.name, url: site.author.url },
  };

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-24 md:py-32 lg:py-48">
        <div className="flex flex-row justify-center gap-8 xl:gap-16">
          <article className="w-full min-w-0 lg:w-[64ch] shrink-0">
            <header id="post-header" className="flex flex-col gap-3 mb-12">
              <Link href="/blog" className="inline-flex flex-row items-center gap-2 text-sm leading-none opacity-70 hover:opacity-100 transition w-fit">
                <ArrowLeftIcon aria-hidden />
                Back to blog
              </Link>
              {!!metadata.draft && (
                <p className="w-fit rounded border border-destructive bg-destructive/10 px-2 py-0.5 text-xs uppercase tracking-wide">
                  Draft
                </p>
              )}
              <h1 className="text-4xl font-bold">{metadata.title}</h1>
              {!!metadata.description && (
                <p className="text-xl opacity-70">{metadata.description}</p>
              )}
              <p className="text-sm opacity-70">
                <time dateTime={metadata.date}>{dateLabel}</time> &middot; {readingTime} min read
              </p>
              {!!metadata.tags?.length && (
                <ul className="flex flex-row flex-wrap gap-2">
                  {metadata.tags.map(tag => (
                    <li key={tag} className="rounded bg-secondary text-secondary-foreground shadow px-2 py-0.5 text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </header>

            <div className="prose">
              <Content />
            </div>
          </article>

          <PostRail
            title={metadata.title}
            dateLabel={dateLabel}
            readingTime={readingTime}
            headings={headings}
          />
        </div>
      </section>
    </MainLayout>
  )
}

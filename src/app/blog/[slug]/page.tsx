import MainLayout from "@/layouts/MainLayout";
import { PostRail } from "@/components/blog/PostRail";
import { getHeadings, getReadingTime, getSlugs, getPostMeta } from "@/lib/posts";
import { formatDate } from "@/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const generateStaticParams = async () => {
  return getSlugs().map(slug => ({ slug }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) return {};

  const meta = await getPostMeta(slug);
  return {
    title: `${meta.title} // Raahim Fareed`,
    description: meta.description,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();

  const { default: Content, metadata } = await import(`@/content/${slug}.mdx`);
  const readingTime = getReadingTime(slug);
  const headings = getHeadings(slug);
  const dateLabel = formatDate(metadata.date);

  return (
    <MainLayout>
      <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-24 md:py-32">
        <div className="flex flex-row justify-center gap-8 xl:gap-16">
          <article className="w-full min-w-0 lg:w-[64ch] shrink-0">
            <header id="post-header" className="flex flex-col gap-3 mb-12">
              <Link href="/blog" className="inline-flex flex-row items-center gap-2 text-sm leading-none opacity-70 hover:opacity-100 transition w-fit">
                <ArrowLeftIcon aria-hidden />
                Back to blog
              </Link>
              <h1 className="text-4xl font-bold">{metadata.title}</h1>
              {!!metadata.description && (
                <p className="text-xl opacity-70">{metadata.description}</p>
              )}
              <p className="text-sm opacity-70">
                <time dateTime={metadata.date}>{dateLabel}</time> &middot; {readingTime} min read
              </p>
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

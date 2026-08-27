import MainLayout from "@/layouts/MainLayout";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog // Raahim Fareed",
  description: "Writing on backends, APIs and homelabbing.",
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-24 md:py-32">
        <div className="flex flex-row justify-center gap-8 xl:gap-16">
          <div className="flex flex-col gap-8 w-full min-w-0 lg:w-[64ch] shrink-0">
            <h1 className="text-4xl font-bold">Blog</h1>
            {posts.length === 0
              ? <p className="opacity-70">Nothing published yet.</p>
              : posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-1">
                  <h2 className="text-2xl group-hover:underline">{post.title}</h2>
                  <p className="text-sm opacity-70">
                    <time dateTime={post.date}>{formatDate(post.date)}</time> &middot; {post.readingTime} min read
                  </p>
                  {!!post.description && <p className="opacity-80">{post.description}</p>}
                </Link>
              ))}
          </div>
          <div className="hidden lg:block w-64 shrink-0" aria-hidden />
        </div>
      </section>
    </MainLayout>
  )
}

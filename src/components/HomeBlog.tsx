import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { getFeaturedPosts } from "@/lib/posts"
import { formatDate } from "@/utils"

export const HomeBlog = async () => {
  const posts = await getFeaturedPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className='relative z-1 py-32 bg-secondary/40'>
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex flex-row gap-8 items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-6xl">Writing</h2>
          <Link href="/blog" className="inline-flex flex-row items-center gap-2 leading-none text-foreground hover:underline">
            All Posts
            <ArrowRightIcon className="translate-y-[2px]" aria-hidden />
          </Link>
        </div>
        <ul className="flex flex-col border-t border-accent">
          {posts.map(post => (
            <li key={post.slug} className="border-b border-accent">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-4 -mx-2 px-2 rounded transition hover:bg-background/60">
                <div className="flex flex-row items-baseline justify-between gap-4">
                  <span className="text-xl group-hover:underline">{post.title}</span>
                  <time dateTime={post.date} className="shrink-0 text-sm tabular-nums opacity-60">
                    {formatDate(post.date)}
                  </time>
                </div>
                {!!post.description && <p className="opacity-70">{post.description}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

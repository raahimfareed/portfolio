import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { HomeProjectCards } from "./HomeProjectCards"

export const HomeProjects = () => {
  return (
    <section className='relative z-1 py-32 bg-secondary/80'>
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex flex-row gap-8 items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-6xl">Featured Projects</h2>
          <Link href="/projects" className="inline-flex flex-row items-center gap-2 leading-none text-foreground hover:underline">
            Projects Archive
            <ArrowRightIcon className="translate-y-[2px]" aria-hidden />
          </Link>
        </div>
        <HomeProjectCards />
      </div>
    </section>
  )
}


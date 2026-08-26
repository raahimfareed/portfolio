import { ArrowRightIcon } from "@radix-ui/react-icons"
import { SkillSection } from "./SkillsSection"
import Link from "next/link"

export const HomeAbout = () => {
  return (
    <section className='relative z-1 py-32 bg-secondary/40'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-row gap-8 items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-6xl">Skills</h2>
          <Link href="/about" className="inline-flex flex-row items-center gap-2 leading-none text-foreground hover:underline">
            More About Me
            <ArrowRightIcon className="translate-y-[2px]" aria-hidden />
          </Link>
        </div>
        <SkillSection />
      </div>
    </section>
  )
}


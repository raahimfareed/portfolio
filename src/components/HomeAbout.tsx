import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import TechPill from "./TechPill"

export const HomeAbout = () => {
  return (
    <section className='relative z-1 py-32 bg-secondary/40'>
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex flex-row gap-8 items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-6xl">Hey There</h2>
          <Link href="/about" className="inline-flex flex-row items-center gap-2 leading-none text-foreground hover:underline">
            More About Me
            <ArrowRightIcon className="translate-y-[2px]" aria-hidden />
          </Link>
        </div>
        <div className="lg:text-lg space-y-3">
          <p>I&apos;m Raahim. I&apos;m a software engineer who likes to work on problems that go unnoticed to the general pair of eyes, i.e. backends. I work in several different industries, health, ecommerce, education, telecom, you name it.</p>
          <p>I&apos;m the founder of <Link href="https://neoflux.pk" target="_blank"><strong>NeoFlux</strong></Link> and currently working as a Principal Software Engineer at <Link  target="_blank" href="https://nayatel.com"><strong>Nayatel</strong></Link>.</p>
          <p>I work in <TechPill type="archlinux" className="!bg-background" /> and my favorite programming tool is <TechPill type="laravel" className="!bg-background" />&nbsp;. I&apos;m also a big geek for homelabbing and self hosting. I host my own photos, ad blocker, notes, home assistant, everything that I can host (and my OptiPlex 9010 SFF can handle).</p>
          <p>Currently in the process of getting <Link target="_blank" className="underline decoration-dotted" href="https://www.pmi.org/certifications/certified-associate-capm">CAPM&reg;</Link> certified.</p>
        </div>
      </div>
    </section>
  )
}


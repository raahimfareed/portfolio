import Link from "next/link";

export function HomeHero() {
  return (
    <section className='w-full max-w-7xl mx-auto h-[95vh] relative z-1 flex items-center overflow-hidden'>
      <div className="w-full px-2 md:px-8 max-w-xl">
        <h3 className="text-primary uppercase leading-4 text-light tracking-widest mb-3">Software Engineer</h3>
        <h1 className="relative z-10 text-3xl md:text-5xl lg:text-7xl font-bold flex items-center mb-12">Raahim Fareed</h1>
        <p className="text-foreground text-lg">I like the problems underneath the surface. I also self-host most of the things I use.</p>
        <div className="flex gap-3 relative z-20 mt-12">
          <Link href="/about" className="border inline rounded shadow border-primary py-1 px-4 hover:opacity-70 bg-primary text-primary-foreground transition">About Me</Link>
          <Link href="/contact" className="border inline rounded shadow border-secondary py-1 px-4 hover:bg-secondary hover:text-secondary-foreground transition">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}

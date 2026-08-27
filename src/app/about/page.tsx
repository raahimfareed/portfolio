import ContactSidebarLink from "@/components/ContactSidebarLink"
import TechPill from "@/components/TechPill"
import { LinkPreview } from "@/components/ui/link-preview"
import MainLayout from "@/layouts/MainLayout"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import myPicture from "@/images/me.webp";
import linkedin from "@/images/icons/linkedin.svg"
import Image from "next/image"
import type { Metadata } from "next"
import { Uiiai } from "@/components/Uiiai"
import projects from "@/data/projects";
import { Project } from "@/types"

export const metadata: Metadata = {
  title: "About Me // Raahim Fareed",
};

const About = () => {
  const featuredProjects: Project[] = [
    projects.FuelOne,
    projects.Khatt,
    projects.Jama,
    projects.Pine
  ];
  return (
    <MainLayout>
      <section className='w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-16'>
        <div className="pt-24 lg:py-48 h-full lg:sticky left-0 top-0 lg:w-64 flex flex-col gap-3">
          <div className="overflow-hidden rounded-full aspect-square mb-3 mx-auto w-64 lg:w-full">
            <Image
              src={myPicture}
              quality={50}
              className="w-full"
              alt="Picture of Raahim Fareed"
              placeholder="blur"
              priority />
          </div>
          <div className="flex flex-row lg:flex-col flex-wrap gap-3">
            <ContactSidebarLink href="https://linkedin.com/in/raahimfareed">
              <Image src={linkedin} alt="Linkedin" className="w-4 h-4" />
              @raahimfareed
            </ContactSidebarLink>
            <ContactSidebarLink href="https://github.com/raahimfareed">
              <FaGithub className="w-4" />
              @raahimfareed
            </ContactSidebarLink>
            <ContactSidebarLink href="mailto:raahim@neoflux.pk">
              <EnvelopeIcon className="w-4" />
              raahim@neoflux.pk
            </ContactSidebarLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-48 pt-0 lg:pt-48 overflow-y-auto overflow-x-hidden w-full lg:w-[64ch]">
          <h1 className="text-4xl font-bold">About</h1>
          <h2 className="text-2xl">Who Am I?</h2>
          <div>
            My name is <LinkPreview url="https://www.raahimfareed.com" className="font-bold text-foreground">Raahim Fareed</LinkPreview> - I&apos;m a software engineer who likes to work behind the scenes. Most of my work and interests involve backends and APIs, you know, the boring stuff. Along my journey, I&apos;ve had a diverse experience across different industries, including but not limited to telecom, education, ecommerce, health and oil, where I&apos;ve been able to design, implement and scale systems that drive better user experiences. I&apos;m leading at <LinkPreview url="https://nayatel.com/" className="font-bold text-foreground">Nayatel</LinkPreview> as a Principal Software Engineer.
          </div>
          <p>Oh, did I mention? I&apos;m the founder of <LinkPreview url="https://www.linkedin.com/company/neo-flux/" className="font-bold text-foreground">NeoFlux</LinkPreview>.</p>
          <h2 className="text-2xl">Hobbies And Interests</h2>
          <div>These days, I&apos;m a massive geek for homelabbing and selfhosting. I host my own immich for images, Navidrome for music, Jellyfin for movies and shows, Trilium for notes, home assistant for smart home automation. I try to host everything that I can host (and my OptiPlex 9010 SFF can handle)</div>
          <div>In the past, I&apos;ve had the chance to lead teams like the <LinkPreview className="font-bold text-foreground" url="https://developers.google.com/community/gdsc">Google Developer Student Club</LinkPreview>, organize workshops and help others navigate the ever evolving tech landscape. I used to also be into competitive programming, where I honed critical thinking and problem solving skills. From competitions like <LinkPreview url="https://icpc.global" className="font-bold text-foreground">ICPC</LinkPreview> to websites like <LinkPreview url="https://leetcode.com" className="font-bold text-foreground">Leetcode</LinkPreview> and <LinkPreview url="https://codeforces.com" className="font-bold text-foreground">Codeforces</LinkPreview> helped me grow exponentially.</div>
          <div>As for my interests, I work in <TechPill type="archlinux" />&nbsp;, my favorite programming framework is <TechPill type="laravel" />&nbsp;, I love speed cubing and basketball, and I love exploring different technologies and ideas. Puzzles and problem solving scratches my itch. I&apos;m also in the process of getting <Link target="_blank" className="underline decoration-dotted" href="https://www.pmi.org/certifications/certified-associate-capm">CAPM&reg;</Link> certified.</div>
          <div className="flex gap-4 items-center mb-8">
            <Link href="/projects" className="font-bold shadow rounded border border-primary py-1 px-4 bg-primary hover:opacity-70 text-primary-foreground transition">View Projects</Link>
            <Link href="/contact" className="font-bold shadow rounded border border-secondary py-1 px-4 hover:bg-secondary hover:text-secondary-foreground transition">Contact Me</Link>
          </div>

          <h1 className="text-4xl font-bold">Currently Building</h1>
          <div className="flex flex-col gap-3 mb-8">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded border border-border p-4 flex flex-col gap-1 hover:bg-muted transition"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{project.name}</span>
                  {!project.url && (
                    <span className="text-xs border border-border rounded px-2 py-0.5 text-muted-foreground">Coming Soon</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:opacity-70 transition w-fit"
                  >
                    {project.url.replace("https://", "")} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold">Skills</h1>
          <section className="w-full lg:w-[64ch] flex flex-col gap-4 mb-8">
            <h2 className="text-2xl">Languages</h2>
            <div className="flex gap-3 flex-wrap w-full">
              <TechPill type="html" />
              <TechPill type="css" />
              <TechPill type="javascript" />
              <TechPill type="typescript" />
              <TechPill type="php" />
              <TechPill type="python" />
              <TechPill type="bash" />
              <TechPill type="kotlin" />
            </div>
            <h2 className="text-2xl">Frameworks and Libraries</h2>
            <div className="flex gap-3 flex-wrap w-full">
              <TechPill type="laravel" />
              <TechPill type="react" />
              <TechPill type="tailwindcss" />
              <TechPill type="django" />
              <TechPill type="flask" />
              <TechPill type="postcss" />
              <TechPill type="unity" />
              <TechPill type="pycord" />
              <TechPill type="express" />
              <TechPill type="sass" />
              <TechPill type="arduino" />
              <TechPill type="jetpack-compose" />
              <TechPill type="jquery" />
              <TechPill type="Pine" />
            </div>
            <h2 className="text-2xl">Tools and Technologies</h2>
            <div className="flex gap-3 flex-wrap w-full">
              <TechPill type="git" />
              <TechPill type="mysql" />
              <TechPill type="postgresql" />
              <TechPill type="docker" />
              <TechPill type="postman" />
              <TechPill type="jetbrains" />
              <TechPill type="figma" />
              <TechPill type="jira" />
              <TechPill type="neovim" />
              <TechPill type="vscode" />
            </div>
            <h2 className="text-2xl">Soft Skills</h2>
            <div className="flex gap-3 flex-wrap w-full">
              <TechPill type="Adaptability" />
              <TechPill type="Critical Thinking" />
              <TechPill type="Teamwork" />
              <TechPill type="Logical Reasoning" />
              <TechPill type="Multitasking" />
              <TechPill type="Pressure Handling" />
              <TechPill type="Problem Solving" />
              <TechPill type="Team Leading" />
              <TechPill type="Project Management" />
            </div>
          </section>
          <h1 className="text-4xl font-bold underline"><Link href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Do You Meme?</Link></h1>
          <Uiiai />
        </div>
      </section>
    </MainLayout>
  )
}

export default About

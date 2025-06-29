import ContactSidebarLink from "@/components/ContactSidebarLink"
import TechPill from "@/components/TechPill"
import { LinkPreview } from "@/components/ui/link-preview"
import MainLayout from "@/layouts/MainLayout"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import myPicture from "@/images/me.jpg";
import linkedin from "@/images/icons/linkedin.svg"
import Image from "next/image"
import type { Metadata } from "next"
import { Uiiai } from "@/components/Uiiai"

export const metadata: Metadata = {
  title: "About Me // Raahim Fareed",
};

const About = () => {
  return (
    <MainLayout>
      <section className='px-8 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-16'>
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
            <ContactSidebarLink href="mailto:raahim@raahimfareed.com">
              <EnvelopeIcon className="w-4" />
              raahim@raahimfareed.com
            </ContactSidebarLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-48 pt-0 lg:pt-48 overflow-y-auto overflow-x-hidden w-full lg:w-[64ch]">
          <h1 className="text-4xl font-bold">About</h1>
          <h2 className="text-2xl">Who Am I?</h2>
          <div>
            My name is <LinkPreview url="https://www.raahimfareed.com" className="font-bold text-foreground">Raahim Fareed</LinkPreview> - An ambitious software engineer with knack of solving real world problems through scalable solutions. I enjoy backend and API development. Along my journey of software engineering, I&apos;ve had a diverse experience of different industries, including but not limited to education, ecommerce, health and oil industries where I&apos;ve been able to design, implement and scale systems that drive better user experiences. I&apos;m currently working as a software engineer at <LinkPreview url="https://nayatel.com/" className="font-bold text-foreground">Nayatel</LinkPreview> while leading <LinkPreview url="https://www.linkedin.com/company/neo-flux/" className="font-bold text-foreground">NeoFlux</LinkPreview> as its CEO.
          </div>
          <h2 className="text-2xl">Hobbies And Interests</h2>
          <div>Beyond coding, I&apos;ve had the chance to lead teams like the <LinkPreview className="font-bold text-foreground" url="https://developers.google.com/community/gdsc">Google Developer Student Club</LinkPreview>, organize workshops and help others navigate the ever evolving tech landscape. One of my passions lies in competitive programming, where I&apos;ve honed critical thinking and problem solving skills. From competitions like <LinkPreview url="https://icpc.global" className="font-bold text-foreground">ICPC</LinkPreview> to websites like <LinkPreview url="https://leetcode.com" className="font-bold text-foreground">Leetcode</LinkPreview> and <LinkPreview url="https://codeforces.com" className="font-bold text-foreground">Codeforces</LinkPreview> have helped me grow exponentially.</div>
          <div>As for my interests, I work in <TechPill type="archlinux" />, I love speed cubing and basketball, and I love exploring different technologies and ideas. Puzzle and problem solving scratches my itch.</div>
          <div className="flex gap-4 items-center mb-8">
            <Link href="/projects" className="font-bold shadow rounded border border-primary py-1 px-4 bg-primary hover:opacity-70 text-primary-foreground transition">View Projects</Link>
            <Link href="/contact" className="font-bold shadow rounded border border-secondary py-1 px-4 hover:bg-secondary hover:text-secondary-foreground transition">Contact Me</Link>
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


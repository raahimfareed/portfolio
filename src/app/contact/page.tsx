import ContactSidebarLink from "@/components/ContactSidebarLink"
import { FaGithub } from "react-icons/fa";
import MainLayout from "@/layouts/MainLayout"
import { BookOpenIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import linkedin from "@/images/icons/linkedin.svg"
import instagram from "@/images/icons/instagram.png"
import Image from "next/image";

const Contact = () => {
  return (
    <MainLayout>
      <section className='px-8 xl:px-16 flex flex-col lg:flex-row gap-8 xl:gap-16 lg:py-0 pb-24'>
        <div className="pt-24 lg:py-48 h-full lg:sticky left-0 top-0 w-64 text-foreground flex flex-col gap-4">
          <h1 className="text-4xl lg:text-2xl font-bold">
            My Socials
          </h1>
          <ContactSidebarLink href="https://linkedin.com/in/raahimfareed">
            <Image src={linkedin} alt="Linkedin" className="w-4 h-4" />
            @raahimfareed
          </ContactSidebarLink>
          <ContactSidebarLink href="https://github.com/raahimfareed">
            <FaGithub className="w-4" />
            @raahimfareed
          </ContactSidebarLink>
          <ContactSidebarLink href="https://instagram.com/raahimwho">
            <Image src={instagram} alt="Instagram" className="w-4" />
            @raahimwho
          </ContactSidebarLink>
          <ContactSidebarLink href="mailto:raahimfareed@proton.me">
            <EnvelopeIcon className="w-4" />
            raahimfareed@proton.me
          </ContactSidebarLink>
          <ContactSidebarLink href="mailto:raahimfareed@proton.me">
            <BookOpenIcon className="w-4" />
            Raahim&apos;s Blog
          </ContactSidebarLink>
        </div>
        <div className="flex flex-col gap-4 lg:py-48 overflow-y-auto overflow-x-hidden w-full lg:w-[64ch]">
          <h1 className="text-4xl font-bold">Get In Contact</h1>
          <div className="flex flex-col gap-2">
            <form className="rounded-xl p-8 bg-secondary text-secondary-foreground">
              <div className="mb-3">
                <Label>Name</Label>
                <Input className="border-background bg-background text-foreground" required />
              </div>
              <div className="mb-3">
                <Label>Email</Label>
                <Input className="border-background bg-background text-foreground" required />
              </div>
              <div className="mb-3">
                <Label>Subject</Label>
                <Input className="border-background bg-background text-foreground" required />
              </div>
              <div className="mb-3">
                <Label>Message</Label>
                <Textarea className="border-background bg-background text-foreground" />
              </div>
              <button className="rounded-lg border-2 border-accent py-1 px-4 hover:bg-accent hover:text-accent-foreground transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact

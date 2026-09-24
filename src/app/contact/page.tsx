import ContactSidebarLink from "@/components/ContactSidebarLink"
import { SiGit } from "react-icons/si";
import MainLayout from "@/layouts/MainLayout"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { FaLinkedin, FaInstagram, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <MainLayout>
      <section className='px-8 xl:px-16 flex flex-col lg:flex-row gap-8 xl:gap-16 lg:py-0 pb-24 min-h-screen items-center justify-center'>
        <div className="flex flex-col gap-4 lg:py-48 overflow-y-auto pr-2 w-full lg:w-[64ch]">
          <h1 className="text-4xl font-bold">Get In Contact</h1>
          <ContactSidebarLink href="https://linkedin.com/in/raahimfareed">
            <FaLinkedin className="w-4 text-blue-600" />
            {/* <Image src={linkedin} alt="Linkedin" className="w-4 h-4" /> */}
            @raahimfareed
          </ContactSidebarLink>
          <ContactSidebarLink href="https://git.raahimfareed.com/raahim">
            <SiGit className="w-4 text-orange-600" />
            @raahim
          </ContactSidebarLink>
          <ContactSidebarLink href="https://x.com/@raahimfareed">
            <FaXTwitter className="w-4" />
            @raahimfareed
          </ContactSidebarLink>
          <ContactSidebarLink href="https://www.instagram.com/raahimfareed">
            <FaInstagram className="w-4 text-pink-600" />
            @raahimfareed
          </ContactSidebarLink>
          <ContactSidebarLink href="https://www.reddit.com/user/SirOonga/">
            <FaReddit className="w-4 text-orange-500" />
            u/SirOonga
          </ContactSidebarLink>
          <ContactSidebarLink href="mailto:raahim@neoflux.pk">
            <EnvelopeIcon className="w-4" />
            raahim@neoflux.pk
          </ContactSidebarLink>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact

import ContactSidebarLink from "@/components/ContactSidebarLink"
import { FaGithub } from "react-icons/fa";
import MainLayout from "@/layouts/MainLayout"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import linkedin from "@/images/icons/linkedin.svg"
import Image from "next/image";

const Contact = () => {
  return (
    <MainLayout>
      <section className='px-8 xl:px-16 flex flex-col lg:flex-row gap-8 xl:gap-16 lg:py-0 pb-24 min-h-screen items-center justify-center'>
        <div className="flex flex-col gap-4 lg:py-48 overflow-y-auto w-full lg:w-[64ch]">
          <h1 className="text-4xl font-bold">Get In Contact</h1>
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
      </section>
    </MainLayout>
  )
}

export default Contact

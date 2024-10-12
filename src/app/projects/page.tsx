import ProjectSidebarLink from "@/components/ProjectSidebarLink"
import TechPill from "@/components/TechPill";
import { LinkPreview } from "@/components/ui/link-preview";
import MainLayout from "@/layouts/MainLayout"
import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import yacheezIndexImage from "@/images/yacheez/index.png";
import skymapIndexImage from "@/images/skymap/main.png";
import pineIndexImage from "@/images/pine/index.png";
import portfolioIndexImage from "@/images/portfolio/index.png";
import ProjectComponent from "@/components/ProjectComponent";

const Projects = () => {
  return (
    <MainLayout>
      <section className='px-8 lg:px-16 flex gap-8 xl:gap-16'>
        <div className="py-24 md:py-32 lg:py-48 h-full sticky left-0 top-0 w-32 xl:w-64 text-foreground md:flex flex-col gap-4 hidden">
          <ProjectSidebarLink>Portfolio</ProjectSidebarLink>
          <ProjectSidebarLink>SkyMap</ProjectSidebarLink>
          <ProjectSidebarLink>YaCheez</ProjectSidebarLink>
        </div>
        <div className="flex flex-col gap-4 py-24 md:py-32 lg:py-48 overflow-y-auto overflow-x-hidden w-[64ch]">
          <h1 className="text-4xl font-bold">Projects</h1>

          <ProjectComponent
            name="Portfolio"
            url="https://www.raahimfareed.com"
            description="My personal portfolio. It has all the information about me, my projects and how to contact me. It's built with a custom theme engine where the provided themes have been curated by me. The portfolio leverages shadcn and aceternityui for some components as well as devicons for the tasty development badges. The backend of the site is in development as of now, for functions such as the blog, dynamic project management and dynamic resume link"
            image={portfolioIndexImage}
            imageWidth={1280}
            imageHeight={720}
            imageStyle={{ width: "100%", height: "auto" }}
            techStack={[
              "nextjs",
              "tailwindcss",
              "typescript",
              "vercel",
              "prisma",
              "postgresql",
              "html",
              "css",
            ]}
          />
          <ProjectComponent
            name="Pine: A Minimal PHP Framework"
            url="https://github.com/raahimfareed/pine"
            description="Pine a minimal and open source PHP framework. It is inspired by frameworks like flask and express. At the moment it is in development. Currently, it supports routing, variable interpolation from php to leaf templates, controllers and very little exception handling."
            image={pineIndexImage}
            imageWidth={1280}
            imageHeight={720}
            imageStyle={{ width: "100%", height: "auto" }}
            techStack={[
              "php",
              "git",
              "html",
              "css",
            ]}
          />
          <ProjectComponent
            name="SkyMap"
            description="SkyMap is a planetarium application which allows users to view details about the stars and the celestial objects in Augmented Reality. It was made as a part of the bachelor's final year thesis. Celestial data used in the application was collected from NASA, Hipparcos and Institute of Space and Technology Pakistan"
            image={skymapIndexImage}
            imageWidth={720}
            imageHeight={1280}
            imageStyle={{ width: "auto", height: "100%" }}
            techStack={[
              "csharp",
              "unity",
              "figma",
            ]}
          />
          <ProjectComponent
            name="YaCheez"
            url="https://yacheez.com"
            description="YaCheez is an Ecommerce website made with user accessibility and comfort in mind. It offers the latest and greatest features such as Buying products, online payments, order tracking and a fully fledged admin dashboard where all analytics and site management can be done."
            image={yacheezIndexImage}
            imageWidth={1280}
            imageHeight={720}
            imageStyle={{ width: "100%", height: "auto" }}
            techStack={[
              "html",
              "css",
              "javascript",
              "tailwindcss",
              "alpinejs",
              "php",
              "laravel",
              "livewire",
              "docker",
              "git",
            ]}
          />
        </div>
      </section>
    </MainLayout>
  )
}

export default Projects;

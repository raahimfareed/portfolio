import ProjectSidebarLink from "@/components/ProjectSidebarLink"
import TechPill from "@/components/TechPill";
import { LinkPreview } from "@/components/ui/link-preview";
import MainLayout from "@/layouts/MainLayout"
import { LinkIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <MainLayout>
      <section className='px-8 lg:px-16 flex gap-8 xl:gap-16'>
        <div className="py-24 md:py-32 lg:py-48 h-full sticky left-0 top-0 w-32 xl:w-64 text-foreground md:flex flex-col gap-4 hidden">
          <ProjectSidebarLink>YaCheez</ProjectSidebarLink>
        </div>
        <div className="flex flex-col gap-4 py-24 md:py-32 lg:py-48 overflow-y-auto overflow-x-hidden w-[64ch]">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">
              <LinkPreview url="https://yacheez.com" className="text-foreground inline-flex items-center gap-3">
                YaCheez <LinkIcon className="w-4" />
              </LinkPreview>
            </h2>
            <img src="https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/falltree.jpg" alt="Project Name" />
            <div className="flex items-center flex-wrap gap-3">
              <strong className="mr-1">Tech Stack:</strong>
              <TechPill type="laravel" />
              <TechPill type="alpinejs" />
              <TechPill type="tailwindcss" />
              <TechPill type="docker" />
              <TechPill type="git" />
              <TechPill type="livewire" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam mollitia quae sit omnis, perspiciatis dolores ad hic perferendis iusto eveniet delectus magni, fuga deleniti fugiat dolore consequatur quasi! Nulla molestiae perferendis excepturi, illum harum nobis sapiente suscipit aliquid cupiditate itaque animi eum soluta ipsam voluptatibus porro ut sequi corporis!
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Projects;

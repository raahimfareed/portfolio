import { LinkPreview } from "@/components/ui/link-preview"
import MainLayout from "@/layouts/MainLayout"

const Credits = () => {
  return (
    <MainLayout>
      <section className='py-24 px-8 lg:p-32 min-h-screen w-full lg:w-[64ch]'>
        <h1 className="text-4xl font-bold">Credits</h1>
        <p>Instagram and Linkedin Icon has been taken from <LinkPreview url="https://icons8.com" className="font-bold text-foreground">Icons8</LinkPreview>. Most development related icons such as language and technology icons have been taken from <LinkPreview url="https://devicon.dev" className="font-bold text-foreground">DevIcons</LinkPreview>. Other icons have been taken from <LinkPreview url="https://react-icons.github.io/react-icons/" className="font-bold text-foreground">React Icons</LinkPreview>, <LinkPreview url="https://heroicons.com" className="font-bold text-foreground">Heroicons</LinkPreview> and <LinkPreview url="https://www.radix-ui.com/icons" className="font-bold text-foreground">Radix UI</LinkPreview>.</p>
      </section>
    </MainLayout>
  )
}

export default Credits

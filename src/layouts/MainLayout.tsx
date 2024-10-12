import Footer from "@/components/Footer"
import UserNav from "@/components/UserNav"
import { BackgroundBeams } from "@/components/ui/background-beams"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Was too heavy for my site, was making it feel sluggish */}
      {/* <BackgroundBeams /> */}
      <main>
        <UserNav />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default MainLayout

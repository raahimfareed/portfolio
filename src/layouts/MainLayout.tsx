import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import UserNav from "@/components/UserNav"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Was too heavy for my site, was making it feel sluggish */}
      {/* <BackgroundBeams /> */}
      <main>
        <UserNav />
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
        <Footer />
        <Toaster />
      </main>
    </>
  )
}

export default MainLayout

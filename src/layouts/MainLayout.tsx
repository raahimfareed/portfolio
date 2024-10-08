"use client";
import Footer from "@/components/Footer"
import SideNav from "@/components/SideNav"
import TransparentNav from "@/components/TransparentNav"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState } from "react"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <BackgroundBeams />
      <main>
        <TransparentNav active={active} setActive={setActive} />
        {children}
        <SideNav active={active} />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout

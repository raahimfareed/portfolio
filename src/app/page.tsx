import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { HomeAbout } from "@/components/HomeAbout";

export const metadata: Metadata = {
  title: "Breathing Life into Tech // Raahim Fareed",
};

export default function Home() {
  return (
    <MainLayout>
      <HomeHero />    
      <HomeAbout />
    </MainLayout>
  );
}

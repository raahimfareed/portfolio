import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import styles from "./index.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breathing Life into Tech // Raahim Fareed",
};

export default function Home() {
  return (
    <MainLayout>
      <section className='w-screen h-screen relative z-1 flex items-center justify-center overflow-hidden'>
        <div className="w-full px-2 md:px-8">
          <h1 className={"relative z-10 text-7xl leading-11 sm:text-[6.5rem] md:text-[10rem] lg:text-[25vh] xl:text-[33vh] sm:leading-[5rem] md:leading-[8rem] lg:leading-[20vh] xl:leading-[25vh] font-bold flex items-center mb-3 " + styles.heading}>Raahim Fareed</h1>
          <div className="flex gap-3 md:pl-2 lg:pl-4 relative z-20">
            <Link href="/about" className="inline rounded-lg border-2 border-primary py-1 px-4 hover:opacity-70 bg-primary text-primary-foreground transition-opacity">About Me</Link>
            <Link href="/contact" className="inline rounded-lg border-2 border-secondary py-1 px-4 hover:bg-secondary hover:text-secondary-foreground transition-colors">Contact Me</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

"use client"
import MainLayout from "@/layouts/MainLayout"
import ProjectComponent from "@/components/ProjectComponent";
import { Project } from "@/types";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import Link from "next/link";
import { cleanString } from "@/utils";
import React, { useEffect, useState} from "react";

import portfolioImage from "@/images/portfolio/index.png"
import skymapImage from "@/images/skymap/main.png"
import yaCheezImage from "@/images/yacheez/index.png"
import pineImage from "@/images/pine/index.png"
import neoBotImage from "@/images/neo-bot/card.png"
import fueloneImage from "@/images/fuelone/index.jpeg"


const Projects = () => {

  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<HTMLAnchorElement | null>(null);

  const projects: Project[] = [
    {
      image: fueloneImage,
      name: "FuelOne",
      description: "A fleet management and royalty card platform tailored for Oil Marketing Companies (OMCs). FuelOne enables real-time fuel tracking, card-based transactions, and performance insights for fleets and individual consumers alike. Built for scalability, security, and ease of integration.",
      url: "https://fuelone.raahimfareed.com",
      techStack: ["laravel", "react", "php", "tailwindcss", "mysql", "docker", "kotlin", "jetpack-compose", "Smart Card Programming", "Google APIs"]
    },
    {
      image: neoBotImage,
      name: "Neo Discord Bot",
      description: "A modular, Python-based Discord bot designed for community engagement and automation. Built with pycord, it features a scalable architecture using cogs, integrates with SQLite for persistent data storage, and includes utilities for streamlined command handling.",
      url: "https://pine.raahimfareed.com",
      techStack: ["pycord", "python", "sqlite"]
    },
    {
      image: pineImage,
      name: "Pine",
      description: "Pine is a minimalist PHP micro-framework designed for developers who value simplicity and full control. With an intuitive syntax and a flexible architecture, Pine empowers you to build applications effortlessly—customizing everything down to the grain.",
      url: "https://pine.raahimfareed.com",
      techStack: ["php", "html", "css", "javascript", "tailwindcss", "docker", "pine"]
    },
    {
      image: portfolioImage,
      name: "Portfolio",
      description: "You're currently on the live version of this project! This is my personal portfolio that encases the who, what and how of me. Enjoy your stay here",
      url: "https://raahimfareed.com",
      techStack: ["nextjs", "tailwindcss", "typescript", "vercel"]
    },
    {
      image: skymapImage,
      name: "SkyMap",
      description: "A virtual planetarium application to enhance research and learning.",
      techStack: ["unity", "csharp", "figma", "python", "sqlite"]
    },
    {
      image: yaCheezImage,
      name: "YaCheez",
      description: <>
        An e-commerce platform offering a curated selection of trending lifestyle products across categories like home essentials, electronics, health & beauty, and fashion. Designed for seamless user experience and optimized for mobile, Yacheez delivers nationwide with free shipping.
        <br />
        <strong>Disclaimer:</strong> The owner has, as of recently, switched to shopify therefore the actual project is no longer accessible.
      </>,
      url: "https://yacheez.com",
      techStack: ["laravel", "javascript", "alpinejs", "tailwindcss", "docker", "mysql"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    projects.forEach(project => {
      const el = document.getElementById(cleanString(project.name));
      if (el) observer.observe(el);
    })

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeId == null) return;
    const link = document.querySelector(`a[href="#${activeId}"]`) as HTMLAnchorElement | null;
    if (!link) return;

    if (activeLink) {
      activeLink.classList.remove('!bg-secondary');
    }

    link.classList.add('!bg-secondary');
    setActiveLink(link);
  }, [activeId]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.slice(1);
    const targetEl = document.getElementById(targetId || '');

    if (targetEl) {
      targetEl?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <MainLayout>
      <section className='px-8 lg:px-16 flex gap-8 xl:gap-16'>
        <div className="py-24 md:py-32 lg:py-48 h-full sticky left-0 top-0 w-32 xl:w-64 text-foreground md:flex flex-col gap-4 hidden">
          {projects.length === 0 
            ? <></>
            : projects.map((project, idx) => {
              return <Link onClick={scrollToSection} href={`#${cleanString(project.name)}`} className="rounded-lg py-1 px-2 hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer bg-transarent" key={"project-sidebar-key"+idx}>{project.name}</Link>
            })
          }
        </div>
        <div className="flex flex-col gap-4 py-24 md:py-32 lg:py-48 overflow-y-auto overflow-x-hidden w-[64ch]">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="flex flex-col gap-32">
            {projects.length === 0 
              ? <ProjectSkeleton />
              : projects.map((project, idx) => {
                    return <ProjectComponent
                      key={'project-key-' + idx}
                      name={project.name}
                      url={project.url}
                      imageStyle={{ borderRadius: "16px" }}
                      description={project.description}
                      image={project.image ?? ""}
                      techStack={project.techStack ?? []}
                    />
              })}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Projects;

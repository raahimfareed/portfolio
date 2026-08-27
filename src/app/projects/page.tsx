"use client"
import MainLayout from "@/layouts/MainLayout"
import ProjectComponent from "@/components/ProjectComponent";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import Link from "next/link";
import { cleanString } from "@/utils";
import React, { useEffect, useState} from "react";
import { projectList as projects } from "@/data/projects";

const Projects = () => {

  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<HTMLAnchorElement | null>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeId == null) return;
    const link = document.querySelector(`a[href="#${activeId}"]`) as HTMLAnchorElement | null;
    if (!link) return;

    if (activeLink) {
      activeLink.classList.remove('!bg-secondary', 'shadow');
    }

    link.classList.add('!bg-secondary', 'shadow');
    setActiveLink(link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              return <Link onClick={scrollToSection} href={`#${cleanString(project.name)}`} className="transition rounded py-1 px-2 hover:bg-secondary hover:text-secondary-foreground cursor-pointer bg-transarent" key={"project-sidebar-key"+idx}>{project.name}</Link>
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
                      notice={project.notice}
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

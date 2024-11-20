"use client"
import ProjectSidebarLink from "@/components/ProjectSidebarLink"
import MainLayout from "@/layouts/MainLayout"
import ProjectComponent from "@/components/ProjectComponent";
import { useEffect } from "react";
import { useState } from "react";
import { Project } from "@/types";
import { useToast } from "@/components/hooks/use-toast";
import ProjectSkeleton from "@/components/ProjectSkeleton";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { toast } = useToast();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
            throw new Error("Failed to load projects")
        }

        const data = await response.json();
        setProjects(data);
      // eslint-disable-next-line
      } catch (error: any) {
          toast({
            title: error.message
          });
      }
    })();
  }, [toast]);
  return (
    <MainLayout>
      <section className='px-8 lg:px-16 flex gap-8 xl:gap-16'>
        <div className="py-24 md:py-32 lg:py-48 h-full sticky left-0 top-0 w-32 xl:w-64 text-foreground md:flex flex-col gap-4 hidden">
          <ProjectSidebarLink>Portfolio</ProjectSidebarLink>
          <ProjectSidebarLink>Pine</ProjectSidebarLink>
          <ProjectSidebarLink>SkyMap</ProjectSidebarLink>
          <ProjectSidebarLink>YaCheez</ProjectSidebarLink>
        </div>
        <div className="flex flex-col gap-4 py-24 md:py-32 lg:py-48 overflow-y-auto overflow-x-hidden w-[64ch]">
          <h1 className="text-4xl font-bold">Projects</h1>
          {projects.length === 0 
            ? <ProjectSkeleton />
            : projects.map((project) => {
                  return <ProjectComponent
                    key={'project-key-' + project?.id}
                    name={project.name}
                    url={project.url}
                    description={project.description}
                    image={project.image ?? ""}
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
            })}
        </div>
      </section>
    </MainLayout>
  )
}

export default Projects;

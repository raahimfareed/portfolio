import projects from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

export const HomeProjectCards = () => {
  const featuredProjects: Project[] = [
    projects.FuelOne,
    projects.Khatt,
    projects.Jama,
    projects.Pine
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featuredProjects.length === 0 
        ? <div>No Featured Projects</div>
        : featuredProjects.map((project, idx) => {
          return <ProjectCard
            key={'home-project-key-' + idx}
            project={project}
            className="!bg-background"
          />
        })}
    </div>
  )
}


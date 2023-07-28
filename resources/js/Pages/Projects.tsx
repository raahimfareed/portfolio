import Main from "@/Layouts/Main";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { FaGithub, FaLink } from "react-icons/fa";
import { Project } from "@/types";
import { Head, Link } from "@inertiajs/react";
import ProjectCard from "@/Components/ProjectCard";

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <Main>
            <Head title="All of my projects" />
            <section className="px-5 py-32" id="about">
                <div className="container mx-auto flex gap-3 flex-col">
                    <div>
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Projects</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <p>
                        These are some of the projects I've worked on. For
                        in-depth information you can checkout my{" "}
                        <a
                            href="https://github.com/raahimfareed"
                            className="underline"
                        >
                            Github
                        </a>{" "}
                        or click on a project.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 gap-6 mt-6">
                        {projects.map((project, idx) => (
                            <ProjectCard
                                key={`project-card-${idx}`}
                                id={project.id}
                                media_id={project.media_id}
                                name={project.name}
                                description={project.description}
                                date={project.date}
                                github_link={project.github_link}
                                live_link={project.live_link}
                                media={project.media}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Projects;

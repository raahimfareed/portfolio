import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Main from "@/Layouts/Main";
import { useTranslation } from "react-i18next";
import { Head, Link } from "@inertiajs/react";
import SkillSection from "@/Components/SkillSection";
import { Project } from "@/types";
import ProjectCard from "@/Components/ProjectCard";

const Index = ({ projects }: { projects: Project[] }) => {
    const [t, i18n] = useTranslation("common");
    return (
        <Main>
            <Head title="Achieving the unachievable" />
            {/* Index */}
            <section
                className="relative max-w-screen w-full h-screen flex items-center justify-center flex-col p-5"
                id="indexPage"
            >
                <div className="absolute top-0 right-5 h-full flex items-center justify-center flex-col gap-10 opacity-gsap opacity-0 text-neutral-500">
                    <a
                        href="https://linkedin.com/in/raahimfareed"
                        className="flex items-center justify-center w-fit hover:text-blue-400 transition-colors"
                    >
                        <BsLinkedin className="mr-2" />
                    </a>
                    <a
                        href="https://instagram.com/raahimwho"
                        className="flex items-center justify-center w-fit hover:text-blue-400 transition-colors"
                    >
                        <BsInstagram className="mr-2" />
                    </a>
                    <a
                        href="https://twitter.com/raahimwho"
                        className="flex items-center justify-center w-fit hover:text-sky-400 transition-colors"
                    >
                        <BsTwitter className="mr-2" />
                    </a>
                    <a
                        href="https://github.com/raahimfareed"
                        className="flex items-center justify-center w-fit hover:text-slate-500 transition-colors"
                    >
                        <FaGithub className="mr-2" />
                    </a>
                    <a
                        href="https://hashnode.com/@raahim"
                        className="flex items-center justify-center w-fit hover:text-blue-400 transition-colors"
                    >
                        <SiHashnode className="mr-2" />
                    </a>
                    <a
                        href="https://gdsc.community.dev/u/mb3qvy/"
                        className="flex items-center justify-center w-fit hover:text-rose-400 transition-colors"
                    >
                        <AiOutlineGoogle className="mr-2" />
                    </a>
                </div>
                <div>
                    <div className="overflow-hidden">
                        <div className="text-xl md:text-3xl lg:text-5xl font-light flex">
                            <span id="subText1">
                                {t("index.title.part1", { framework: "React" })}
                            </span>
                            <span id="subText2">
                                {t("index.title.part2", { framework: "React" })}
                            </span>
                        </div>
                        <h1
                            id="mainText"
                            className="text-4xl md:text-7xl lg:text-9xl font-bold relative"
                        >
                            {t("index.name", { framework: "React" })}
                        </h1>
                        <hr
                            className="ml-auto w-1/5 border-2 lg:border-4"
                            id="mainTextUnderline"
                        />
                    </div>
                    <div className="mt-5 lg:mt-10 opacity-0 opacity-gsap flex items-center gap-3 flex-wrap">
                        <Link
                            href="/projects"
                            className="border-2 bg-neutral-50 border-neutral-50 text-neutral-900 py-2 px-4 lg:text-xl"
                        >
                            {t("index.button.projects", { framework: "React" })}
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 py-2 px-4 lg:text-xl hover:bg-neutral-50 hover:border-neutral-50 hover:text-neutral-900 transition-colors"
                        >
                            {t("index.button.getInTouch", {
                                framework: "React",
                            })}
                        </Link>
                    </div>
                </div>
            </section>
            {/* Skills */}
            <SkillSection />
            {/* Projects */}
            <section className="px-5 py-24 bg-neutral-800">
                <div className="container mx-auto">
                    <div className="mb-3">
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Glimpse Of My Work</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                    <Link
                        href="/projects"
                        className="border-2 py-2 px-4 block w-fit mt-3 transition-colors hover:bg-neutral-50 hover:border-neutral-50 hover:text-neutral-900"
                    >
                        Check Out Other Projects
                    </Link>
                </div>
            </section>
        </Main>
    );
};

export default Index;

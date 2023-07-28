import { iSkill, skills } from "@/Components/SkillSection";
import Main from "@/Layouts/Main";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Image } from "@/types";
import { Head, Link } from "@inertiajs/react";
import SyntaxHighlighter from "react-syntax-highlighter";

const About = ({ about, images }: { about: string; images: Image[] }) => {
    const [skill, setSkill] = useState("");
    const [visibleSkills, setVisibleSkills] = useState(skills);

    // skills search
    useEffect(() => {
        const _skills: iSkill[] = skills.filter((_skill) =>
            _skill.name.toLowerCase().includes(skill.toLowerCase())
        );

        setVisibleSkills(_skills);
    }, [skill]);

    return (
        <Main>
            <Head title="About me" />
            <section className="px-5 py-32" id="about">
                <div className="container mx-auto flex gap-3 flex-col">
                    <div>
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>About</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <p>TL;DR. I'm Raahim and I like to code.</p>
                    <Link
                        href="/projects"
                        className="border-2 bg-neutral-50 border-neutral-50 text-neutral-900 py-2 px-4 block w-fit"
                    >
                        Projects
                    </Link>
                    <div className="markdown">
                        <ReactMarkdown
                            components={{
                                code({
                                    node,
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }) {
                                    const match = /language-(\w+)/.exec(
                                        className || ""
                                    );
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={gruvboxDark}
                                            language={match[1]}
                                            PreTag="div"
                                            // {...props}
                                        >
                                            {String(children).replace(
                                                /\n$/,
                                                ""
                                            )}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                            remarkPlugins={[remarkGfm]}
                        >
                            {about}
                        </ReactMarkdown>
                    </div>

                    <div className="mt-12">
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Skills</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <p>
                            I possess a handful of skills; you may search for a
                            specific skill you like.
                        </p>
                        <input
                            type="text"
                            placeholder="Search for a skill"
                            className="rounded p-1 text-neutral-900 bg-neutral-50 w-full lg:w-auto"
                            onChange={(e) => setSkill(e.target.value)}
                            value={skill}
                        />
                    </div>
                    <div className="flex gap-3 mt-3 flex-wrap">
                        {visibleSkills.map((_skill, idx) => {
                            return (
                                <div
                                    key={"skill-" + idx}
                                    className="px-2 rounded-full border-2 border-neutral-50 text-neutral-50 bg-neutral-900 flex items-center justify-center gap-2"
                                >
                                    {_skill.logo !== undefined ? (
                                        <span className="text-xl">
                                            {_skill.logo}
                                        </span>
                                    ) : (
                                        <></>
                                    )}
                                    <span>{_skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-12">
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Gallery</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        {/* TODO: Change this to db */}
                        {images.map((image, idx) => (
                            <img
                                key={`img-${idx}`}
                                src={image.path}
                                alt={image.title ?? "Gallery"}
                                className="aspect-auto h-64 w-auto transition hover:scale-105 rounded"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default About;

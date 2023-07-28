import React, { useEffect, useState } from "react";
import { AiFillHtml5, AiOutlineGoogle } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { BsFillTerminalFill, BsGit, BsUnity } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import {
    SiJavascript,
    SiPhp,
    SiTypescript,
    SiPostcss,
    SiMicrosoftword,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiArchlinux,
    SiVim,
    SiTailwindcss,
    SiMarkdown,
    SiArduino,
    SiGnubash,
} from "react-icons/si";
import {
    FaLaravel,
    FaReact,
    FaSass,
    FaPython,
    FaBootstrap,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";

export interface iSkill {
    name: string;
    logo?: JSX.Element;
}

export const skills: iSkill[] = [
    {
        name: "HTML",
        logo: <AiFillHtml5 />,
    },
    {
        name: "CSS",
        logo: <DiCss3 />,
    },
    {
        name: "SASS",
        logo: <FaSass />,
    },
    {
        name: "PostCSS",
        logo: <SiPostcss />,
    },
    {
        name: "TailwindCSS",
        logo: <SiTailwindcss />,
    },
    {
        name: "Bootstrap",
        logo: <FaBootstrap />,
    },
    {
        name: "JavaScript",
        logo: <SiJavascript />,
    },
    {
        name: "TypeScript",
        logo: <SiTypescript />,
    },
    {
        name: "PHP",
        logo: <SiPhp />,
    },
    {
        name: "Laravel",
        logo: <FaLaravel />,
    },
    {
        name: "React",
        logo: <FaReact />,
    },
    {
        name: "C++",
        logo: <TbBrandCpp />,
    },
    {
        name: "Arduino",
        logo: <SiArduino />,
    },
    {
        name: "Python",
        logo: <FaPython />,
    },
    {
        name: "Git",
        logo: <BsGit />,
    },
    {
        name: "SQL",
        logo: <TbSql />,
    },
    {
        name: "Markdown",
        logo: <SiMarkdown />,
    },
    {
        name: "JSON",
        logo: <VscJson />,
    },
    {
        name: "Figma",
        logo: <CgFigma />,
    },
    {
        name: "MS Word",
        logo: <SiMicrosoftword />,
    },
    {
        name: "MS Excel",
        logo: <SiMicrosoftexcel />,
    },
    {
        name: "MS PowerPoint",
        logo: <SiMicrosoftpowerpoint />,
    },
    {
        name: "Linux",
        logo: <SiArchlinux />,
    },
    {
        name: "Terminal",
        logo: <BsFillTerminalFill />,
    },
    {
        name: "Bash",
        logo: <SiGnubash />,
    },
    {
        name: "Vim",
        logo: <SiVim />,
    },
    {
        name: "Unity 2D",
        logo: <BsUnity />,
    },
    {
        name: "Googling",
        logo: <AiOutlineGoogle />,
    },
];

const SkillSection = () => {
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
        <section className="px-5 py-24 bg-[rgb(30,30,30)]">
            <div className="container mx-auto">
                <div>
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
                <Link
                    href="/about"
                    className="border-2 py-2 px-4 block w-fit mt-3 transition-colors hover:bg-neutral-50 hover:border-neutral-50 hover:text-neutral-900"
                >
                    Read More About Me
                </Link>
            </div>
        </section>
    );
};

export default SkillSection;


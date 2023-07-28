import { Project } from "@/types";
import moment from "moment";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
    media,
    name,
    date,
    description,
    github_link,
    live_link,
}: Project) => {
    return (
        <div className="border-2 border-neutral-700 bg-neutral-700 text-neutral-50 rounded p-4 w-full project-card flex flex-col gap-3 overflow-hidden">
            <div className="w-full aspect-square">
                <img
                    src={media.path}
                    alt={name}
                    className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="flex flex-col">
                <h2 className="font-bold text-xl">{name}</h2>
                <h4 className="text-neutral-400 text-sm">
                    {moment(date).format("Do MMM YYYY")}
                </h4>
                <p className="max-h-[100px] overflow-hidden mt-3">
                    {description}
                </p>
                <div className="flex items-center gap-3 justify-self">
                    {github_link !== null ? (
                        <a
                            href={github_link}
                            className="w-fit rounded bg-neutral-200 text-neutral-800 p-2 block mt-3 text-center hover:bg-neutral-300 transition-colors"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    ) : (
                        ""
                    )}
                    {live_link !== null ? (
                        <a
                            href={live_link}
                            className="w-fit rounded bg-green-200 text-green-800 p-2 block mt-3 text-center hover:bg-green-300 transition-colors"
                            target="_blank"
                        >
                            <FaLink />
                        </a>
                    ) : (
                        ""
                    )}
                </div>
                {/* <Link
            href={`/project/${project.id}`}
            className="rounded bg-blue-200 text-blue-800 px-4 py-2 block mt-3 text-center hover:bg-blue-300 transition-colors"
        >
            View Details
        </Link> */}
            </div>
        </div>
    );
};

export default ProjectCard;

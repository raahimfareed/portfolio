import Admin from "@/Layouts/Admin";
import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { toast } from "react-hot-toast";
import { Project } from "@/types";
import { useForm } from "@inertiajs/react";

const Projects = ({ projects }: { projects: Project[] }) => {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");

    const {
        data,
        setData,
        processing,
        errors,
        post,
        delete: destroy,
        reset,
    } = useForm({
        name: "",
        description: "",
        date: "",
        github: "",
        live: "",
        image: null,
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setModal(false);
            reset();
            return;
        }

        setModal(true);
    }, [processing]);

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setData("image", event.target.files[0]);
        }
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("admin.projects"));
    };

    const deleteProject = (
        e: SyntheticEvent<HTMLButtonElement>,
        id: number
    ) => {
        e.preventDefault();

        destroy(route("admin.projects.delete", { project: id }));
    };

    return (
        <Admin>
            <Dialog
                className="fixed inset-0 z-10 bg-black/80 flex items-center justify-center"
                open={modal}
                onClose={() => setModal(false)}
            >
                <Dialog.Panel className="rounded bg-white shadow text-black p-4">
                    <Dialog.Title className="text-xl font-bold">
                        Add Project
                    </Dialog.Title>
                    <form className="mb-3" onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="inputName">Name</label>
                            <input
                                id="inputName"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <small className="block text-red-500 text-sm">
                                    {errors.name}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDescription">
                                Description
                            </label>
                            <textarea
                                id="inputDescription"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="rounded bg-white border-2 w-full p-1"
                            />
                            {errors.description && (
                                <small className="block text-red-500 text-sm">
                                    {errors.description}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDate">Date</label>
                            <input
                                id="inputDate"
                                type="date"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                            />
                            {errors.date && (
                                <small className="block text-red-500 text-sm">
                                    {errors.date}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputGithub">Github Link</label>
                            <input
                                id="inputGithub"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.github}
                                onChange={(e) =>
                                    setData("github", e.target.value)
                                }
                            />
                            {errors.github && (
                                <small className="block text-red-500 text-sm">
                                    {errors.github}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputLive">Live Link</label>
                            <input
                                id="inputLive"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.live}
                                onChange={(e) =>
                                    setData("live", e.target.value)
                                }
                            />
                            {errors.live && (
                                <small className="block text-red-500 text-sm">
                                    {errors.live}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage">Image</label>
                            <input
                                name="media"
                                type="file"
                                id="inputImage"
                                className="rounded bg-white border-2 w-full p-1"
                                onChange={onImageChange}
                            />
                            {errors.image && (
                                <small className="block text-red-500 text-sm">
                                    {errors.image}
                                </small>
                            )}
                        </div>

                        <div>
                            <button
                                className="rounded-md px-6 py-2 bg-green-200 text-green-900 hover:bg-green-300 transition-colors"
                                disabled={processing}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </Dialog>
            <h1 className="text-3xl font-bold mb-3">Projects</h1>
            <button
                className="rounded-md px-6 py-2 bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors"
                onClick={() => setModal(true)}
            >
                Add Project
            </button>
            <table className="w-full mt-6">
                <thead className="font-bold">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Date</td>
                        <td>GitHub</td>
                        <td>Link</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, idx) => {
                        return (
                            <tr key={`project-${idx}`}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{project.date}</td>
                                <td>{project.github_link}</td>
                                <td>{project.live_link}</td>
                                <td>
                                    <button
                                        onClick={(e) =>
                                            deleteProject(e, project.id)
                                        }
                                        className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
                                    >
                                        <MdClose />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Admin>
    );
};

export default Projects;

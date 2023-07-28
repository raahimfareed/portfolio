import Admin from "@/Layouts/Admin";
import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Experience as iExperience } from "@/types";
import { MdClose } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useForm } from "@inertiajs/react";

const Experience = ({ experiences }: { experiences: iExperience[] }) => {
    const [modal, setModal] = useState(false);

    const {
        data,
        setData,
        processing,
        post,
        errors,
        delete: destroy,
        reset,
    } = useForm({
        title: "",
        company: "",
        description: "",
        start: "",
        end: "",
        ongoing: false,
        image: null,
    });

    const [image, setImage] = useState<string | null>(null);

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

    const addExperience = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("admin.experience"));
    };

    const deleteExperience = (
        e: SyntheticEvent<HTMLButtonElement>,
        id: number
    ) => {
        e.preventDefault();

        destroy(route("admin.experience.delete", { experience: id }));
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
                        Media Upload
                    </Dialog.Title>
                    {/* <Dialog.Description>
                    </Dialog.Description> */}
                    <form className="mb-3" onSubmit={addExperience}>
                        <div className="mb-3">
                            <label htmlFor="inputTitle">Title</label>
                            <input
                                id="inputTitle"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <small className="block text-red-500 text-sm">
                                    {errors.title}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCompany">Company</label>
                            <input
                                id="inputCompany"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.company}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                            />
                            {errors.company && (
                                <small className="block text-red-500 text-sm">
                                    {errors.company}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDescription">
                                Description
                            </label>
                            <input
                                id="inputDescription"
                                type="text"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            {errors.description && (
                                <small className="block text-red-500 text-sm">
                                    {errors.description}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputStartDate">Start Date</label>
                            <input
                                id="inputStartDate"
                                type="date"
                                className="rounded bg-white border-2 w-full p-1"
                                value={data.start}
                                onChange={(e) =>
                                    setData("start", e.target.value)
                                }
                            />
                            {errors.start && (
                                <small className="block text-red-500 text-sm">
                                    {errors.start}
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEndDate">End Date</label>
                            <input
                                value={data.end}
                                id="inputEndDate"
                                type="date"
                                onChange={(e) => setData("end", e.target.value)}
                                className={
                                    "rounded bg-white border-2 w-full p-1" +
                                    (data.ongoing
                                        ? " !bg-neutral-200 text-neutral-600"
                                        : "")
                                }
                                disabled={data.ongoing}
                            />
                            {errors.end && (
                                <small className="block text-red-500 text-sm">
                                    {errors.end}
                                </small>
                            )}
                            <label htmlFor="inputOngoing">
                                <input
                                    type="checkbox"
                                    id="inputOngoing"
                                    onChange={(e) =>
                                        setData("ongoing", e.target.checked)
                                    }
                                />{" "}
                                On Going
                            </label>
                            {errors.ongoing && (
                                <small className="block text-red-500 text-sm">
                                    {errors.ongoing}
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
                            <button className="rounded-md px-6 py-2 bg-green-200 text-green-900 hover:bg-green-300 transition-colors">
                                Add
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </Dialog>
            <h1 className="text-3xl font-bold mb-3">Experience</h1>
            <button
                className="rounded-md px-6 py-2 bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors"
                onClick={() => setModal(true)}
            >
                Add Experience
            </button>
            <table className="w-full mt-6">
                <thead className="font-bold">
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Company</td>
                        <td>Description</td>
                        <td>Start</td>
                        <td>End</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {experiences.map((experience, idx) => (
                        <tr key={`experience-${idx}`}>
                            <td>{experience.id}</td>
                            <td>{experience.title}</td>
                            <td>{experience.company}</td>
                            <td>{experience.description}</td>
                            <td>{experience.start}</td>
                            <td>{experience.end}</td>
                            <td>
                                <button
                                    onClick={(e) =>
                                        deleteExperience(e, experience.id)
                                    }
                                    className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
                                >
                                    <MdClose />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Admin>
    );
};

export default Experience;

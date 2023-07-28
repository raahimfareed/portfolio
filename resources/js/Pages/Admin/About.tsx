import Admin from "@/Layouts/Admin";
import React, {
    FormEvent,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import "../../../css/markdown.css";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Dialog } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { Image } from "@/types";
import { useForm } from "@inertiajs/react";

const About = ({ about, images }: { about: string; images: Image[] }) => {
    const {
        data,
        setData,
        post: postAbout,
    } = useForm({
        body: about,
    });
    const {
        setData: setMediaData,
        post: postMedia,
        errors: mediaErrors,
        processing: mediaProcessing,
    } = useForm<{
        media: File | null;
    }>({
        media: null,
    });
    const { delete: destroyMedia } = useForm({});

    const [edit, setEdit] = useState(false);
    const refOldBody = useRef("");

    const [mediaModal, setMediaModal] = useState(false);
    const [media, setMedia] = useState<string | null>(null);

    useEffect(() => {
        if (!mediaErrors.media && media !== null) {
            setMedia(null);
            setMediaModal(false);
            toast.success("Uploaded Image");
            return;
        }

        if (mediaErrors.media) {
            setMediaModal(true);
        }
    }, [mediaProcessing]);

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setMedia(URL.createObjectURL(event.target.files[0]));

            setMediaData("media", event.target.files[0]);
        }
    };

    const uploadMedia = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        postMedia(route("admin.gallery"));
    };

    const save = () => {
        const id = toast.loading("Saving");
        postAbout(route("admin.about"));
        refOldBody.current = about;
        setEdit(false);
        toast.success("Saved", {
            id,
        });
    };

    const cancel = () => {
        setData("body", refOldBody.current);
        setEdit(false);
        toast.error("Cancelled");
    };

    const deleteImage = (e: SyntheticEvent, id: number) => {
        destroyMedia(route("admin.gallery.delete", { media: id }));
        // if (target.parentElement) {
        //     target.parentElement.remove();
        // }
    };

    return (
        <Admin>
            <Dialog
                className="fixed inset-0 z-10 bg-black/80 flex items-center justify-center"
                open={mediaModal}
                onClose={() => setMediaModal(false)}
            >
                <Dialog.Panel className="rounded bg-white shadow text-black p-4 cursor-pointer">
                    <Dialog.Title className="text-xl font-bold">
                        Media Upload
                    </Dialog.Title>
                    {/* <Dialog.Description>
                        
                    </Dialog.Description> */}

                    <form
                        className="mb-3"
                        encType="multipart/form-data"
                        method="POST"
                        onSubmit={uploadMedia}
                    >
                        <label
                            className="mb-3 w-full cursor-pointer"
                            htmlFor="media"
                        >
                            {media !== null ? (
                                <img
                                    src={media}
                                    className="w-full rounded max-w-[24rem] block"
                                />
                            ) : (
                                <div className="rounded-md px-6 py-2 bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors">
                                    Select Image
                                </div>
                            )}
                            {mediaErrors.media && (
                                <small className="text-red-500">
                                    {mediaErrors.media}
                                </small>
                            )}
                        </label>
                        <input
                            type="file"
                            id="media"
                            className="hidden"
                            onChange={onImageChange}
                        />

                        <div className="flex items-center gap-3 mt-3">
                            <button
                                type="submit"
                                className="rounded-md px-6 py-2 bg-green-200 text-green-900 hover:bg-green-300 transition-colors"
                            >
                                Upload
                            </button>
                            <button
                                type="button"
                                className="rounded-md px-6 py-2 bg-red-200 text-red-900 hover:bg-red-300 transition-colors"
                                onClick={() => setMediaModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </Dialog>
            <h1 className="text-3xl font-bold mb-3">About</h1>
            <div className="mb-3 flex items-center gap-3">
                <button
                    className="rounded-md px-6 py-2 bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors"
                    onClick={() => setMediaModal(true)}
                >
                    Add Image
                </button>
                {edit === true ? (
                    <>
                        <button
                            className="rounded-md px-6 py-2 bg-green-200 text-green-900 hover:bg-green-300 transition-colors"
                            onClick={save}
                        >
                            Save
                        </button>
                        <button
                            className="rounded-md px-6 py-2 bg-red-200 text-red-900 hover:bg-red-300 transition-colors"
                            onClick={cancel}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setEdit(false)}
                            className="rounded-md px-6 py-2 bg-purple-200 text-purple-900 hover:bg-purple-300 transition-colors"
                        >
                            Preview
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setEdit(true)}
                        className="rounded-md px-6 py-2 bg-blue-200 text-blue-900 hover:bg-blue-300 transition-colors"
                    >
                        Edit
                    </button>
                )}
            </div>

            <div className="flex gap-3">
                {edit === true ? (
                    <textarea
                        className="w-full font-mono rounded min-h-screen max-w-[80ch]"
                        onChange={(e) => setData("body", e.target.value)}
                        value={data.body}
                    ></textarea>
                ) : (
                    <div className="markdown max-w-[80ch]">
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
                                            style={solarizedLight}
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
                            {data.body}
                        </ReactMarkdown>
                    </div>
                )}

                <div>
                    <h3 className="font-bold text-xl">Media</h3>
                    <div className="flex gap-3 flex-wrap">
                        {/* TODO: Change this to db */}
                        {images.map((image, idx) => (
                            <div
                                className="relative"
                                key={`gallery-item-${idx}`}
                            >
                                <MdClose
                                    onClick={(
                                        e: React.SyntheticEvent<Element, Event>
                                    ) => deleteImage(e, image.id)}
                                    className="top-3 right-3 text-red-500 absolute rounded bg-white p-1 text-xl cursor-pointer shadow"
                                />
                                <img
                                    key={`img-${idx}`}
                                    src={image.path}
                                    alt={image.title ?? "Gallery"}
                                    className="aspect-auto w-full rounded max-w-[8rem]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Admin>
    );
};

export default About;

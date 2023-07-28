import React, { SyntheticEvent, useEffect, useState } from "react";
import { FiCode, FiMail } from "react-icons/fi";
import {
    BsInstagram,
    BsLinkedin,
    BsStackOverflow,
    BsTwitter,
    BsWhatsapp,
} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import Main from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
    const messageLimit: number = 1024;

    const { data, setData, processing, errors, reset, post } = useForm({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && data.message.length > 0) {
            toast.success("Your message has been sent!");
            reset();
            return;
        }
    }, [processing]);

    const sendMessage = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("contact"));
    };

    return (
        <Main>
            <Toaster />
            <Head title="Get in touch!" />
            <section className="px-5 py-32" id="about">
                <div className="container mx-auto flex gap-3 flex-col">
                    <div>
                        <h2 className="font-bold text-4xl w-fit flex flex-col">
                            <span>Contact</span>
                            <hr className="w-1/5 border-2 ml-auto" />
                        </h2>
                    </div>
                    <p>Get in touch with me!</p>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-32 w-full">
                        <form
                            onSubmit={sendMessage}
                            method="POST"
                            className="w-full"
                        >
                            <h3 className="text-xl font-bold mb-1">
                                Send Me a Message
                            </h3>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="rounded w-full bg-white text-neutral-900 outline-none focus:border-blue-300 border-2 border-white p-1"
                                />
                                {errors.name && (
                                    <small className="block text-red-400 text-sm">
                                        {errors.name}
                                    </small>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="rounded w-full bg-white text-neutral-900 outline-none focus:border-blue-300 border-2 border-white p-1"
                                />
                                {errors.email && (
                                    <small className="block text-red-400 text-sm">
                                        {errors.email}
                                    </small>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    className="rounded w-full bg-white text-neutral-900 outline-none focus:border-blue-300 border-2 border-white p-1"
                                    id="message"
                                />
                                <small
                                    className={
                                        "block text-neutral-100 text-sm transition-colors" +
                                        (messageLimit - data.message.length < 0
                                            ? " text-red-400"
                                            : "")
                                    }
                                >
                                    {messageLimit - data.message.length}
                                </small>
                                {errors.message && (
                                    <small className="block text-red-400 text-sm">
                                        {errors.message}
                                    </small>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors w-full px-4 py-2"
                                disabled={processing}
                            >
                                Send Message
                            </button>
                        </form>
                        <div className="flex flex-col gap-2 w-full">
                            <h4 className="font-bold text-xl mb-1">
                                Social Links
                            </h4>
                            <a
                                href="mailto:raahimfareed@pm.me"
                                className="flex items-center justify-center w-fit hover:text-purple-400"
                            >
                                <FiMail className="mr-2" /> raahimfareed@pm.me
                            </a>
                            <a
                                href="https://wa.me/923105322294"
                                className="flex items-center justify-center w-fit hover:text-green-400"
                            >
                                <BsWhatsapp className="mr-2" /> Business Number
                            </a>
                            <a
                                href="https://linkedin.com/in/raahimfareed"
                                className="flex items-center justify-center w-fit hover:text-blue-400"
                            >
                                <BsLinkedin className="mr-2" /> @raahimfareed
                            </a>
                            <a
                                href="https://instagram.com/raahimwho"
                                className="flex items-center justify-center w-fit hover:text-blue-400"
                            >
                                <BsInstagram className="mr-2" /> @raahimwho
                            </a>
                            <a
                                href="https://twitter.com/raahimwho"
                                className="flex items-center justify-center w-fit hover:text-sky-400"
                            >
                                <BsTwitter className="mr-2" /> @raahimwho
                            </a>
                            <a
                                href="https://github.com/raahimfareed"
                                className="flex items-center justify-center w-fit hover:text-slate-500"
                            >
                                <FaGithub className="mr-2" /> @raahimfareed
                            </a>
                            <a
                                href="https://hashnode.com/@raahim"
                                className="flex items-center justify-center w-fit hover:text-blue-400"
                            >
                                <SiHashnode className="mr-2" /> @raahim
                            </a>
                            <a
                                href="https://stackoverflow.com/users/12987360/raahim-fareed"
                                className="flex items-center justify-center w-fit hover:text-orange-400"
                            >
                                <BsStackOverflow className="mr-2" />{" "}
                                @raahimfareed
                            </a>
                            <a
                                href="https://gdsc.community.dev/u/mb3qvy/"
                                className="flex items-center justify-center w-fit hover:text-rose-400"
                            >
                                <AiOutlineGoogle className="mr-2" /> GDSC
                                Profile
                            </a>
                            <a
                                href="https://codeforces.com/profile/raahimfareed"
                                className="flex items-center justify-center w-fit hover:text-amber-400"
                            >
                                <FiCode className="mr-2" /> CodeForces
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Contact;

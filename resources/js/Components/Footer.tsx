import React, { useEffect, useState } from "react";

import { AiOutlineGoogle } from "react-icons/ai";
import {
    BsInstagram,
    BsLinkedin,
    BsStackOverflow,
    BsTwitter,
} from "react-icons/bs";
import { FiCode, FiMail } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import moment from "moment";
import axios, { AxiosResponse } from "axios";
import { Link } from "@inertiajs/react";

const Footer = () => {
    const [post, setPost] = useState<{
        brief: string;
        title: string;
        slug: string;
        coverImage: string;
    }>();

    // Get Hashnode Post
    useEffect(() => {
        const query = `
            query GetUserArticles($page: Int!) {
                user(username: "raahim") {
                    publication {
                        posts(page: $page) {
                            title
                            brief
                            slug
                            coverImage
                        }
                    }
                }
            }
        `;

        const variables = { page: 0 };

        axios
            .post(
                "https://api.hashnode.com/",
                {
                    query,
                    variables,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response: AxiosResponse<any, any>) => {
                setPost(response.data.data.user.publication.posts[0]);
            });
    }, []);

    return (
        <footer className="px-5 pt-24 bg-neutral-50 text-neutral-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <h3 className="font-bold text-xl">Raahim Fareed</h3>
                    <p className="text-neutral-700">I write code.</p>
                    <form className="mt-3">
                        <label htmlFor="">Subscribe to my Newsletter</label>
                        <div className="flex items-stretch h-8 gap-2">
                            <input
                                type="email"
                                className="border-2 border-neutral-900 w-full"
                                placeholder="name@example.com"
                            />
                            <button className="border-2 px-2 block w-fit transition-colors border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-1">Socials</h4>
                    <a
                        href="mailto:raahimfareed@pm.me"
                        className="flex items-center justify-center w-fit hover:text-purple-400"
                    >
                        <FiMail className="mr-2" /> raahimfareed@pm.me
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
                        <BsStackOverflow className="mr-2" /> @raahimfareed
                    </a>
                    <a
                        href="https://gdsc.community.dev/u/mb3qvy/"
                        className="flex items-center justify-center w-fit hover:text-rose-400"
                    >
                        <AiOutlineGoogle className="mr-2" /> GDSC Profile
                    </a>
                    <a
                        href="https://codeforces.com/profile/raahimfareed"
                        className="flex items-center justify-center w-fit hover:text-amber-400"
                    >
                        <FiCode className="mr-2" /> CodeForces
                    </a>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-1">Links</h4>
                    <Link href="/" className="nav-link">
                        Main Page
                    </Link>
                    <Link href="/about" className="nav-link">
                        About
                    </Link>
                    <Link href="/projects" className="nav-link">
                        Projects
                    </Link>
                    <Link href="/experience" className="nav-link">
                        Experience
                    </Link>
                    <Link href="/contact" className="nav-link">
                        Contact
                    </Link>
                    <a href="https://qubits.hashnode.dev/" className="nav-link">
                        Blog
                    </a>
                    <Link href="/live" className="nav-link">
                        Live Projects
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-1">Pinned Post</h4>
                    {post === undefined ? (
                        <div className="rounded animate-pulse shadow p-2">
                            <div className="rounded-sm overflow-hidden bg-neutral-300 w-full h-32"></div>
                            <span className="block w-full rounded-full bg-neutral-300 mt-3 h-4"></span>
                            <span className="block w-full rounded-full bg-neutral-300 mt-3 h-2"></span>
                            <span className="block w-full rounded-full bg-neutral-300 mt-1 h-2"></span>
                            <span className="block w-full rounded-full bg-neutral-300 mt-1 h-2"></span>
                            <span className="block w-3/4 rounded-full bg-neutral-300 mt-1 h-2"></span>
                        </div>
                    ) : (
                        <a
                            href={`https://qubits.hashnode.dev/${post.slug}`}
                            className="rounded shadow p-2 block bg-white"
                            target="_blank"
                        >
                            <div className="rounded-sm overflow-hidden w-full flex items-center justify-center">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <h3 className="mt-3 font-bold text-xl">
                                {post.title}
                            </h3>
                            <p className="my-3 text-neutral-500 text-sm">
                                {post.brief}
                            </p>
                        </a>
                    )}
                </div>
            </div>
            <div className="container mx-auto py-5 mt-10 flex items-center justify-between text-xs flex-wrap bg-white">
                <span>Raahim Fareed</span>
                <span>
                    Copyrights Reserved &copy; {moment().format("YYYY")}
                </span>
            </div>
        </footer>
    );
};

export default Footer;


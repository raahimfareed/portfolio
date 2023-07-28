import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { MdClose, MdMenu } from "react-icons/md";

const Admin = ({
    children,
}: {
    children?: JSX.Element[] | string | JSX.Element | string[];
}) => {
    const logoutForm = useForm();
    const [open, setOpen] = useState(false);
    const toggle = () => {
        if (open) {
            setOpen(false);
            document.body.classList.remove("overflow-hidden");
            return;
        }

        setOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const logout = () => {
        logoutForm.post(route("logout"));
    }

    return (
        <>
            <div className="lg:pl-[300px] xl:pl-[400px]">
                <nav className="sticky top-0 h-16 bg-white text-black shadow lg:hidden flex items-center justify-center">
                    <MdMenu
                        className="right-3 text-2xl absolute cursor-pointer"
                        onClick={toggle}
                    />
                    <Link
                        href="/admin/dashboard"
                        className="text-2xl font-bold mx-auto"
                    >
                        Raahim Fareed
                    </Link>
                </nav>
                <nav
                    className={
                        "fixed left-0 top-0 flex flex-col gap-3 h-screen w-full lg:w-[300px] xl:w-[400px] bg-neutral-50 border-r-2 p-3 text-neutral-900 -translate-x-full transition-transform lg:translate-x-0" +
                        (open === true ? " translate-x-0" : "")
                    }
                >
                    <MdClose
                        className="top-3 right-3 absolute text-2xl cursor-pointer lg:hidden"
                        onClick={toggle}
                    />
                    <Link
                        href="/admin/dashboard"
                        className="text-2xl font-bold mx-auto"
                    >
                        Raahim Fareed
                    </Link>
                    <Link
                        href="/admin/dashboard"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/admin/about"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/admin/contact"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/admin/experience"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        Experience
                    </Link>
                    <Link
                        href="/admin/projects"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/admin/blog"
                        className="block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                    >
                        Blog
                    </Link>
                    <div
                        className="cursor-pointer text-red-500 block py-1 px-3 hover:bg-neutral-200 rounded transition-colors"
                        onClick={logout}
                    >
                        Logout
                    </div>
                </nav>
                <main className="min-h-screen w-full bg-neutral-50 text-neutral-900 p-3">
                    {children}
                </main>
            </div>
            <Toaster />
        </>
    );
};

export default Admin;

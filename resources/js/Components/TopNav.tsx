import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { HiLanguage } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { Link } from "@inertiajs/react";

const TopNav = () => {
    const [t, i18n] = useTranslation("common");
    const [_open, setOpen] = useState<boolean>(false);
    const open = () => {
        document.body.classList.add("overflow-hidden");
        setOpen(true);
    };
    const close = () => {
        document.body.classList.remove("overflow-hidden");
        setOpen(false);
    };
    const nav = useRef<HTMLElement>(null);
    useEffect(() => {
        if (!nav.current) return;
        window.addEventListener("scroll", function () {
            if (!nav.current) return;

            var scrollDistance =
                window.pageYOffset || document.documentElement.scrollTop;

            if (scrollDistance > 100) {
                nav.current.classList.add("py-5");
                nav.current.classList.add("bg-black");
                nav.current.classList.remove("py-10");
            } else {
                nav.current.classList.remove("py-5");
                nav.current.classList.remove("bg-black");
                nav.current.classList.add("py-10");
            }
        });
    }, [nav.current]);

    const changeLanguage = () => {
        if (i18n.language === "en" || i18n.language === "en-US") {
            i18n.changeLanguage("ur");
        } else if (i18n.language === "ur") {
            i18n.changeLanguage("zn");
        } else {
            i18n.changeLanguage("en");
        }
    };

    return (
        <nav
            className="fixed top-0 z-50 px-5 py-10 w-full transition-all"
            ref={nav}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <svg
                        width="30"
                        height="53"
                        viewBox="0 0 30 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.968 23.5584V32.9344L2.856 32.8704V33.8944H12.968V44.8704H14.056V22.4704H1.576V23.5584H12.968Z"
                            fill="white"
                        />
                        <path
                            d="M27.344 21.904C27.344 23.504 26.8107 24.9333 25.744 26.192C24.6773 27.4507 22.896 28.1333 20.4 28.24L27.312 38H25.904L19.056 28.24H14.032V38H12.944V15.6H19.888C21.744 15.6 23.2267 15.9307 24.336 16.592C25.4453 17.232 26.224 18.032 26.672 18.992C27.12 19.9307 27.344 20.9013 27.344 21.904ZM14.032 27.152H19.888C21.6587 27.152 23.1627 26.7573 24.4 25.968C25.6587 25.1787 26.288 23.824 26.288 21.904C26.288 20.0053 25.6587 18.6613 24.4 17.872C23.1627 17.0827 21.6587 16.688 19.888 16.688H14.032V27.152Z"
                            fill="white"
                        />
                    </svg>
                    {/* Raahim Fareed */}
                </Link>
                <span className="cursor-pointer lg:hidden" onClick={open}>
                    <MdMenu />
                </span>
                <div
                    className={
                        "fixed z-[100] inset-0 bg-neutral-900 lg:bg-transparent p-5 lg:p-0 flex transition-transform flex-col items-center justify-center -translate-x-full lg:translate-x-0 lg:static lg:inset-[unset] lg:w-fit" +
                        (_open === true ? " translate-x-0" : "")
                    }
                >
                    <span
                        className="cursor-pointer absolute top-5 right-5 lg:hidden"
                        onClick={close}
                    >
                        <MdClose />
                    </span>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
                        <Link href="/" className="text-xl lg:hidden">
                            Raahim Fareed
                        </Link>
                        <Link href={route("index")} className="nav-link">
                            Home
                        </Link>
                        <Link href={route("about")} className="nav-link">
                            About
                        </Link>
                        <Link href={route("projects")} className="nav-link">
                            Projects
                        </Link>
                        <Link href={route("experience")} className="nav-link">
                            Experience
                        </Link>
                        <Link href={route("contact")} className="nav-link">
                            Contact
                        </Link>
                        <a
                            href="https:/qubits.hashnode.dev"
                            className="nav-link"
                        >
                            Blog
                        </a>
                        <span
                            className="nav-link flex items-center justify-center w-fit cursor-pointer"
                            onClick={changeLanguage}
                        >
                            <HiLanguage title="Change Language" />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;


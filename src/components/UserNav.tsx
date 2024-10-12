"use client";
import { FaGithub } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/outline"
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import Link from "next/link";

const UserNav = () => {
    const pathname = usePathname();
    const scrollThreshold = 50;
    const onScrollRef = useRef<(() => void) | undefined>(undefined);
    const navRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(false);
    let classes = "fixed top-0 right-0 transition px-16 h-full flex items-end flex-col justify-center z-30 gap-10 bg-secondary text-secondary-foreground lg:bg-transparent lg:text-foreground lg:!translate-x-0";
    if (active) {
        classes += " translate-x-0";
    } else {
        classes += " translate-x-full";
    }
    useEffect(() => {
        if (onScrollRef.current !== undefined) {
            return;
        }

        if (navRef.current === null) {
            return;
        }
        const onScrollFn = function () {
            if (navRef.current === null) {
                return;
            }
            if (document.body.scrollTop >= scrollThreshold || document.documentElement.scrollTop >= scrollThreshold) {
                navRef.current.classList.add('!bg-secondary');
                navRef.current.classList.add('!text-secondary-foreground');
                navRef.current.classList.add('!py-8');
                return;
            }
            navRef.current.classList.remove('!bg-secondary');
            navRef.current.classList.remove('!text-secondary-foreground');
            navRef.current.classList.remove('!py-8');
        }
        window.addEventListener('scroll', () => {
            onScrollRef.current = onScrollFn;
            onScrollFn();
        });
    }, [navRef]);
    return (
        <>
            <nav ref={navRef} className="bg-transparent transition-all p-8 lg:p-16 fixed top-0 left-0 w-full text-right flex items-center justify-between gap-8 z-50">
                <div>
                    {pathname !== "/"
                        ? <Link href="/"><ApplicationLogo /></Link>
                        : <></>
                    }
                </div>
                <div className="flex items-center gap-8">
                    <Link href="/contact" className="hidden lg:inline rounded-lg border-2 border-primary py-1 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">Contact Me</Link>
                    <ThemeSwitcher />
                    <a href="https://github.com/raahimfareed" target="_blank" className="">
                        <FaGithub className="w-4" />
                    </a>
                    <span className="cursor-pointer lg:hidden" onClick={() => setActive(!active)}>
                        <Bars3Icon className="w-4" />
                    </span>
                </div>
            </nav>
            <nav className={classes}>
                <Link
                    href="/"
                    className={"transition-opacity hover:opacity-70" + (pathname === "/" ? " underline decoration-accent decoration-2" : "")}>
                    Home
                </Link>
                <Link
                    href="about"
                    className={"transition-opacity hover:opacity-70" + (pathname === "/about" ? " underline decoration-accent decoration-2" : "")}>
                    About
                </Link>
                <Link
                    href="projects"
                    className={"transition-opacity hover:opacity-70" + (pathname === "/projects" ? " underline decoration-accent decoration-2" : "")}>
                    Projects
                </Link>
                <Link
                    href="contact"
                    className={"transition-opacity hover:opacity-70" + (pathname === "/contact" ? " underline decoration-accent decoration-2" : "")}>
                    Contact
                </Link>
            </nav>
        </>
    )
}

export default UserNav

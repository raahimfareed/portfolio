import Footer from "@/Components/Footer";
import TopNav from "@/Components/TopNav";
import { usePage } from "@inertiajs/react";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect } from "react";
import SplitType from "split-type";

const Main = ({
    children,
}: {
    children?: JSX.Element[] | string | JSX.Element | string[];
}) => {
    const { url } = usePage();
    const pathname = url.pathname;
    // Scroll the page to top on route change
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [pathname]);

    // gsap
    useEffect(() => {
        const subText1 = new SplitType("#subText1");
        const subText2 = new SplitType("#subText2");
        const mainText = new SplitType("#mainText");
        gsap.to(".char", {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1,
        });

        gsap.to("#mainTextUnderline", {
            x: 0,
            delay: 0.9,
            duration: 0.05,
        });

        gsap.to(".opacity-gsap", {
            opacity: 1,
            delay: 1.5,
            duration: 1,
        });
    }, []);

    return (
        <>
            <TopNav />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Main;


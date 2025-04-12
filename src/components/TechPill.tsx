import alpine from "@/images/icons/alpinejs.svg"
import livewire from "@/images/icons/livewire.svg"
import jetpackCompose from "@/images/icons/jetpack-compose.svg"
import jquery from "@/images/icons/jquery.svg"
import bash from "@/images/icons/bash.svg"
import jetbrains from "@/images/icons/jetbrains.svg"
import kotlin from "@/images/icons/kotlin.svg"
import neovim from "@/images/icons/neovim.svg"
import vscode from "@/images/icons/vscode.svg"
import laravel from "@/images/icons/laravel.svg"
import react from "@/images/icons/react.svg"
import archLinux from "@/images/icons/arch-linux.png"
import php from "@/images/icons/php.svg"
import html from "@/images/icons/html.svg"
import css from "@/images/icons/css.svg"
import sass from "@/images/icons/sass.svg"
import javascript from "@/images/icons/javascript.svg"
import typescript from "@/images/icons/typescript.svg"
import python from "@/images/icons/python.svg"
import unity from "@/images/icons/unity.svg"
import tailwindcss from "@/images/icons/tailwindcss.svg"
import mysql from "@/images/icons/mysql.svg"
import postgresql from "@/images/icons/postgresql.svg"
import arduino from "@/images/icons/arduino.svg"
import docker from "@/images/icons/docker.svg"
import figma from "@/images/icons/figma.svg"
import git from "@/images/icons/git.svg"
import jira from "@/images/icons/jira.svg"
import postcss from "@/images/icons/postcss.svg"
import csharp from "@/images/icons/csharp.svg"
import nextjs from "@/images/icons/nextjs.svg"
import prisma from "@/images/icons/prisma.svg"
import django from "@/images/icons/django.svg"
import flask from "@/images/icons/flask.svg"
import vercel from "@/images/icons/vercel.svg"
import pycord from "@/images/icons/pycord.png"
import express from "@/images/icons/express.svg"
import postman from "@/images/icons/postman.svg"
import Image, { StaticImageData } from "next/image"
import { TechType } from "@/types"
const TechPill = ({ type }: { type: TechType; }) => {
    const types: {
        [key: string]: {
            icon: string | StaticImageData;
            text: string;
        }
    } = {
        postman: {
            icon: postman,
            text: "Postman",
        },
        express: {
            icon: express,
            text: "Express",
        },
        pycord: {
            icon: pycord,
            text: "PyCord",
        },
        django: {
            icon: django,
            text: "Django",
        },
        flask: {
            icon: flask,
            text: "Flask",
        },
        prisma: {
            icon: prisma,
            text: "Prisma",
        },
        vercel: {
            icon: vercel,
            text: "Vercel",
        },
        nextjs: {
            icon: nextjs,
            text: "Next.js",
        },
        csharp: {
            icon: csharp,
            text: "C#",
        },
        alpinejs: {
            icon: alpine,
            text: "AlpineJS",
        },
        livewire: {
            icon: livewire,
            text: "Livewire",
        },
        "jetpack-compose": {
            icon: jetpackCompose,
            text: "Jetpack Compose",
        },
        jquery: {
            icon: jquery,
            text: "JQuery",
        },
        bash: {
            icon: bash,
            text: "Bash",
        },
        jetbrains: {
            icon: jetbrains,
            text: "Jetbrains Suite",
        },
        kotlin: {
            icon: kotlin,
            text: "Kotlin",
        },
        neovim: {
            icon: neovim,
            text: "NeoVim",
        },
        vscode: {
            icon: vscode,
            text: "VS Code",
        },
        laravel: {
            icon: laravel,
            text: "Laravel",
        },
        react: {
            icon: react,
            text: "ReactJS",
        },
        archlinux: {
            icon: archLinux,
            text: "Arch Linux",
        },
        php: {
            icon: php,
            text: "PHP"
        },
        html: {
            icon: html,
            text: "HTML"
        },
        css: {
            icon: css,
            text: "CSS"
        },
        sass: {
            icon: sass,
            text: "Sass"
        },
        javascript: {
            icon: javascript,
            text: "JavaScript"
        },
        typescript: {
            icon: typescript,
            text: "TypeScript"
        },
        python: {
            icon: python,
            text: "Python"
        },
        unity: {
            icon: unity,
            text: "Unity"
        },
        tailwindcss: {
            icon: tailwindcss,
            text: "TailwindCSS"
        },
        mysql: {
            icon: mysql,
            text: "MySQL"
        },
        postgresql: {
            icon: postgresql,
            text: "PostgreSQL"
        },
        arduino: {
            icon: arduino,
            text: "Arduino"
        },
        docker: {
            icon: docker,
            text: "Docker"
        },
        figma: {
            icon: figma,
            text: "Figma"
        },
        git: {
            icon: git,
            text: "Git"
        },
        jira: {
            icon: jira,
            text: "Jira"
        },
        postcss: {
            icon: postcss,
            text: "PostCSS"
        },
    };

    if (type in types) {
        return (
            <span className="rounded px-1 gap-1 !bg-secondary !text-secondary-foreground text-white inline-flex items-center justify-center">
                <Image
                    alt={types[type].text}
                    src={types[type].icon}
                    className="h-4 w-4" />
                {types[type].text}
            </span>
        )
    }

    return (
        <span className="rounded py-0.5 px-1 gap-1 capitalize !bg-secondary !text-secondary-foreground text-white inline-flex items-center justify-center">
            {type}
        </span>
    )

}

export default TechPill;

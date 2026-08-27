import { StaticImageData } from "next/image";

export interface Theme {
    [key: string]: {
        [key: string]: string;
    }
}

export interface Project {
    image?: StaticImageData;
    altImage?: StaticImageData;
    name: string;
    shortDescription?: string;
    description: string;
    notice?: string;
    url?: string;
    gitUrl?: string;
    techStack?: TechType[];
    isFeatured?: boolean;
}

export type PreferredTech =
  | "postman"
  | "express"
  | "pycord"
  | "django"
  | "flask"
  | "prisma"
  | "vercel"
  | "nextjs"
  | "csharp"
  | "alpinejs"
  | "livewire"
  | "jetpack-compose"
  | "jquery"
  | "bash"
  | "jetbrains"
  | "kotlin"
  | "neovim"
  | "vscode"
  | "laravel"
  | "react"
  | "archlinux"
  | "php"
  | "html"
  | "css"
  | "sass"
  | "javascript"
  | "typescript"
  | "python"
  | "unity"
  | "tailwindcss"
  | "mysql"
  | "postgresql"
  | "arduino"
  | "docker"
  | "figma"
  | "git"
  | "jira"
  | "postcss";

export type TechType = PreferredTech | (string & {});

export interface PostMeta {
    title: string;
    description?: string;
    date: string;
    updated?: string;
    tags?: string[];
    cover?: string;
    coverAlt?: string;
    featured?: boolean;
    draft?: boolean;
}

export interface PostSummary extends PostMeta {
    slug: string;
    readingTime: number;
}

export interface Heading {
    id: string;
    text: string;
    level: 2 | 3;
}

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Theme {
    [key: string]: {
        [key: string]: string;
    }
}

export interface Project {
    image?: StaticImageData;
    name: string;
    description: string | ReactNode;
    url?: string;
    techStack?: TechType[];
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

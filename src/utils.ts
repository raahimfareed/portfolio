import { PrismaClient } from "@prisma/client";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    root.dataset.theme = themeName;
}

export const cleanString = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '_');
}

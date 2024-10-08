import { ClassValue, clsx } from "clsx";
import { SyntheticEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Theme } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    root.dataset.theme = themeName;
}

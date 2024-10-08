import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    root.dataset.theme = themeName;
}

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const changeTheme = (themeName: string) => {
    const root = document.documentElement;
    root.dataset.theme = themeName;
}

export const changeStyle = (styleName: string) => {
  document.documentElement.dataset.style = styleName;
};

export const cleanString = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '_');
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

export const formatDate = (iso: string) => {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

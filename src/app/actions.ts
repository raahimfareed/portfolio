"use server"
import { cookies } from "next/headers";


export async function setStyle(style: string) {
  console.log("Setting style", style);
  cookies().set("style", style);
}

export async function getStyle() {
  const style = cookies().get('style');
  console.log("Getting Style", style?.value);
  return style?.value ?? "";
}

export async function setTheme(theme: string) {
  cookies().set('theme', theme);
}

export async function getTheme() {
  const theme = cookies().get('theme');
  return theme?.value ?? "";
}

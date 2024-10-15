"use server"

import { cookies } from "next/headers";

export async function setTheme(theme: string) {
  cookies().set('theme', theme);
}


export async function getTheme() {
  const theme = cookies().get('theme');
  return theme?.value ?? "";
}

export async function login(formData: FormData) {
  // const email = formData.get('email');
}

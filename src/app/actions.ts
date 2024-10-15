"use server"
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.AUTH_SECRET)

export async function setTheme(theme: string) {
  cookies().set('theme', theme);
}

export async function getTheme() {
  const theme = cookies().get('theme');
  return theme?.value ?? "";
}

// eslint-disable-next-line
export async function encodeAndSign(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7 days')
    .sign(key)
}

export async function decodeAndVerifySignature(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });

  return payload;
}

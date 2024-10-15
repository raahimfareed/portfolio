import NextAuth from "next-auth"

const handler = NextAuth({
  providers: []
})

export const GET = handler;
export const POST = handler;


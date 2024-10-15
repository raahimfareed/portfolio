import { NextRequest, NextResponse } from "next/server";
import { decodeAndVerifySignature, encodeAndSign } from "./app/actions";

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;

  if (!session) return NextResponse.redirect(new URL('/admin', request.url));

  const parsed = await decodeAndVerifySignature(session);
  const daysToExpire = 7;
  const expires = new Date(Date.now() + (daysToExpire * 24 * 60 * 60 * 1000)).getTime();
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encodeAndSign(parsed),
    httpOnly: true,
    expires: expires
  });

  return res;
}
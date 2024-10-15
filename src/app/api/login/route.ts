import { prisma } from "@/utils";
import { LoginValidationSchema } from "@/validation-schemas";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt"
import { encodeAndSign } from "@/app/actions";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "Invalid request body"
    }, {
      status: 500
    })
  }
  let validatedData;
  try {
    validatedData = LoginValidationSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.flatten() }, {
        status: 400
      });
    }
  }
  let user;
  try {
    user = await prisma.user.findFirst({
      where: {
        email: validatedData?.email
      }
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "An error occurred" }, {
      status: 500
    });
  }

  if (user === null) {
    return NextResponse.json({
      error: "Incorrect credentials",
    }, {
      status: 401
    });
  }

  const passwordsMatch = await bcrypt.compare(validatedData?.password as string, user.password);

  if (!passwordsMatch) {
    return NextResponse.json({
      error: "Incorrect credentials",
    }, {
      status: 401
    });
  }

  const daysToExpire = 7;
  const expires = new Date(Date.now() + (daysToExpire * 24 * 60 * 60 * 1000));
  const session = await encodeAndSign({ email: user.email, name: user.name });
  cookies().set('session', session, { expires, httpOnly: true });
  return NextResponse.json({ message: "Logged In" }, {
    status: 201
  })
}
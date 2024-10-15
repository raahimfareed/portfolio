import { prisma } from "@/utils";
import { LoginValidationSchema } from "@/validation-schemas";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
  return NextResponse.json({ error: "An error occurred" }, {
    status: 500
  });
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
    return NextResponse.json({ error: "User not found" }, {
      status: 404
    });
  }
  return NextResponse.json({ user })
}
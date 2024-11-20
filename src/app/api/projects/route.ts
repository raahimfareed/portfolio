import { NextResponse } from "next/server";
import { z } from "zod";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";
import { ProjectValidationSchema } from "@/validation-schemas";
import { prisma } from "@/utils";

export async function GET() {
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const authToken = (request.headers.get('authorization') || '').split("Bearer ").at(1)
  const envAuth = process.env.PERSONAL_TOKEN;
  if (authToken !== envAuth) {
      return NextResponse.json({ error: "You're not authorized to perform this operation" }, {
        status: 403
      });
  }
  let body;
  try {
    body = await request.formData()
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid Form Data" }, {
      status: 400
    });
  }

  const bodyObject: Record<string, any> = {};
  body.forEach((value, key) => {
    bodyObject[key] = value;
  });

  let validatedData;
  try {
    validatedData = ProjectValidationSchema.parse(bodyObject);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, {
        status: 400
      });
    }
  }

  const file = body.get('image') as File;
  const uniqueFileName = `${uuidv4()}.${file.name.split('.').pop()}`;
  let result;
  try {
    result = await put(uniqueFileName, file.stream(), {
      access: 'public'
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
  }

  try {
    const project = await prisma.project.create({
      data: {
        name: validatedData?.name as string,
        description: validatedData?.description as string,
        url: validatedData?.url,
        image: result.url
      }
    });
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create project." }, { status: 500 });
  }
}

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const Project = zfd.formData({
  name: zfd.text(),
  description: zfd.text(),
  url: zfd.text().optional(),
  image: zfd
    .file()
    .refine((file) => file.size < 5000000, {
      message: "File can't be bigger than 5MBs."
    })
    .refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type), {
      message: "File format must be either jpg, jpeg, png or webp."
    })
});

export async function GET() {
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  let body;
  try {
    body = await request.formData()
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid Form Data" }, {
      status: 400
    });
  }

  // eslint-disable-next-line
  const bodyObject: Record<string, any> = {};
  body.forEach((value, key) => {
    bodyObject[key] = value;
  });

  let validatedData;
  try {
    validatedData = Project.parse(bodyObject);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, {
        status: 400
      });
    }
  }

  // const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

  const file = body.get('image') as File;
  const uniqueFileName = `${uuidv4()}.${file.name.split('.').pop()}`;
  try {
    await put(uniqueFileName, file.stream(), {
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
        image: uniqueFileName
      }
    });
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create project." }, { status: 500 });
  }
}

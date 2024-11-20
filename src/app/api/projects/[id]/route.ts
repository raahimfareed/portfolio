import { NextResponse } from "next/server";
import { prisma } from "@/utils";
import { ProjectUpdateValidationSchema } from "@/validation-schemas";
import { z } from "zod";

export async function GET(request: Request, { params }: { params: { id: string }}) {
  const project = await prisma.project.findUnique({
    where: {
      id: +(params.id.trim())
    }
  });

  if (project === null) {
    return NextResponse.json({ error: "Project not found" }, {
      status: 404
    });
  }

  return NextResponse.json(project);
}

export async function PATCH(request: Request, { params }: { params: { id: string }}) {
  const authToken = (request.headers.get('authorization') || '').split("Bearer ").at(1)
  const envAuth = process.env.PERSONAL_TOKEN;
  if (authToken !== envAuth) {
      return NextResponse.json({ error: "You're not authorized to perform this operation" }, {
        status: 403
      });
  }
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
    validatedData = ProjectUpdateValidationSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.flatten() }, {
        status: 400
      });
    }
  }

  
  try {
    const updatedProject = await prisma.project.update({
      where: { id: +params.id },
      // @ts-expect-error some type error even though it works fine
      data: validatedData
    });
    return NextResponse.json(updatedProject);
  // eslint-disable-next-line
  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    }, {
      status: 500
    })
  } 
}

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  const authToken = (request.headers.get('authorization') || '').split("Bearer ").at(1)
  const envAuth = process.env.PERSONAL_TOKEN;
  if (authToken !== envAuth) {
      return NextResponse.json({ error: "You're not authorized to perform this operation" }, {
        status: 403
      });
  }
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

  if (!body.confirmation) {
    return NextResponse.json({
      message: "Unable to delete the project"
    }, {
      status: 400
    })
  }

  try {
    const deletedProject = await prisma.project.delete({
      where: { id: +params.id }
    })
    return NextResponse.json(deletedProject);
  // eslint-disable-next-line
  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    }, {
      status: 500
    })
  }
}

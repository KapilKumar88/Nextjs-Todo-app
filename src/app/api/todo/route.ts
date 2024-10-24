"use server";

import { sendApiResponse } from "@/lib/utils";
import { createTodo } from "@/services/todo-service";
import { getUserDetailByClerkID } from "@/services/user-service";
import { getAuth } from "@clerk/nextjs/server";
import { TodoStatus } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (userId == null) {
      return Response.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const getUserDetails = await getUserDetailByClerkID(userId);

    if (getUserDetails?.id == null) {
      return Response.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const payload = await req.json();
    await createTodo({
      title: payload.title,
      description: payload.description,
      status: payload.status as TodoStatus,
      userId: getUserDetails?.id,
    });

    return sendApiResponse(true, 201, "Todo created successfully", null);
  } catch (error) {
    return sendApiResponse(false, 500, "Internal server error", null);
  }
}

export async function GET(req: Request) {
  try {
    console.log(req, ">>>>>>>>>>>>>>>>>>>>>>");
  } catch (error) {}
}

export async function PATCH(req: Request) {
  try {
    console.log(req, ">>>>>>>>>>>>>>>>>>>>>>");
  } catch (error) {}
}

export async function DELETE(req: Request) {
  try {
    console.log(req, ">>>>>>>>>>>>>>>>>>>>>>");
  } catch (error) {}
}

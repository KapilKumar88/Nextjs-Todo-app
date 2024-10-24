import 'server-only';

import { prisma } from "@/lib/dbConnection";
import { User } from "@prisma/client";

export const createUser = async (payload: {
  name: string;
  email: string;
  clerkUserId: string;
  createdAt: Date;
}): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      clerkUserId: payload.clerkUserId,
      createdAt: payload.createdAt,
    },
  });

  return user;
};


export const getUserDetailByClerkID = async (
  clerkUserId: string
): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkUserId,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by clerkUserId", error);
    return null;
  }
};

export const deleteUser = () => {
  return {
    name: "John Doe",
    email: "5v4rK@example.com",
  };
};

export const updateUser = () => {
  return {
    name: "John Doe",
    email: "5v4rK@example.com",
  };
};

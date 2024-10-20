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

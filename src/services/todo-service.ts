import 'server-only';

import { prisma } from "@/lib/dbConnection";
import { Todo, TodoStatus, User } from "@prisma/client";

/**
 * Creates a new Todo item.
 *
 * @param {Object} data - The data for the new Todo item.
 * @param {string} data.title - The title of the Todo item.
 * @param {string} data.description - The description of the Todo item.
 * @param {string} data.status - The status of the Todo item. One of:
 *   - "TODO"
 *   - "IN_PROGRESS"
 *   - "DONE"
 * @param {string} data.userId - The ID of the User who owns this Todo item.
 * @returns {Promise<Todo>} A promise that resolves with the newly created Todo item.
 */

export const createTodo = async ({
  title,
  description,
  status,
  userId,
}: {
  title: string;
  description: string;
  status: TodoStatus;
  userId: User["clerkUserId"];
}): Promise<Todo> => {
  console.log(title,
    description,
    status,
    userId)
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      status,
      userId,
    },
  });

  return todo;
};

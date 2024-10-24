import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be 50 characters or less"),
  description: z
    .string()
    .max(200, "Description must be 200 characters or less")
    .optional(),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"], "Invalid status"),
});

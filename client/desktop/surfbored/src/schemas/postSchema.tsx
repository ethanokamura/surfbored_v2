import { z } from "zod";

export const CreatePostSchema = z.object({
  board_id: z.string().uuid("Invalid Board ID"),
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().max(1000).optional(),
  link: z.string().url("Invalid URL format").optional(),
});

export type CreatePostInput = z.infer<typeof CreatePostSchema>;
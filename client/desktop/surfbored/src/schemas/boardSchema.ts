import { z } from "zod";

export const CreateBoardSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().max(1000).optional(),
  photo_url: z.string().url("Invalid URL format").optional(),
});

export type CreateBoardInput = z.infer<typeof CreateBoardSchema>;
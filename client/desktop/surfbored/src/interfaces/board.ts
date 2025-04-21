import { Post } from "./post";

export type Board = {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  likedBy: string[];
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
  private: boolean;
  collaborators: string[];
  members: string[];
}

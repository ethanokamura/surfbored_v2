export type Post = {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  likedBy: string[];
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
  memories: Memory[]
}

export type Tag = {
  name: string;  // unique
  usage: number;  // quick access
}

export type Memory = {
  id: string;
  postId: string;
  title: string;
  description: string;
  photoUrl: string;
  createdAt: Date;
}
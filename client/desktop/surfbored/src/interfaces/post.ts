export type Post = {
  post_id: string;
  author_id: string;
  board_id: string;
  title: string;
  description?: string;
  link?: string;
  photo_url?: string;
  created_at: string;
  updated_at: string;
};

export type Tag = {
  tag_id: number;
  name: string;
};

export type PostTag = {
  post_id: string;
  tag_id: number;
};

export type Reaction = {
  reaction_id: number;
  emoji: string;
  name: string;
};

export type PostReaction = {
  user_id: string;
  post_id: string;
  reaction_id: number;
  created_at: string;
};

export type FormattedPost = {
  post_id: string;
  author_id: string;
  board_id: string;
  title: string;
  description?: string;
  link?: string;
  photo_url?: string;
  created_at: string;
  updated_at: string;
  tags: Tag[];
  reactions: Reaction[];
  height: number;
}
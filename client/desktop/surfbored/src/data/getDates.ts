import { Reaction, Tag, Post, PostTag, PostReaction } from "@/interfaces/post";
import jsonData from "./dates.json";

// Load and parse JSON
export const data = JSON.parse(JSON.stringify(jsonData)) as {
  posts: Post[];
  tags: Tag[];
  post_tags: PostTag[];
  reactions: Reaction[];
  post_reactions: PostReaction[];
};

// Example usage:
console.log('First post title:', data.posts[0].title);

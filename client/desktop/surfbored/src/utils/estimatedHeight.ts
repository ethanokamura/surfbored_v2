// utils/estimatePostCardHeight.ts
import type { Post, Tag, Reaction, FormattedPost } from '@/interfaces/post';

export const estimatePostCardHeight = (
  post: Post,
  tags: Tag[],
  reactions: Reaction[],
  scale = 1
) => {
  let height = 32; // base padding, margin, etc.

  if (post.photo_url) height += 300;
  height += 30; // title
  height += 60; // description
  if (tags.length > 0) height += 40;
  if (reactions.length > 0) height += 30;

  return height * scale;
};

export const distributePostsByHeight = (posts: FormattedPost[], columnCount: number) => {
  const columns: FormattedPost[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);

  for (const post of posts) {
    const shortestIndex = heights.indexOf(Math.min(...heights));
    columns[shortestIndex].push(post);
    heights[shortestIndex] += post.height;
  }

  return columns;
};

import { Reaction, Tag, Post, PostTag, PostReaction } from "@/interfaces/post";
export const posts: Post[] = [
  {
    post_id: "1a",
    author_id: "user123",
    board_id: "board789",
    title: "Jazz Night & Dessert Tasting",
    description: "Hit up a jazz lounge and finish with a dessert flight at a nearby cafe.",
    link: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    post_id: "2b",
    author_id: "user456",
    board_id: "board321",
    title: "Botanical Garden Date",
    description: "Wander through blooming gardens and enjoy the fresh air together.",
    link: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    post_id: "3c",
    author_id: "user789",
    board_id: "board654",
    title: "Arcade Throwback",
    description: "Compete in retro games and see who’s got the best high score.",
    link: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const tags: Tag[] = [
  { tag_id: 1, name: "romantic" },
  { tag_id: 2, name: "nightdate" },
  { tag_id: 3, name: "outdoors" },
  { tag_id: 4, name: "foodie" },
  { tag_id: 5, name: "fun" },
];

export const postTags: PostTag[] = [
  { post_id: "1a", tag_id: 1 },
  { post_id: "1a", tag_id: 4 },
  { post_id: "1a", tag_id: 2 },
  { post_id: "2b", tag_id: 1 },
  { post_id: "2b", tag_id: 3 },
  { post_id: "3c", tag_id: 5 },
];

export const reactions: Reaction[] = [
  { reaction_id: 1, emoji: "😍", name: "love" },
  { reaction_id: 2, emoji: "😂", name: "funny" },
  { reaction_id: 3, emoji: "🔥", name: "hot" },
  { reaction_id: 4, emoji: "💡", name: "clever" },
];

export const postReactions: PostReaction[] = [
  {
    user_id: "user999",
    post_id: "1a",
    reaction_id: 1,
    created_at: new Date().toISOString(),
  },
  {
    user_id: "user123",
    post_id: "3c",
    reaction_id: 2,
    created_at: new Date().toISOString(),
  },
  {
    user_id: "user456",
    post_id: "2b",
    reaction_id: 1,
    created_at: new Date().toISOString(),
  },
];

import { data } from "@/data/getDates";

export function getTags(postId: string) {
  if (!data.post_tags) return [];
  const relatedTags = data.post_tags
    .filter((pt) => pt.post_id === postId)
    .map((tags) => tags.tag_id);
  return data.tags.filter(tag => relatedTags.includes(tag.tag_id));
}

export function getReactions(postId: string) {
  if (!data.post_reactions) return [];
  const postReactions = data.post_reactions
    .filter((pr) => pr.post_id === postId)
    .map((reaction) => reaction.reaction_id);
  return data.reactions.filter(reaction => postReactions.includes(reaction.reaction_id));
}
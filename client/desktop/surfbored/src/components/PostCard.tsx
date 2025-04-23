import { Post, Reaction, Tag } from "@/interfaces/post";

export default function PostCard({ post, tags, reactions } : { post: Post, tags: Tag[], reactions: Reaction[] }) {
  return (
    <button className="card break-inside-avoid h-fit hover:scale-105 ring-surface m-0 flex flex-col text-start gap-4 w-96 transition-all duration-300 ease-in-out">
      {post.photo_url && (
        <img src={post.photo_url} width={400} height={300} className="rounded w-full" alt="Random Unsplash Image" />
      )}
      <h1 className="text-text text-xl my-1">{post.title}</h1>
      <p className="text-base">{post.description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag.tag_id} className="rounded-radius text-sm text-text2 bg-surface px-2 py-1">{tag.name}</span>
          ))}
        </div>
      )}
      {reactions.length > 0 && (
        <div className="flex flex-wrap w-full justify-end gap-2">
          {reactions.map(reaction => (
            <span key={reaction.reaction_id} className="text-sm text-end">{reaction.emoji}</span>
          ))}
        </div>
      )}
    </button>
  )
}
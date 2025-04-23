import PostCard from '../PostCard';
import { FormattedPost } from '@/interfaces/post';
import { motion } from "motion/react";

type ColumnProps = {
  i: number;
  x: number;
  width: number;
  posts: FormattedPost[];
}

export default function Column({i, x, width, posts} : ColumnProps) {

  return (
    <motion.div
      key={`column-${i}`}
      layout
      style={{ position: 'absolute', width: width }}
      initial={{ opacity: 0, y: 20, x: x }}
      animate={{ opacity: 1, y: 0, x: x }}
      exit={{ opacity: 0, y: 20, x: x }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
        layout: { type: 'spring', stiffness: 150, damping: 25 },
        x: { type: 'spring', stiffness: 200, damping: 30, duration: 0.6 },
      }}
      className="flex flex-col gap-4"
    >
      {posts.map((post) => (
        <PostCard
          key={post.post_id}
          post={post}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
    </motion.div>
  );
}
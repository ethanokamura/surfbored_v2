import { estimatePostCardHeight, distributePostsByHeight } from '@/utils/estimatedHeight';
import { getTags, getReactions } from '@/utils/getPostData';
import { Post } from '@/interfaces/post';
import { useContainerWidth } from '@/hooks/useContainerWidth';
import { AnimatePresence } from "motion/react";
import { calculateColumnPosition } from '@/utils/columnPosition';
import Column from './Column';

const getColumnCount = (width: number): number => {
  if (width < 832) return 1;
  if (width < 1232) return 2;
  return 3;
};

// Fixed width of each PostCard in pixels
const CARD_WIDTH = 384; // 24rem * 16px/rem
const COLUMN_GAP = 16; // Assuming gap-4 is 1rem

export const MasonryLayout = ({ posts }: { posts: Post[] }) => {
  const [containerRef, width] = useContainerWidth();
  const columnCount = getColumnCount(width);

  const postsWithHeights = posts.map((post) => {
    const tags = getTags(post.post_id);
    const reactions = getReactions(post.post_id);
    const height = estimatePostCardHeight(post, tags, reactions);
    return { ...post, height, tags, reactions };
  });

  const columns = distributePostsByHeight(postsWithHeights, columnCount);

  const shouldHideColumn = (index: number) => {
    if (columns.length === 3 && width < 1232) return index === 2;
    if (columns.length >= 2 && width < 832) return index >= 1;
    return false;
  };

  return (
    <div
      ref={containerRef}
      className="relative pb-40 w-full"
    >
      <AnimatePresence initial={false}>
        {columns.map((posts, index) => {
          if (shouldHideColumn(index)) return null;

          const numVisibleColumns = columns.filter(c => c !== null).length;
          const targetX = calculateColumnPosition({
            index,
            numVisibleColumns,
            containerWidth: width,
            cardWidth: CARD_WIDTH,
            columnGap: COLUMN_GAP,
          });

          return <Column key={`column-${index}`} i={index} x={targetX} width={CARD_WIDTH} posts={posts} />;
        })}
      </AnimatePresence>
    </div>
  );
};

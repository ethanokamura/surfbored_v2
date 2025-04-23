import { FaMagnifyingGlass } from "react-icons/fa6";
import { data } from "@/data/getDates";
import { getReactions, getTags } from '@/utils/getPostData';
import PostCard from '@/components/PostCard';
import { MasonryLayout } from '@/components/masonry/PostMasonry';


export default function Board() {
  const randomPost = data.posts[Math.floor(Math.random() * data.posts.length)];

  return(
  
    <div className="w-full h-screen pt-20 flex flex-col items-center gap-15 overflow-y-scroll">
      <div>
        <h1 className="my-1">Date Night 😍</h1>
        <p>A list of all our date night ideas!</p>
        <span className="text-accent">@ethanokamura</span>
      </div>
      <div className="card-bg">
        <PostCard
          key={randomPost.post_id}
          post={randomPost}
          tags={getTags(randomPost.post_id)}
          reactions={getReactions(randomPost.post_id)}
        />
      </div>
      <div className="space-y-5 relative w-full">
        <h2 className="text-center">More Date Night Activities</h2>
        <div className="flex fixed right-10 z-10 top-5 items-center gap-2 text-text2">
          <FaMagnifyingGlass/>
          <span>Search</span>
        </div>
        <MasonryLayout posts={data.posts} />
        {/* <div className="h-full flex flex-wrap gap-4 justify-center pb-40">
          {data.posts.map((post)=> (
              <PostCard 
              key={post.post_id}
              post={post}
              tags={getTags(post.post_id)}
              reactions={getReactions(post.post_id)}
            />
          ))}
        </div> */}
      </div>
    </div>

  )
}

import { FaMagnifyingGlass } from "react-icons/fa6";
import { dates } from "../../data/dates.json";
import { HiHeart } from "react-icons/hi";

export default function Board() {
  const randomDate = dates[Math.floor(Math.random() * dates.length)];

  return(
  
    <div className="w-full h-screen pt-20 flex flex-col items-center gap-15 overflow-y-scroll">
      <div>
        <h1 className="my-1">Date Night 😍</h1>
        <p>A list of all our date night ideas!</p>
        <span className="text-accent">@ethanokamura</span>
      </div>
      <div className="card-bg">
        <Activity {...randomDate} />
      </div>
      <div className="space-y-5 relative">
        <h2 className="text-center">More Date Night Activities</h2>
        <div className="flex fixed right-10 z-10 top-5 items-center gap-2 text-text2">
          <FaMagnifyingGlass/>
          <span>Search</span>
        </div>
        <div className="h-full flex flex-wrap gap-4 justify-center pb-40">
          {dates.map((date)=> (
            <Activity {...date} />
          ))}
        </div>
      </div>
    </div>

  )
}

type ActivityProps = {
  title: string;
  description: string;
  emoji: string;
  hashtags: string[];
  likes: number;
}

function Activity({title, description, emoji, hashtags, likes} : ActivityProps) {
  return (
    <button className="card hover:ring-2 hover:scale-105 ring-accent m-0 flex flex-col text-start gap-4 w-96">
      <h1 className="text-text text-xl my-1">{title} {emoji}</h1>
      <p className="text-base">{description}</p>
      <div className="flex flex-wrap gap-2">
        {hashtags.map(hashtag => (
          <span className="text-sm text-text2 bg-surface px-2 py-1">{hashtag}</span>
        ))}
      </div>
      <div className="flex items-center justify-end w-full text-accent gap-2">
        <span className="text-xs">{likes}</span>        
        <HiHeart/>
      </div>
    </button>
  )
}

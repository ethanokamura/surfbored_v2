
import { BiCompass, BiHeart } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { PiPlus } from "react-icons/pi";

export default function SideBar() {


  return (
    <div className="h-screen flex flex-col justify-between max-w-96 min-w-64 p-4 bg-surface">
      {/* <div className="card flex items-center w-full justify-between">
        <h1 className="text-xl my-1">24 <span className="text-text2">Friends</span></h1>
        <button className="px-4 m-0">
          <BiCheck/>
        </button>
      </div>
      <div className="card w-full">
        <h1 className="text-lg my-1 text-text3">about me</h1>
        <p className="text-base">Explore new activities: hike a trail, cook something new, learn a dance, sketch a scene, write a poem, or spin the wheel to choose your next move!</p>
      </div> */}
      <div className="h-full space-y-5">
        <h1 className="text-center">Surf<span className="text-accent">Bored</span></h1>
        <hr/>
        <div className="w-full" >
          <ul className="space-y-2">
            <li className="hover:ring-2 ring-accent py-2 px-4 bg-background-2 text-text2 rounded-radius flex justify-between items-center">
              <span>Explore</span>
              <BiCompass/>
            </li>
            <li className="hover:ring-2 ring-accent py-2 px-4 bg-background-2 text-text2 rounded-radius flex justify-between items-center">
              <span>Favorites</span>
              <BiHeart/>
            </li>
            <li className="hover:ring-2 ring-accent py-2 px-4 bg-background-2 text-text2 rounded-radius flex justify-between items-center">
              <span>Friends</span>
              <BsPeople/>
            </li>
          </ul>
        </div>
        <hr/>
        <div className="w-full h-fit">
          <div className="flex items-center justify-between">
            <h1 className="text-lg my-1">My Boards</h1>
            <PiPlus/>
          </div>
          <ul className="space-y-1">
            <li className="text-text text-base">😍 Date Night</li>
            <li className="text-text2 text-base">🍿 Movies</li>
            <li className="text-text2 text-base">🌲 Hikes</li>
            <li className="text-text2 text-base">🍗 Food</li>
          </ul>
        </div>
        <div className="w-full h-fit">
          <h1 className="text-lg my-1">Collab Boards</h1>
          <ul className="space-y-1">
            <li className="text-text2 text-base">🌊 Beaches</li>
            <li className="text-text2 text-base">🌲 Mountain Biking</li>
            <li className="text-text2 text-base">💻 Projects</li>
            <li className="text-text2 text-base">🎱 Night Out</li>
          </ul>
        </div>
      </div>
      <div className="card flex w-full gap-2 items-center">
        <div className="p-4 bg-background rounded w-fit">
          <GiPalmTree size={16} className="text-text2"/>
        </div>
        <div className="flex flex-col overflow-x-hidden">
          <span className="text-base text-accent">@ethanokamura</span>
          <span className="text-sm text-text2">Do not disturb</span>
        </div>
        <div>
          <FaEllipsisH/>
        </div>
      </div>
    </div>
  );
}
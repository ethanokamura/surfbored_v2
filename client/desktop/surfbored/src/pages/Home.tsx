import SideBar from "@/components/SideBar";
import Board from "./boards/Board";

export default function Home() {

  return (
    <div className="flex">
      <SideBar/>
      <Board/>
    </div>
  );
}

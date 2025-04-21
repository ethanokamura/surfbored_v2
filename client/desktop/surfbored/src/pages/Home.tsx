import SideBar from "@/components/SideBar";
import Board from "./boards/Board";
import Waves from "@/components/Waves";

export default function Home() {

  return (
    <div className="flex">
      <SideBar/>
      <Board/>
      <Waves/>
    </div>
  );
}

import CreateBoardForm from "@/components/forms/BoardForm";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CreateBoard() {


  return (
    <main className="flex flex-col items-center relative">
      <Link className="fixed right-10 top-10" to={"/"}>
        <button className="flex items-center px-4 gap-1 ring-destructive hover:bg-destructive text-destructive hover:text-background">
          <FaXmark size={18}/>
          <span>Cancel</span>
        </button>
      </Link>
      <h1>Create a board!</h1>
      <CreateBoardForm/>
    </main>
  );
}
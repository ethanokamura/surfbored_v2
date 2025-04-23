import { signOut } from "@/lib/auth";
import * as config from "@/utils/constants";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  const _signOut = async () => {
    try {
      await signOut();
      navigate("/signin");
    } catch (e) {
      console.error(e);
    }
  }

  return(
    <main className="h-screen overflow-y-scroll">
      <Link to="/">
        <button className="p-2 text-accent hover:text-background">
          <HiHome/>
        </button>
      </Link>
      <h1>{config.title}</h1>
      <Link to={"/signin"}>
        <button>
          Sign In
        </button>
      </Link>
      <button onClick={_signOut}>Sign Out</button>
    </main>
  );
}
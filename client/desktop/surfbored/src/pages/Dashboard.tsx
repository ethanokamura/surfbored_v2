import { signOut } from "@/lib/auth";
import * as config from "@/utils/constants";
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
    <main>
      <main className="h-screen overflow-y-scroll">
        <h1>Hello {config.title}</h1>
        <Link to={"/signin"}>
          <button>
            Sign In
          </button>
        </Link>
      <button onClick={_signOut}>Sign Out</button>
      </main>
    </main>
  );
}
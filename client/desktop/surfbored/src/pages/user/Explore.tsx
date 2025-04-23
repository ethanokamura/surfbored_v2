import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom"

export default function ExplorePage() {


  return (
    <main>
      <Link to="/">
        <button className="p-2 text-accent hover:text-background">
          <HiHome/>
        </button>
      </Link>
      <h1>Explore Page</h1>
    </main>
  );
}
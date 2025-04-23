import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function FavoritesPage() {


  return (
    <main>
      <Link to="/">
        <button className="p-2 text-accent hover:text-background">
          <HiHome/>
        </button>
      </Link>
      <h1>Favorites Page</h1>
    </main>
  );
}
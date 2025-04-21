export default function NavMenu() {


  return (
    <nav className="mx-auto w-fit">
      <ul className="flex gap-4">
        <li className="border-b-2 border-text2 text-text2 p-0 w-24 text-center">Events</li>
        <li className="border-b-2 border-accent text-accent p-0 w-24 text-center">Posts</li>
        <li className="border-b-2 border-text2 text-text2 p-0 w-24 text-center">Chat</li>
      </ul>
    </nav>
  );
}
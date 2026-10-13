import Link from "next/link";
import { FiHome, FiStar, FiMessageCircle, FiUser } from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around bg-white p-4 border-t border-gray-200 z-50">
      <Link href="/" aria-label="Home">
        <FiHome size={24} />
      </Link>

      <span aria-label="Favorites">
        <FiStar size={24} />
      </span>

      <span aria-label="Messages">
        <FiMessageCircle size={24} />
      </span>

      <span aria-label="Profile">
        <FiUser size={24} />
      </span>
    </nav>
  );
}

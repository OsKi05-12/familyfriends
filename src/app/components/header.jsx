import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">FamilyFriends</h1>
      <FiBell size={24} />
    </header>
  );
}

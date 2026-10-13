export default function SearchBar() {
  return (
    <div className="mx-4 my-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search breeds"
          className="w-full rounded-lg p-4 bg-gray-100"
        />
      </div>
    </div>
  );
}

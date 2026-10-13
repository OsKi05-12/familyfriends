export default function BreedCard({ name, image, country }) {
  return (
    <div className="breed-card relative shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <button
        type="button"
        aria-label={`Favorite: ${name}`}
        className="absolute top-2 right-2 text-2xl focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        ⭐
      </button>
      <h2 className="p-2 font-bold text-primary text-[18px]">{name}</h2>
      <p className="px-2 pb-3 text-sm text-gray-500">{country}</p>
    </div>
  );
}

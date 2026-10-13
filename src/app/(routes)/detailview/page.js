import Link from "next/link";
import BottomNav from "../../components/BottomNav";

const DetailView = () => {
  return (
    <main className="p-4 pb-24 max-w-2xl mx-auto">
      <img
        src="/scrappy.jpg"
        alt="Scrappy Doo"
        className="w-full h-64 md:h-96 object-cover rounded-xl mt-4"
      />

      <h1 className="text-2xl font-bold">Scrappy Doo</h1>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-blue-200 text-green-700 px-4 py-2 rounded-full">
          Confident
        </span>

        <span className="bg-pink-300 text-green-700 px-4 py-2 rounded-full">
          Alert
        </span>

        <span className="bg-green-200 text-green-700 px-4 py-2 rounded-full">
          "Anger issues"
        </span>

        <span className="bg-yellow-200 text-green-700 px-4 py-2 rounded-full">
          Goofy
        </span>
      </div>

      <section className="mt-8">
        <h2 className="text-gray-400 text-sm">Breed description</h2>

        <p className="text-gray-600 text-lg mt-2 leading-relaxed">
          Small, sturdy toy breed with a distinctive monkey-like expression and
          shaggy, wiry coat. Known for its confident, terrier-like personality
          despite its small size.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-gray-400 text-sm">Breed history</h2>

        <p className="text-gray-600 text-lg mt-2 leading-relaxed">
          Originating in 17th-century Germany, the Affenpinscher was originally
          bred to catch rats and mice. Today, it is known as a playful and loyal
          companion dog.
        </p>
      </section>

      <Link
        href="/"
        className="inline-block mt-6 text-primary font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        ← Back to ListView
      </Link>
      <BottomNav />
    </main>
  );
};

export default DetailView;

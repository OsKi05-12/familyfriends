import Link from "next/link";
import Logo from "./components/Logo";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import BottomNav from "./components/BottomNav";
import SearchIcon from "./components/SearchIcon";

export default function ListView() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between px-4">
        <SearchIcon />
        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 pb-24">
        <Link href="/detailview">
          <BreedCard
            name="Scrappy Doo"
            image="/scrappy.jpg"
            country="USA, Texas"
          />
        </Link>
        <Link href="/detailview">
          <BreedCard
            name="Cliff The Big Red Dog"
            image="/cliff.jpg"
            country="England, London"
          />
        </Link>
        <Link href="/detailview">
          <BreedCard
            name="Bluey"
            image="/bluey.jpg"
            country="Australia, Sydney"
          />
        </Link>
        <Link href="/detailview">
          <BreedCard
            name="Courage The Cowardly Dog"
            image="/courage.jpg"
            country="USA, Texas"
          />
        </Link>
        <Link href="/detailview">
          <BreedCard name="Droopy" image="/droop.jpg" country="USA, Texas" />
        </Link>
      </div>
      <Logo />
      <BottomNav />
    </>
  );
}

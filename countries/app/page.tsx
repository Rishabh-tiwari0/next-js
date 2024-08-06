"use client";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CountryCard from "./components/CountryCard";

export default function Home() {
  const toggleDarkmode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-[#fafafa] dark:bg-[#202c37] dark:text-white h-[100vh]">
      <Navbar toggledarkmode={toggleDarkmode} />
      <Searchbar />
      <CountryCard />
    </div>
  );
}

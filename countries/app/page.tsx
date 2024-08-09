"use client";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";
import data from "../data.json";
import { useState } from "react";
import { log } from "console";

export default function Home() {
  const [countries, setCountries] = useState(data);
  const [showCountryDetail, setShowCountryDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();

  const toggleDarkmode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-[#fafafa] dark:bg-[#202c37] dark:text-white  pb-14 min-h-[100vh]">
      <Navbar toggledarkmode={toggleDarkmode} />
      {!showCountryDetail && (
        <Searchbar countries={countries} setCountries={setCountries} />
      )}
      {!showCountryDetail && (
        <CountryCard
          countries={countries}
          setSelectedCountry={setSelectedCountry}
          setShowCountryDetail={setShowCountryDetail}
        />
      )}
      {showCountryDetail && (
        <CountryDetail
          setShowCountryDetail={setShowCountryDetail}
          selectedCountry={selectedCountry}
        />
      )}{" "}
    </div>
  );
}

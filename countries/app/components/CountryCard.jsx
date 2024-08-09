import React from "react";

const CountryCard = ({
  countries,
  setSelectedCountry,
  setShowCountryDetail,
}) => {
  return (
    <div className="w-[90vw] mx-auto flex gap-20 flex-wrap mt-10 text-lg justify-evenly">
      {countries.map((country, index) => (
        <div
          className="bg-white shadow-lg rounded-lg mt-2 w-80  dark:bg-[#2b3945] cursor-pointer"
          key={index}
          onClick={() => {
            setSelectedCountry(country);
            setShowCountryDetail(true);
          }}
        >
          <div
            className={`bg-no-repeat bg-center bg-cover w-auto h-[205px] overflow-hidden rounded-t-lg`}
            style={{ backgroundImage: `url(${country.flags.png})` }}
          ></div>
          <div className="py-12 px-4">
            <h1 className="font-bold text-2xl mb-2">{country.name}</h1>
            <div className="flex gap-2">
              <h3 className="font-semibold">Population:</h3>
              <span>{country.population}</span>
            </div>
            <div className="flex gap-2">
              <h3 className="font-semibold">Region:</h3>
              <span>{country.region}</span>
            </div>
            <div className="flex gap-2">
              <h3 className="font-semibold">Capital:</h3>
              <span>{country.capital}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;

import React from "react";

const CountryDetail = ({ setShowCountryDetail, selectedCountry }) => {
  return (
    <div className="w-[80vw] sm:w-[90vw] mx-auto ">
      <button
        onClick={() => {
          setShowCountryDetail(false);
        }}
        className="inline-flex items-center shadow-lg hover:scale-[101%] bg-white dark:bg-[#2b3945] py-1.5  px-8 text-gray-700 rounded-md  dark:text-gray-200 my-14 sm:my-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
        <span className="ml-1 font-bold text-lg">Back</span>
      </button>
      <div className="flex gap-20 flex-col sm:flex-row">
        <img
          src={selectedCountry.flags.png}
          alt={selectedCountry.name}
          className="sm:max-w-[35%] sm:flex-1"
        />
        <div className="sm:flex-1">
          <h1 className="font-bold text-3xl my-6">{selectedCountry.name}</h1>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-0">
            <div className="flex-1 flex flex-col gap-1 sm:gap-3">
              <div className="flex gap-2">
                <h3 className="font-semibold">Native Name:</h3>
                <span>{selectedCountry.nativeName}</span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Population:</h3>
                <span>{selectedCountry.population}</span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Region:</h3>
                <span>{selectedCountry.region}</span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Sub region:</h3>
                <span>{selectedCountry.subregion}</span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Capital:</h3>
                <span>{selectedCountry.capital}</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 sm:gap-3">
              <div className="flex gap-2">
                <h3 className="font-semibold">Top Level Domain:</h3>
                <span>{selectedCountry.topLevelDomain}</span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Currencies:</h3>
                <span>
                  {selectedCountry.currencies.map((c) => c.name).join(", ")}
                </span>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Languages:</h3>
                <span>
                  {selectedCountry.languages.map((l) => l.name).join(", ")}
                </span>
              </div>
            </div>
          </div>
          <div className="sm:flex gap-2 mt-9 sm:mt-14 sm:items-center">
            <h3 className="font-semibold">Border Countries:</h3>
            <div className="flex gap-2 flex-wrap">
              {" "}
              {selectedCountry.borders?.map((border, index) => (
                <button
                  key={index}
                  className="inline-flex items-center shadow-lg hover:scale-[101%] bg-white dark:bg-[#2b3945] py-1.5 px-8 text-gray-700 rounded-md dark:text-gray-200"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;

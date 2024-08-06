"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setShowFilter(false);
  };

  return (
    <div className="flex mt-8 flex-col gap-4 sm:flex-row w-[90vw] mx-auto sm:justify-between">
      <div className="flex gap-2 bg-white dark:bg-[#2b3945] items-center rounded-lg h-12 px-6 py-1 shadow-lg sm:w-[30%]">
        <span>
          <FaSearch className="text-gray-400 dark:text-white" />
        </span>
        <input
          type="text"
          className="bg-white dark:bg-[#2b3945] focus:outline-none focus:border-none"
          placeholder="Search for a country..."
        />
      </div>

      <div className="relative">
        <button
          className="bg-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#2b3945] shadow-lg w-max"
          type="button"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          <span>{selectedRegion}</span>
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        {showFilter && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-12"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {regions.map((region) => (
                <li key={region}>
                  <a
                    href="#"
                    onClick={() => handleRegionClick(region)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

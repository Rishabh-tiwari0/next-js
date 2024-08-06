"use client";
import React, { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = ({ toggledarkmode }) => {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className="w-full h-16 bg-white shadow-md flex items-center justify-between dark:bg-[#2b3945]">
      <h1 className="font-bold text-xl ml-4 sm:text-2xl">
        Where in the world ?
      </h1>
      <span
        onClick={() => {
          toggledarkmode();
          if (darkmode == true) {
            setDarkMode(false);
          } else {
            setDarkMode(true);
          }
        }}
        className="cursor-pointer mr-4 flex gap-2 items-center font-semibold transition-all ease-in-out duration-500"
      >
        {darkmode ? (
          <CiLight className="text-xl font-semibold" />
        ) : (
          <MdOutlineDarkMode className="text-2xl" />
        )}{" "}
        {darkmode ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
};

export default Navbar;

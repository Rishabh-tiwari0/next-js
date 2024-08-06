import React from "react";

const CountryCard = () => {
  return (
    <div className="w-[90vw] mx-auto ">
      <div className="bg-white shadow-lg w-max rounded-lg mt-2">
        <div
          className={`bg-[url(https://flagcdn.com/w320/zw.png)] bg-no-repeat bg-cover w-60 h-36 overflow-hidden`}
        ></div>
        <div className="p-3">
          <h1>Germany</h1>
          <h3>population </h3>
          <h3>region</h3>
          <h3>capital</h3>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;

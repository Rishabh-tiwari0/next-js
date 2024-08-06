// ImageDetail.js
import React from "react";
import { IoClose } from "react-icons/io5";

const ImageDetail = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative bg-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto transition-transform transform scale-100 hover:scale-105">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-gray-600 rounded-full p-2 shadow-lg  hover:text-white hover:bg-red-600 transition-colors"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>
        <div className="flex justify-center mb-4">
          <img
            className="h-auto max-w-full rounded-lg shadow-md"
            src={image.src}
            alt={image.alt}
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {image.alt}
        </h2>
      </div>
    </div>
  );
};

export default ImageDetail;

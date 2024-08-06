"use client";
import { useState } from "react";
import ImageDetail from "../components/ImageDetail";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  const images = [
    {
      src: "https://pagedone.io/asset/uploads/1688025668.png",
      alt: "Gallery image 1",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029344.png",
      alt: "Gallery image 2",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029370.png",
      alt: "Gallery image 3",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029384.png",
      alt: "Gallery image 4",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029394.png",
      alt: "Gallery image 5",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029408.png",
      alt: "Gallery image 6",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029424.jpg",
      alt: "Gallery image 7",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029434.png",
      alt: "Gallery image 8",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688029447.jpg",
      alt: "Gallery image 9",
    },
  ];
  return (
    <>
      <Navbar />

      <div>
        {selectedImage ? (
          <ImageDetail image={selectedImage} onClose={handleClose} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-[100px] w-[90vw] mx-auto">
            {images.map((image, index) => (
              <div key={index} onClick={() => handleClick(image)}>
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;

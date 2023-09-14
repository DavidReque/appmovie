import React from "react";
import { images } from "../movies";

export default function MyPhotos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-7">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={img.src}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
          </div>
        </div>
      ))}
    </div>
  );
}

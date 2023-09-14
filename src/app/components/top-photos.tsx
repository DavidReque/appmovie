import React from "react";
import { images } from "../movies";
import Link from "next/link";

export default function TopPhotos() {

  const imageArray = images.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9">
      {imageArray.map((img, index) => (
        <div key={index}>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full transform transition-transform duration-300 group-hover:scale-105"
              src={img.src}
              alt={`Image ${index}`}
            />
            <Link href='/photos' className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 hover:cursor-pointer">
              <span className="text-white font-bold">Ver imagen</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { images } from "../movies";
import Link from "next/link";

export default function TopPhotos() {

  const imageArray = images.slice(0, 4);

  return (
    <section className="m-8">
      <h4 className="flex justify-center items-center text-center my-8 text-3xl font-medium">Fotos</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9">
      {imageArray.map((img, index) => (
        <div key={index}>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full transform transition-transform duration-300 group-hover:scale-105"
              src={img.src}
              alt={`Image ${index}`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 hover:cursor-pointer">
              <Link href='/photos' className="text-white font-bold">Ver imagen</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

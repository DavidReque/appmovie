import React, { useState } from "react";
import { Movie } from "../types";

type TopMoviesCarouselProps = {
  moviesCarousel: Movie[];
};

export const MyCarousel: React.FC<TopMoviesCarouselProps> = ({ moviesCarousel }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % moviesCarousel.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + moviesCarousel.length) % moviesCarousel.length);
  };

  return (
    <div className="carousel-container">
      <img
        alt={moviesCarousel[currentSlide].title}
        src={`https://image.tmdb.org/t/p/w500${moviesCarousel[currentSlide].backdrop_path}`}
      />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

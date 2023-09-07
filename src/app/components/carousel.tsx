import React, { useState } from "react";
import { Movie } from "../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

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
    <div className="carousel-container relative mx-auto my-7 w-full">
      <Carousel
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Cambia el intervalo de reproducción automática (opcional)
        emulateTouch={true} // Habilita el deslizamiento táctil en dispositivos móviles (opcional)
        showStatus={false} // Oculta el estado del carrusel (opcional)
      >
        {moviesCarousel.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p>
              <span className="bg-transparent bg-opacity-50 text-white text-lg sm:text-2xl font-semibold p-2 absolute bottom-0 left-0">
                {movie.title}
              </span>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

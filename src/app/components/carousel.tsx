import React, { useState } from 'react'
import { type Movie } from '../types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Importa los estilos del carrusel

interface TopMoviesCarouselProps {
  moviesCarousel: Movie[]
}

export const MyCarousel: React.FC<TopMoviesCarouselProps> = ({ moviesCarousel }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

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
          <div key={movie.id} className="relative">
          <div className="border-b">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <p>
            <span className="text-white text-lg sm:text-2xl font-semibold p-2 absolute bottom-0 left-0 w-full">
              {movie.title}
            </span>
          </p>
        </div>

        ))}
      </Carousel>
    </div>
  )
}

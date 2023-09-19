import React, { useState, useEffect } from 'react';
import { Movie } from '../types';
import Filters from './filters';

export default function FiltersMovies() {
  const [activeFilter, setActiveFilter] = useState<string>('streaming');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const URL =
        activeFilter === 'streaming'
          ? `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`;

      try {
        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error('No se pudo obtener la data');
        }

        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [activeFilter]);

  const handleChangeFilter = (filter: string) => {
    setActiveFilter(filter);
    console.log(filter);
  };


  return (
    <div className="mx-8 my-8">
      <h1 className="my-6 text-2xl font-semibold">Películas Populares</h1>
      <Filters activeFilter={activeFilter} onChangeFilter={handleChangeFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full">
            <div className="hover:shadow-xl">
              {movie.backdrop_path && (
                <div className="overflow-hidden p-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="object-cover w-full rounded-t-lg"
                  />
                </div>
              )}
              <div className="pb-3 px-4 flex flex-col items-start">
                <h4 className="font-semibold text-lg">{movie.title}</h4>
                <p className="text-gray-500 text-sm">{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

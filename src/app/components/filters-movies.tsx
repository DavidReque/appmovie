import React, { useState, useEffect } from "react";
import { Movie } from "../types";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/react";

const FiltersMovies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("popular");
  const [movies, setMovies] = useState<Movie[]>([]);

  const router = useRouter()

  useEffect(() => {
    let URL: string;

    if (activeFilter === "popular") {
      URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`;
    } else if (activeFilter === "top_rated") {
      URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`;
    }

    async function fetchMovies() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("No se pudo obtener la data");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [activeFilter]);

  return (
    <div className="mx-8 my-12">
      <div className="w-full flex flex-row flex-wrap gap-4 my-14">
        <Select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          radius='md'
          label="Peliculas"
          placeholder="Selecciona una categoria"
          defaultSelectedKeys={["cat"]}
          className="max-w-[45%]"
        >
          <SelectItem key="popular" value="popular">
            Popular
          </SelectItem>
          <SelectItem key="top_rated" value="top_rated">
            Mejor Calificado
          </SelectItem>
        </Select>
    </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div onClick={() => {
            router.push(`/${movie.id}`);
          }} key={movie.id} className="w-full cursor-pointer">
            {/* Renderiza cada película */}
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
};

export default FiltersMovies;

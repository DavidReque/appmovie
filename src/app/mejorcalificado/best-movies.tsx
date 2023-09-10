'use client'

import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Image, Pagination, Spinner } from "@nextui-org/react";
import { Movie } from "../types";
import {ButtonModal} from "../components/button-modal";

export default function Movies() {
  const [data, setData] = useState<{ results: Movie[] } | null>(null);
  const [page, setPage] = useState<number>(1);

  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=${page}`;

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error('No se pudo obtener la data');
        }

        const responseData = await res.json();

        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  }, [page]); // Agregamos 'page' como dependencia para que se recargue cuando cambie

  // Función para cambiar la página
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="ml-10 mb-12 mr-10">
      {data ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.results.map((movie) => (
              <div key={movie.id} className="w-full">
                <Card className="hover:shadow-xl">
                  {movie.backdrop_path && (
                    <CardBody className="overflow-hidden p-0">
                      <Image
                        alt={movie.title}
                        className="object-cover w-full h-72 rounded-t-lg"
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      />
                    </CardBody>
                  )}
                  <CardHeader className="pb-3 px-4 flex flex-col items-start">
                    <h4 className="font-semibold text-lg">{movie.title}</h4>
                    <p className="text-gray-500 text-sm">{movie.release_date}</p>
                    <ButtonModal title={movie.title} data={movie.overview}/>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-8">
            <Pagination
              isCompact
              showControls
              total={10}
              initialPage={1}
              page={page}
              onChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <Spinner className="mx-72 my-96 text-center" aria-label="Loading..." />        </div>
      )}
    </div>
  );
}

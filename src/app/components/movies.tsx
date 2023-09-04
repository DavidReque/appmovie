'use client'

import { useState, useEffect } from "react";
import { Movie } from "../types";
import {CircularProgress} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Movies() {
    const [data, setData] = useState<{results: Movie[]} | null>(null);
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es`;

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
    }, []);

    return (
        <div className="dark">
            {data ? (
        <Card>{data.results.map(movie => (
            <div key={movie.id}>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{movie.title}</h4>
    </CardHeader>{movie.backdrop_path && (
              <CardBody className="overflow-visible py-2">
              <Image
                alt={movie.title}
                className="object-cover rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}                width={270}
              />
            </CardBody>
            )}
        </div>
        ))}</Card>
      ) : (
        <CircularProgress aria-label="Loading..." />
        )}
        </div>
    );
}

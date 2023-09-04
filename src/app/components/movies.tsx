'use client'

import { useState, useEffect } from "react";
import { Movie } from "../types";

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
        <div>
            {data ? (
        <pre>{data.results.map(movie => (
            <div key={movie.id}>
                <h2>{movie.name}</h2>
{movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.name}
              />
            )}            </div>
        ))}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
        </div>
    );
}

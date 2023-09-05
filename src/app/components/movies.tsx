'use client'

import { useState, useEffect } from "react";
import { Movie } from "../types";
import {CircularProgress, Card} from "@nextui-org/react";
import {TopMovies} from "./top-movies";
import MyNavbar from "./Navbar";

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
            <MyNavbar />
            {data ? (
        <Card>
        <h2 className="font-bold text-large text-center my-5">Top 10 movies</h2>
          <TopMovies movies={data.results.slice(0, 10)}/>
        </Card>
      ) : (
        <CircularProgress className="mx-72 my-96 text-center" aria-label="Loading..." />
      )}
        </div>
    );
}

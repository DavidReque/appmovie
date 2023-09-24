'use client'

import { useState, useEffect } from "react";
import { Movie } from "../types";
import {Spinner, Card} from "@nextui-org/react";
import {TopMovies} from "./top-movies";
import MyNavbar from "./Navbar";
import {MyCarousel} from "./carousel";
import TopPhotos from "./top-photos";
import FiltersMovies from "./filters-movies";
import FilterGeners from "./filters-geners";

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
    <div>
    <MyNavbar />
    <MyCarousel moviesCarousel={data.results.slice(10, 14)}/>
        <Card className="m-8">
            <h2 className="font-bold text-large text-center my-5">Top 10 Peliculas</h2>
            <TopMovies movies={data.results.slice(0, 10)}/>
        </Card>
        <TopPhotos/>
        <FiltersMovies/>
        <FilterGeners/>
    </div>
      ) : (
        <Spinner className="mx-72 my-96 text-center" aria-label="Loading..." />
      )}
        </div>
    );
}

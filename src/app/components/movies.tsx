'use client'

import { useState, useEffect } from "react";

export default function Movies() {
    const [data, setData] = useState<any | null>(null);
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es`;

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
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
        </div>
    );
}

import React, { useState, useEffect } from 'react'
import Genders from './genders'
import { type Movie } from '../types'
import { useRouter } from 'next/navigation'

export default function FilterGeners () {
  const [activeFilter, setActiveFilter] = useState<string>('18')
  const [movies, setMovies] = useState<Movie[]>([])

  const router = useRouter()

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${activeFilter}`

    async function fetchMovies () {
      try {
        const response = await fetch(URL)

        if (!response.ok) {
          throw new Error('No se pudo obtener la data')
        }

        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMovies()
  }, [activeFilter])
  return (
    <section className="mx-8 my-12">
        <h2 className="text-2xl">Generos</h2>
        <Genders activeFilterGender={activeFilter} onChangeFilterGender={setActiveFilter}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {movies.slice(0, 10).map((movie) => (
          <div onClick={() => {
            router.push(`/${movie.id}`)
          }} key={movie.id} className="w-full cursor-pointer">
            {/* Renderiza cada película */}
            <div className="hover:shadow-xl">
                <div className="overflow-hidden p-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="object-cover w-full rounded-t-lg"
                  />
                </div>
              <div className="pb-3 px-4 flex flex-col items-start">
                <h4 className="font-semibold text-lg">{movie.title}</h4>
                <p className="text-gray-500 text-sm">{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

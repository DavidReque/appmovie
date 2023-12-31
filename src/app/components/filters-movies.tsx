import React, { useState, useEffect } from 'react'
import { type Movie } from '../types'
import { useRouter } from 'next/navigation'
import Filters from './filters'

const FiltersMovies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('popular')
  const [movies, setMovies] = useState<Movie[]>([])

  const router = useRouter()

  useEffect(() => {
    let URL: string

    if (activeFilter === 'popular') {
      URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`
    } else if (activeFilter === 'top_rated') {
      URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`
    } else if (activeFilter === 'upcoming') {
      URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`
    } else if (activeFilter === 'now_playing') {
      URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`
    }

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
      <h2 className="text-2xl">Filtros de peliculas</h2>
        <Filters activeFilter={activeFilter} onChangeFilter={setActiveFilter}/>
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

export default FiltersMovies

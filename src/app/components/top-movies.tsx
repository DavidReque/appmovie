import { CardHeader, CardBody, Image } from '@nextui-org/react'
import { type Movie } from '../types'
import { useRouter } from 'next/navigation'

interface TopMoviesProps {
  movies: Movie[]
}

export const TopMovies: React.FC<TopMoviesProps> = ({ movies }) => {
  const router = useRouter()

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-10 mb-12">
            {movies.map((movie, index) => (
              <div key={movie.id}
              className="cursor-pointer"
              onClick={() => {
                router.push(`/${movie.id}`)
              }}>
                {movie.backdrop_path && (
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt={movie.title}
                      className="object-cover rounded-xl"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      width={270}
                    />
                  </CardBody>
                )}
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{index + 1}. {movie.title}</h4>
                </CardHeader>
              </div>
            ))}
          </div></>
  )
}

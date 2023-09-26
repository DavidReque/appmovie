'use client'

import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import SubMenu from './submenu'
import { type PostsProps } from '../types'

async function getMovie (id: string) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es`

  try {
    return await fetch(URL).then(async (res) => await res.json())
  } catch (error) {
    throw new Error('Algo salió mal')
  }
}

const MovieDetails: React.FC<PostsProps> = ({ params }) => {
  const [post, setPost] = useState<any>(null)
  const { id } = params

  useEffect(() => {
    getMovie(id).then((data) => { setPost(data) })
  }, [id])

  return (
    <div>
      <SubMenu/>
      <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-4">
        <CardBody>
          <div className="flex justify-center mb-4">
            <Image
              alt={post?.title}
              className="object-cover rounded-xl"
              src={`https://image.tmdb.org/t/p/w500${post?.backdrop_path}`}
              width={270}
              height={405}
            />
          </div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">{post?.title}</h4>
            <small className="text-default-500">{post?.overview}</small>
          </CardHeader>
        </CardBody>
      </Card>
    </div>
    </div>
  )
}

export default MovieDetails

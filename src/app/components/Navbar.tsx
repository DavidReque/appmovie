'use client'

import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, Input } from '@nextui-org/react'
import SearchIcon from './SearchIcon'
import { type Movie } from '../types'
import { useRouter } from 'next/navigation'

export default function MyNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [suggestions, setSuggestions] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`

  useEffect(() => {
    if (query) {
      setLoading(true)

      // Realiza la solicitud a la API de TMDb para buscar películas
      const searchMovies = async () => {
        try {
          const response = await fetch(URL)

          if (!response.ok) {
            throw new Error('No se pudo completar la búsqueda')
          }

          const data = await response.json()

          if (data.results) {
            setSuggestions(data.results)
          } else {
            setSuggestions([])
          }
          setLoading(false)
        } catch (error) {
          console.error('Error de búsqueda:', error)
          setLoading(false)
        }
      }

      searchMovies()
    } else {
      setSuggestions([])
    }
  }, [query, URL])

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p>Logo</p>
          <p className="font-bold text-inherit">Movie</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/topmovies">
            Peliculas populares
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/mejorcalificado">
            Mejor calificado
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/proximo">
            Próximo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/photos">
            Fotos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
        style={{
          border: 'none',
          boxShadow: 'none'
        }}
          classNames={{
            base: 'max-w-full sm:max-w-[13rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          onChange={(e) => { setQuery(e.target.value) }}
          value={query}
          placeholder="Buscar..."
          size="md"
          startContent={<SearchIcon />}
          type="search"
        />
        {
          loading && <p>Cargando...</p>
        }
        {
          suggestions.length > 0 && (
            <ul>
              {suggestions.map((movie) => (
                <ul key={movie.id}
                onClick={
                  () => {
                    router.push(`/${movie.id}`)
                  }
                }>
                  {movie.title}
                </ul>
              ))}
            </ul>
          )
        }
      </NavbarContent>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <ul className="flex justify-center flex-col items-center">
          <Link
          className="text-gray-300 my-2 text-lg"
          href="/topmovies">
            Peliculas Populares
          </Link>
          <Link
          className="text-gray-300 my-2 text-lg"
          href="/mejorcalificado">
            Mejor calificado
          </Link>
          <Link
          className="text-gray-300 my-2 text-lg"
          href="/proximo">
            Próximo
          </Link>
          <Link
          className="text-blue-600 my-2 text-lg"
          href="/photos">
            Fotos
          </Link>
          </ul>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

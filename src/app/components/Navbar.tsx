import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        {/*<NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>*/}
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
  );
}

import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Peliculas populares",
    "Mejor calificado",
    "Próximo",
  ];

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
          <Link color="foreground" href="#">
            Mejor calificado
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Próximo
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

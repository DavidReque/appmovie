import React from 'react'

import { Navbar, NavbarContent, Input } from '@nextui-org/react'
import SearchIcon from './SearchIcon'

export default function Search () {
  return (
    <Navbar>
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
          placeholder="Buscar..."
          size="md"
          startContent={<SearchIcon />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  )
}

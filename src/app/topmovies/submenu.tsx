'use client'

import { Divider } from '@nextui-org/react'
import Link from 'next/link'

export default function SubMenu () {
  return (
    <div className="max-w-md mx-auto flex justify-center mb-6">
      <div>
        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
          <Link href="/">Inicio</Link>
          <Divider orientation="vertical" />
          <Link href="/topmovies">Top movies</Link>
        </div>
      </div>
    </div>
  )
}

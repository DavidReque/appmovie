import React from 'react'

import { Select, SelectItem } from '@nextui-org/react'
import { type FiltersProps } from '../types'

const Filters: React.FC<FiltersProps> = ({ activeFilter, onChangeFilter }) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-4 my-14">
      <Select
        value={activeFilter}
        onChange={(e) => { onChangeFilter(e.target.value) }}
        radius="md"
        label="Peliculas"
        placeholder="Selecciona una categoria"
        defaultSelectedKeys={['cat']}
        className="max-w-[45%]"
      >
        <SelectItem key="popular" value="popular">
          Popular
        </SelectItem>
        <SelectItem key="top_rated" value="top_rated">
          Mejor Calificado
        </SelectItem>
        <SelectItem key="upcoming" value="upcoming">
          Por estrenarse
        </SelectItem>
        <SelectItem key="now_playing" value="now_playing">
          En cines
        </SelectItem>
      </Select>
    </div>
  )
}

export default Filters

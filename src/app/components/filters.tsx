import React from "react";

import {Select, SelectItem} from "@nextui-org/react";
import { filtersProps } from "../types";

export default function Filters({activeFilter, onChangeFilter}: filtersProps) {

    const filters = [
        {movies: 'streaming'},
        {movies: 'cines'},
    ]

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-8">
      <Select 
        label="Select" 
        className="max-w-xs" 
        value={activeFilter}
        onChange={(e) => onChangeFilter(e.target.value)}
      >
       {filters.map((movie, index) => (
          <SelectItem key={index} value={movie.movies}>
            {movie.movies}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
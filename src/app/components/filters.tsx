import React from "react";

import {Select, SelectItem} from "@nextui-org/react";

export default function Filters() {

    const filters = [
        {movies: 'streaming'},
        {movies: 'cines'},
    ]

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mx-8 my-8">
      <Select 
        label="Select" 
        className="max-w-xs" 
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

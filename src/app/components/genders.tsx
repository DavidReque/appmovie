import React from 'react'

import { Select, SelectItem } from '@nextui-org/react';
import { FiltersPropsGender } from '../types';

const Genders: React.FC<FiltersPropsGender> = ({ activeFilterGender, onChangeFilterGender }) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-4 my-14">
      <Select
        value={activeFilterGender}
        onChange={(e) => onChangeFilterGender(e.target.value)}
        radius="md"
        label="Peliculas"
        placeholder="Selecciona una categoria"
        defaultSelectedKeys={["cat"]}
        className="max-w-[45%]"
      >
        <SelectItem key="18" value="18">
            Drama
        </SelectItem>
        <SelectItem key="35" value="35">
            Comedia
        </SelectItem>
        <SelectItem key="28" value="28">
            Acción
        </SelectItem>
        <SelectItem key="878" value="878">
            Ciencia Ficción 
        </SelectItem>
      </Select>
    </div>
  );
};

export default Genders;

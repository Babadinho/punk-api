import React, { useState } from 'react';
import { Select, FilterWarpper } from './styles';

const ProductsFilter = () => {
  return (
    <FilterWarpper>
      <Select>
        <option value='brewed_before'>Brewed - Newest</option>
        <option value='brewed_after'>Brewed - Oldest</option>
      </Select>
    </FilterWarpper>
  );
};

export default ProductsFilter;

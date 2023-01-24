import React, { useState } from 'react';
import { Filter, FilterWarpper } from './styles';

const ProductsFilter = () => {
  return (
    <FilterWarpper>
      <Filter>
        <option value='brewed_before'>Brewed - Newest</option>
        <option value='brewed_after'>Brewed - Oldest</option>
      </Filter>
    </FilterWarpper>
  );
};

export default ProductsFilter;

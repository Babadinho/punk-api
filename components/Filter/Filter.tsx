import React, { useState } from 'react';
import {
  Container,
  InputWrapper,
  InputNumber,
  InputDate,
  FilterButton,
} from './styles';

const ProductsFilter = () => {
  return (
    <Container>
      <InputWrapper>
        brewed_before: <InputDate type='date'></InputDate>
      </InputWrapper>
      <InputWrapper>
        brewed_after: <InputDate type='date'></InputDate>
      </InputWrapper>
      <InputWrapper>
        abv_gt: <InputNumber type='number'></InputNumber>
      </InputWrapper>
      <InputWrapper>
        abv_lt: <InputNumber type='number'></InputNumber>
      </InputWrapper>
      <FilterButton>Submit</FilterButton>
    </Container>
  );
};

export default ProductsFilter;

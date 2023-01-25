import React, { useState } from 'react';
import { FilterData } from '../types/FilterData';
import {
  Container,
  InputWrapper,
  InputText,
  InputDate,
  FilterButton,
} from './styles';

const Filter = ({ handleFilter }: any) => {
  const [filter, setFilter] = useState<FilterData>({
    brewed_before: '',
    brewed_after: '',
    abv_gt: '',
    abv_lt: '',
  });

  const { brewed_before, brewed_after, abv_gt, abv_lt } = filter;

  // funtion to format date to the format (mm-yy) required by the API
  const formatDate = (date: string) => {
    const dateArr = date.split('-');
    return `${dateArr[1]}-${dateArr[0]}`;
  };

  const handleChange = (name: string) => (e: { target: { value: string } }) => {
    // check if name = date then format date using function above before setting in state
    const value =
      name === 'brewed_before' || name === 'brewed_after'
        ? formatDate(e.target.value)
        : e.target.value;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <Container>
      <InputWrapper>
        brewed_before:{' '}
        <InputDate
          id='brewed_before'
          type='date'
          value={brewed_before}
          onChange={handleChange('brewed_before')}
        ></InputDate>
      </InputWrapper>
      <InputWrapper>
        brewed_after:{' '}
        <InputDate
          id='brewed_after'
          type='date'
          value={brewed_after}
          onChange={handleChange('brewed_after')}
        ></InputDate>
      </InputWrapper>
      <InputWrapper>
        abv_gt:{' '}
        <InputText
          id='abv_gt'
          type='text'
          value={abv_gt}
          onChange={handleChange('abv_gt')}
        ></InputText>
      </InputWrapper>
      <InputWrapper>
        abv_lt:{' '}
        <InputText
          id='abv_lt'
          type='text'
          value={abv_lt}
          onChange={handleChange('abv_lt')}
        ></InputText>
      </InputWrapper>
      <FilterButton onClick={() => handleFilter(filter)}>Submit</FilterButton>
    </Container>
  );
};

export default Filter;

import React from 'react';
import { Container, Searchbox, SearchIconWrapper } from './styles';
import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
  return (
    <Container>
      <Searchbox />
      <SearchIconWrapper>
        <MdSearch />
      </SearchIconWrapper>
    </Container>
  );
};

export default SearchInput;

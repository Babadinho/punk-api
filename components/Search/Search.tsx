import React, { useState } from 'react';
import { Container, Searchbox, SearchIconWrapper } from './styles';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearch, search }: any) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <Container>
      <Searchbox
        placeholder={search}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIconWrapper
        onClick={() => {
          handleSearch(searchTerm);
        }}
      >
        <MdSearch />
      </SearchIconWrapper>
    </Container>
  );
};

export default Search;

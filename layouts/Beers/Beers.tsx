import React from 'react';
import BeerData from '@/interfaces/BeerData';
import BeerCard from '@/components/BeerCard/BeerCard';
import { BeerWrapper, Container } from './styles';
import PageButton from '@/components/PageButton/PageButton';

const Beers = ({
  beers,
  handleNextPage,
  handlePreviousPage,
  page,
  search,
}: any) => {
  return (
    <BeerWrapper>
      <Container>
        {beers.map((beer: BeerData) => {
          return (
            <BeerCard
              id={beer.id}
              key={beer.id}
              name={beer.name}
              image_url={beer.image_url}
              description={beer.description}
            />
          );
        })}
      </Container>
      <PageButton
        page={page}
        search={search}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </BeerWrapper>
  );
};

export default Beers;

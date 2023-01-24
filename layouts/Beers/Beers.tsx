import React from 'react';
import BeerData from '@/interfaces/BeerData';
import BeerCard from '@/components/BeerCard/BeerCard';
import { BeerWrapper, Container } from './styles';
import PageButton from '@/components/PageButton/PageButton';

const Beers = ({ beers, handleNextPage, handlePreviousPage, page }: any) => {
  return (
    <BeerWrapper>
      <Container>
        {beers.map((beer: BeerData) => {
          return (
            <BeerCard
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
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </BeerWrapper>
  );
};

export default Beers;

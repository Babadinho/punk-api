import React from 'react';
import BeerData from '@/interfaces/BeerData';
import BeerCard from '@/components/BeerCard/BeerCard';
import { BeerWrapper, Container } from './styles';
import PageButton from '@/components/PageButton/PageButton';

const Beers = ({ beers, handleNextPage, handlePreviousPage, page }: any) => {
  return (
    <BeerWrapper>
      <Container>
        {beers.length > 0 &&
          beers.map((beer: BeerData) => {
            return (
              <BeerCard
                id={beer.id}
                key={beer.id}
                name={beer.name}
                image_url={beer.image_url}
                description={beer.description}
                abv={beer.abv}
                first_brewed={beer.first_brewed}
              />
            );
          })}
      </Container>
      <PageButton
        page={page}
        beers={beers}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </BeerWrapper>
  );
};

export default Beers;

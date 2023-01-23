import React from 'react';
import BeerData from '@/interfaces/BeerData';
import BeerCard from '@/components/BeerCard/BeerCard';
import { BeerWrapper, Container } from './styles';

const Beers = ({ beers }: { beers: BeerData[] }) => {
  return (
    <BeerWrapper>
      <Container>
        {beers.map((beer, i) => {
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
    </BeerWrapper>
  );
};

export default Beers;

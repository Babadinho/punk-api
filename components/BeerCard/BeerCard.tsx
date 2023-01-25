import React from 'react';
import {
  Container,
  ImageWrapper,
  Image,
  Link,
  Title,
  Description,
  AbvWrapper,
} from './styles';
import BeerData from '@/interfaces/BeerData';

const BeerCard = ({ id, name, image_url, description, abv }: BeerData) => {
  return (
    <Container>
      <ImageWrapper>
        <Link href={`/beer/${id}`}>
          <Image src={image_url} alt={name} />
        </Link>
      </ImageWrapper>

      <Link href={`/beer/${id}`}>
        <Title>{name}</Title>
      </Link>
      <Description>{description.substring(0, 80)}..</Description>
      <AbvWrapper>abv : {abv}</AbvWrapper>
    </Container>
  );
};

export default BeerCard;

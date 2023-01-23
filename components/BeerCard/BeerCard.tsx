import React from 'react';
import {
  Container,
  ImageWrapper,
  Image,
  Link,
  Title,
  Description,
} from './styles';
import BeerData from '@/interfaces/BeerData';

const BeerCard = ({ name, image_url, description }: BeerData) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image_url} alt={name} />
      </ImageWrapper>
      <Link>
        <Title>{name}</Title>
      </Link>
      <Description>{description.substring(0, 80)}..</Description>
    </Container>
  );
};

export default BeerCard;

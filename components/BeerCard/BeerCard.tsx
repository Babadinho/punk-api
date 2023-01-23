import React from 'react';
import { Container, ImageWrapper, Image, Title, Description } from './styles';
import BeerData from '@/interfaces/BeerData';

const BeerCard = ({ name, image_url, description }: BeerData) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image_url} alt={name} />
      </ImageWrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default BeerCard;

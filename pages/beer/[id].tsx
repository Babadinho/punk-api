import Head from 'next/head';
import React from 'react';
import BeerData from '@/interfaces/BeerData';
import BackButton from '@/components/BackButton/BackButton';
import {
  Container,
  Heading,
  ImageWrapper,
  Image,
  ContentWrapper,
  Title,
  Description,
  IngredientsWrapper,
  IngredientsHeading,
  IngredientName,
  IngredientWrapper,
  IngredientListWrapper,
  IngredientList,
} from '../../styles/beer/styles';
import { AbvWrapper, BrewedDateWrapper } from '@/components/BeerCard/styles';

export const getServerSideProps = async (context: { query: any }) => {
  const { id } = context.query;
  try {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await res.json();
    return {
      props: {
        beer: data[0],
      },
    };
  } catch (error) {
    console.error(error);
  }
};

const beer = (props: { beer: BeerData }) => {
  const { beer } = props;
  const ingredients = beer.ingredients;
  const ingredientKeys = ingredients && Object.keys(ingredients);

  return (
    <>
      <Head>
        <title>Punk API | {beer.name}</title>
        <meta name='description' content={beer.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BackButton />
      <Heading>{beer.name}</Heading>
      <Container>
        <ImageWrapper>
          <Image src={beer.image_url} alt={beer.name}></Image>
        </ImageWrapper>
        <ContentWrapper>
          <BrewedDateWrapper>Brewed : {beer.first_brewed}</BrewedDateWrapper>
          <AbvWrapper>abv : {beer.abv}</AbvWrapper>
          <Title>{beer.tagline}</Title>
          <Description>{beer.description}</Description>

          <IngredientsWrapper>
            <IngredientsHeading>Ingredients</IngredientsHeading>
            {ingredientKeys &&
              ingredientKeys.map((key, i) => {
                const ingredient = ingredients[key];
                if (Array.isArray(ingredient)) {
                  return (
                    <IngredientWrapper key={i}>
                      <IngredientName>{key}</IngredientName>
                      <IngredientListWrapper>
                        {ingredient.map((item, i) => (
                          <IngredientList key={i}>
                            {item.name} - {item.amount.value} {item.amount.unit}
                          </IngredientList>
                        ))}
                      </IngredientListWrapper>
                    </IngredientWrapper>
                  );
                }
                return (
                  <IngredientWrapper key={i}>
                    <IngredientName>{key}</IngredientName>
                    <IngredientListWrapper>
                      <IngredientList>{ingredient}</IngredientList>
                    </IngredientListWrapper>
                  </IngredientWrapper>
                );
              })}
          </IngredientsWrapper>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default beer;

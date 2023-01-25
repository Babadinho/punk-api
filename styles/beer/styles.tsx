import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  height: auto;
  margin: 3rem 15rem 10rem 15rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 850px) {
    flex-direction: column;
    margin: 1.5rem 1rem 10rem 1rem;
    padding: 2rem 0 3rem 0;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  text-align: center;
  font-size: 3rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #393838;
  letter-spacing: 0.04em;
  text-transform: capitalize;

  @media (max-width: 850px) {
    font-size: 2.4rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-right: 3px solid #f0e9e9;
  padding: 1rem 0 1rem 0;

  @media (max-width: 850px) {
    border-right: none;
    border-bottom: 3px solid #f0e9e9;
    padding-bottom: 1rem;
  }
`;

export const Image = styled.img`
  background-color: #ffffff;
  object-fit: contain;
  width: 100%;
  max-height: 550px;

  @media (max-width: 850px) {
    max-height: 400px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem 1rem;
  width: 100%;

  @media (max-width: 850px) {
    padding: 1rem 1rem;
  }
`;

export const Title = styled.h1`
  color: #393838;
  font-size: 1.7rem;
  font-weight: bold;
  margin: 1.7rem 0 1.5rem 0;
  letter-spacing: 0.01em;

  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.span`
  color: #504d4d;
  font-size: 0.95rem;
  line-height: 1.3;
  letter-spacing: 0.03em;
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 100%;
`;

export const IngredientsHeading = styled.h2`
  color: #393838;
  font-size: 1.4rem;
  font-weight: bold;
  word-wrap: break-word;
  letter-spacing: 0.01em;
  text-transform: capitalize;
`;

export const IngredientWrapper = styled.div`
  display: block;
`;

export const IngredientName = styled.h3`
  color: #393838;
  font-size: 1rem;
  font-weight: bold;
  word-wrap: break-word;
  letter-spacing: 0.03em;
  margin: 0.9rem 0 0.1rem 0;
  text-transform: capitalize;
`;

export const IngredientListWrapper = styled.ul`
  list-style-type: none;
`;

export const IngredientList = styled.li`
  color: #393838;
  font-size: 0.95rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
`;

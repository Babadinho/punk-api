import styled from 'styled-components';

export const BeerWrapper = styled.div`
  margin-top: 2rem;

  @media (max-width: 850px) {
    margin-top: 0.1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  border-top: 1px solid #e4e3e3;
  padding-top: 1.5rem;

  @media (max-width: 2700px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.7rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 350px;
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

export const Image = styled.img`
  background-color: #ffffff;
  object-fit: contain;
  width: 100%;
  max-height: 200px;
`;

export const Title = styled.span`
  color: '#494848';
  font-size: '0.7rem';
  text-transform: uppercase;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
  margin: 1.2rem 0 1rem 0;
`;

export const Description = styled.span`
  color: '#858282';
  font-size: '0.5rem';
`;

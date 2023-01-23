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
  max-height: 160px;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.span`
  color: #393838;
  font-size: 0.95rem;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
  margin: 1rem 0 0rem 0;

  &:hover {
    color: #4e4b4b;
  }
`;

export const Description = styled.span`
  color: #504d4d;
  font-size: 0.9rem;
`;

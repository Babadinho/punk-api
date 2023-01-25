import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 270px;
  height: 350px;
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 850px) {
    width: 100%;
  }
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
  letter-spacing: 0.01em;

  &:hover {
    color: #4e4b4b;
  }
`;

export const Description = styled.span`
  color: #504d4d;
  font-size: 0.95rem;
  line-height: 1.3;
  letter-spacing: 0.03em;

  @media (max-width: 500px) {
    font-size: 0.9rem;
    line-height: 1.2;
  }
`;

export const BrewedDateWrapper = styled.div`
  background-color: #f4f5f9;
  padding: 0.3rem;
  border-radius: 5px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  text-transform: capitalize;
`;

export const AbvWrapper = styled.div`
  background-color: #f4f5f9;
  padding: 0.3rem;
  border-radius: 5px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  text-transform: uppercase;
`;

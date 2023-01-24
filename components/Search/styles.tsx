import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Searchbox = styled.input`
  background-color: #ffffff;
  padding: 0.7rem;
  width: 200px;
  border: none;
`;
export const SearchIconWrapper = styled.span`
  background-color: #393838;
  color: #ffffff;
  margin-left: -2rem;
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  padding: 0.53rem 0.5rem;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    background-color: #212121;
  }
`;

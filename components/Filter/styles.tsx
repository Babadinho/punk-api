import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ececec;
  padding: 1.5rem 1rem;
  width: 420px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 0.2rem 0;

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1.5rem 0.7rem;
  }
`;

export const InputWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

export const InputText = styled.input`
  background-color: #ffffff;
  padding: 0.2rem;
  width: 45px;
  border: none;
`;

export const InputDate = styled.input`
  background-color: #ffffff;
  padding: 0.1rem;
  width: 70px;
  border: none;

  @media (max-width: 850px) {
    width: 60px;
  }
`;

export const FilterButton = styled.a`
  background-color: #393838;
  padding: 0.5rem 1.3rem;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;
  align-self: flex-end;
  margin-left: 0.5rem;

  &.nextPage {
    visibility: hidden;
  }

  &:hover {
    background-color: #212121;
  }
`;

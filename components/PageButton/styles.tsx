import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;

export const PrevPageBtn = styled.a`
  background-color: #393838;
  padding: 0.7rem 1.5rem;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;
  align-self: flex-end;

  &.prevPage {
    visibility: hidden;
  }

  &:hover {
    background-color: #212121;
  }
`;

export const NextPageBtn = styled.a`
  background-color: #393838;
  padding: 0.7rem 1.5rem;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;
  align-self: flex-end;

  &.nextPage {
    visibility: hidden;
  }

  &:hover {
    background-color: #212121;
  }
`;

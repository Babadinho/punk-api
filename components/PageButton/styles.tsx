import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;

export const PrevPageBtn = styled.a`
  background-color: #3d84a0;
  padding: 0.7rem 1.5rem;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 0.1em;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;

  &.prevPage {
    visibility: hidden;
  }

  &:hover {
    background-color: #226c89;
  }
`;

export const NextPageBtn = styled.a`
  background-color: #3d84a0;
  padding: 0.7rem 1.5rem;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color;
  transition-duration: 0.5s;
  align-self: flex-end;

  &:hover {
    background-color: #226c89;
  }
`;

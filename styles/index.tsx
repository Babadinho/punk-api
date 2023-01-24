import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 12rem;
  margin-bottom: 7rem;

  @media (max-width: 850px) {
    padding: 0 0.7rem;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

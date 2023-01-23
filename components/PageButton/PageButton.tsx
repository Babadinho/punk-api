import { Container, PageBtn } from './styles';
import React from 'react';

const PageButton = () => {
  return (
    <Container>
      <PageBtn>Previous Page</PageBtn>
      <PageBtn>Next Page</PageBtn>
    </Container>
  );
};

export default PageButton;

import { Container, PrevPageBtn, NextPageBtn } from './styles';
import React from 'react';

interface PageButtonProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  page: number;
}

const PageButton = ({
  page,
  handleNextPage,
  handlePreviousPage,
}: PageButtonProps) => {
  return (
    <Container>
      <PrevPageBtn
        className={page === 1 ? 'prevPage' : ''}
        onClick={handlePreviousPage}
      >
        Previous Page
      </PrevPageBtn>
      <NextPageBtn onClick={handleNextPage}>Next Page</NextPageBtn>
    </Container>
  );
};

export default PageButton;

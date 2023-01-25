import { Container, PrevPageBtn, NextPageBtn } from './styles';
import React from 'react';

interface PageButtonProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  page: number;
  beers: [];
}

const PageButton = ({
  page,
  beers,
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
      <NextPageBtn
        className={beers.length < 16 ? 'nextPage' : ''}
        onClick={handleNextPage}
      >
        Next Page
      </NextPageBtn>
    </Container>
  );
};

export default PageButton;

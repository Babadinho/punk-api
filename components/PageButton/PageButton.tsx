import { Container, PrevPageBtn, NextPageBtn } from './styles';
import React from 'react';

interface PageButtonProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  page: number;
  search: string;
}

const PageButton = ({
  page,
  search,
  handleNextPage,
  handlePreviousPage,
}: PageButtonProps) => {
  return (
    <Container>
      <PrevPageBtn
        className={search || page === 1 ? 'prevPage' : ''}
        onClick={handlePreviousPage}
      >
        Previous Page
      </PrevPageBtn>
      <NextPageBtn
        className={search ? 'nextPage' : ''}
        onClick={handleNextPage}
      >
        Next Page
      </NextPageBtn>
    </Container>
  );
};

export default PageButton;

import React from 'react';
import { Container } from './styles';
import { MdWest } from 'react-icons/md';
import Router from 'next/router';

const BackButton = () => {
  return (
    <Container onClick={() => Router.push('/')}>
      <MdWest />
    </Container>
  );
};

export default BackButton;

import React from 'react';
import { Container, Heading, Link } from './styles';

const Header = () => {
  return (
    <Container>
      <Link href='/'>
        <Heading>Punk API</Heading>
      </Link>
    </Container>
  );
};

export default Header;

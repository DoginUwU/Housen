import React from 'react';
import Button from '../Button';

import { Container, Items } from './styles';

const Header: React.FC = () => (
  <Container>
    <a href="/">
      <img src="/images/logo.svg" alt="Housen logo" />
    </a>
    <Items>
      <a href="#buy">Buy a house</a>
      <a href="#rent">Rent a house</a>
      <a href="#mortgage">Mortgage</a>
    </Items>
    <Button>Sign Up</Button>
  </Container>
);

export default Header;

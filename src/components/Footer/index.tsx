import React from 'react';

import { Container, Content } from './styles';

const Footer: React.FC = () => (
  <Container>
    <p>Housen © 2020</p>
    <Content>
      <a href="#/">About</a>
      <a href="#/">FAQ</a>
      <a href="#/">Terms & Conditions</a>
      <a href="#/">Privacy Policy</a>
    </Content>
  </Container>
);

export default Footer;

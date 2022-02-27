import React, { HTMLAttributes } from 'react';
import Button from '../Button';

import { Container } from './styles';

const SearchInput: React.FC<HTMLAttributes<HTMLInputElement>> = (props) => (
  <Container>
    <img src="/images/icons/search.svg" alt="" />
    <input {...props} />
    <Button active>Search</Button>
  </Container>
);

export default SearchInput;

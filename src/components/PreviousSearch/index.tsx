import React from 'react';

import { Container } from './styles';

interface PreviousSearchProps {
    address: string;
    filters: string;
}

const PreviousSearch: React.FC<PreviousSearchProps> = ({
  address,
  filters,
}) => (
  <Container>
    <h2>{address}</h2>
    <div>
      <img src="images/icons/filter.svg" alt="Change settings" />
      <span>{filters}</span>
      <img src="images/icons/right.svg" alt="Right arrow" />
    </div>
  </Container>
);

export default PreviousSearch;

import React from 'react';
import PreviousSearch from '../../components/PreviousSearch';
import SearchInput from '../../components/SearchInput';

import { Container, PreviousSearchs } from './styles';

const Home: React.FC = () => (
  <Container>
    <h1>Find your ideal home</h1>
    <p>
      Search from more than 19 million of inspected appartments, houses,
      cottages, villas, manors and mansions
    </p>
    <SearchInput placeholder="Search for address" />
    <PreviousSearchs>
      <PreviousSearch
        address="Calabasas, CA"
        filters="$1.5k+ / 2 Beds / Appt.  ... 3 more"
      />
      <PreviousSearch
        address="Long Beach, CA"
        filters="$2.0k+ / 1 Bed / Appt.  ... 3 more"
      />
      <PreviousSearch
        address="Fullerton, CA"
        filters="$$2.5k+ / 2 Beds / Appt.  ... 3 more"
      />
    </PreviousSearchs>
  </Container>
);

export default Home;

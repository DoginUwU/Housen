import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100rem;
    margin: 0 auto;
    padding: 1.75rem 1.25rem;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  & > {
    color: ${(props) => props.theme.palette.common.dark};

    &:hover {
      color: ${(props) => props.theme.palette.common.purple};
    }
  }

  @media (max-width: 768px) {
   display: none;
  }
`;

export { Container, Items };

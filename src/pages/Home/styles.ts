import styled from 'styled-components';

const Container = styled.main`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  padding: 0 1rem;

  h1 {
    font-size: 4.375rem;
    color: ${({ theme }) => theme.palette.common.dark};
    text-align: center;
  }

  p {
    font-size: 1.375rem;
    color: ${({ theme }) => theme.palette.common.darkGrey};
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const PreviousSearchs = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export { Container, PreviousSearchs };

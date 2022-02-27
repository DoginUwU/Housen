import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.palette.common.white};

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 1rem;
  }
`;

export { Container };

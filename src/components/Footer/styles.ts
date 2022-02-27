import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;

  font-weight: 500;
  font-size: 0.875rem;
  color: ${(props) => props.theme.palette.common.lightGrey};

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    justify-content: center;
    
    p {
      display: none;
    }
  }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export { Container, Content };

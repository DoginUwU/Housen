import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background: ${(props) => props.theme.palette.common.white};
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 2rem;
  cursor: pointer;

  h2 {
    font-size: 1.125rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    img:last-child {
      margin-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    div > span {
      display: none;
    }
  }
`;

export { Container };

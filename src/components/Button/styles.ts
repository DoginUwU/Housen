import styled, { css } from 'styled-components';

interface ContainerProps {
    active?: boolean;
}

const Container = styled.button<ContainerProps>`
  padding: 0.8rem 3rem;
  border: 4px solid ${(props) => props.theme.palette.common.purple};
  border-radius: 0.25rem;

  background-color: transparent;
  color: ${(props) => props.theme.palette.common.purple};

  ${(props) => props.active
    && css`
      background-color: ${props.theme.palette.common.purple};
      color: ${props.theme.palette.common.white};
    `}

  font-size: 1.125rem;
  font-weight: bold;

  &:hover {
    filter: brightness(1.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export { Container };

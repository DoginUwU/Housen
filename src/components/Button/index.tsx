import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => <Container {...props} />;

export default Button;

import React from 'react';
import { ButtonContainer } from './button.styles';

const Button = ({ onButtonClick, x, y, ...props }) => {
  return (
    <ButtonContainer
      {...props}
      onClick={() => {
        return onButtonClick(x, y);
      }}
    />
  );
};

export default Button;

import React from 'react';
import { CoolButtonContainer } from './cool-button.styles';

const CoolButton = ({ text, onButtonClick}) => (
  <CoolButtonContainer onClick={onButtonClick}>
    <p>
      <span className='bg'></span>
      <span className='base'></span>
      <span className='text'>{text}</span>
    </p>
  </CoolButtonContainer>
);
export default CoolButton;

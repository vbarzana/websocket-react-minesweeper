import React from 'react';
import { CellContainer } from './cell.styles';

const Cell = ({ onButtonClick, x, y, ...props }) => {
  return (
    <CellContainer
      {...props}
      onClick={() => {
        return onButtonClick(x, y);
      }}
    />
  );
};

export default Cell;

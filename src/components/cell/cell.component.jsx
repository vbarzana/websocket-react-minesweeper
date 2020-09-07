import React, { memo } from 'react';

import { CellContainer } from './cell.styles';

const Cell = ({ onButtonClick, x, y, ...props }) => (
  <CellContainer
    {...props}
    onClick={() => {
      return onButtonClick(x, y);
    }}
  />
);

export default memo(
  Cell,
  (prevProps, nextProps) => prevProps.content === nextProps.content
);

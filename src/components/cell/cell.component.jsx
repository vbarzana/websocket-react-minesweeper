import React from 'react';
import PropTypes from 'prop-types';

import { CellContainer } from './cell.styles';

class Cell extends React.Component {
  shouldComponentUpdate = nextProps => {
    return (
      this.props.content !== nextProps.content ||
      this.props.flag !== nextProps.flag
    );
  };
  render() {
    const { onButtonClick, x, y, flag, ...otherProps } = this.props;

    return (
      <CellContainer
        {...otherProps}
        flag={flag}
        onClick={() => {
          if (flag) {
            return;
          }
          return onButtonClick(x, y);
        }}
      />
    );
  }
}

Cell.propTypes = {
  onButtonClick: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
  flag: PropTypes.bool
};

export default Cell;

import React from 'react';

import { BoardContainer } from './board.styles';
import Button from '../button/button.component';

class Board extends React.Component {
  onButtonClick = (x, y) => {
    this.props.onButtonClick(`${x} ${y}`);
  };

  render() {
    const { squares } = this.props;
    if (!squares || squares.length === 0) {
      return null;
    }
    const rowSize = squares.length;
    let colSize = 0;
    const buttons = squares.reduce((acc, row, i) => {
      const columns = Object.assign([], row);
      if (!colSize) {
        colSize = columns.length;
      }
      acc = acc.concat(
        columns.map((cell, j) => (
          <Button
            key={`${i}_${j}`}
            x={j}
            y={i}
            content={cell}
            onButtonClick={this.onButtonClick}
          />
        ))
      );
      return acc;
    }, []);
    return (
      <BoardContainer rows={rowSize} columns={colSize} buttons={buttons}>
        {buttons}
      </BoardContainer>
    );
  }
}

export default Board;

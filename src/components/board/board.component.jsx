import React from 'react';

import { BoardContainer } from './board.styles';
import Cell from '../cell/cell.component';
const CN_EXPLODE = 'explode';
const EXPLODE_DURATION = 1;

class Board extends React.Component {
  flags = [];
  onButtonClick = (x, y) => {
    this.props.onButtonClick(`${x} ${y}`);
  };

  render() {
    const { squares, gameOver } = this.props;
    if (gameOver) {
      this.flags = [];
    }
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
        columns.map((cell, j) => {
          this.flags = this.flags || [];
          this.flags[i] = this.flags[i] || [];
          this.flags[i][j] = this.flags[i][j] || false;

          const isBomb = cell === '*';
          if (isBomb) {
            setTimeout(() => {
              document
                .getElementsByName('bomb')
                .forEach(el => el.classList.remove(CN_EXPLODE));
            }, EXPLODE_DURATION * 800);
          }
          const flag = this.flags[i][j];
          return (
            <Cell
              key={`${i}_${j}`}
              x={j}
              y={i}
              flag={gameOver ? false : flag}
              explodeDuration={EXPLODE_DURATION}
              name={isBomb ? 'bomb' : 'cell'}
              className={isBomb ? CN_EXPLODE : ''}
              content={cell}
              onButtonClick={this.onButtonClick}
              onContextMenu={evt => {
                evt.preventDefault();
                this.flags[i][j] = !this.flags[i][j];
                this.forceUpdate();
              }}
            />
          );
        })
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

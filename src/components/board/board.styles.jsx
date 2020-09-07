import styled, { css } from 'styled-components';
import { CellContainer } from '../cell/cell.styles';
const getBoardFlexAndSize = ({ rows, columns }) => {
  let size = rows <= 10 ? '2' : rows <= 20 ? '1.5' : '.8';
  let tooBigBoardButtonStyles = null;
  if (rows >= 30) {
    tooBigBoardButtonStyles = css`
      &::after {
        font-size: 11px;
        top: -3px;
        position: relative;
      }
      &[name='bomb']::after {
        font-size: 8px !important;
        top: -5px !important;
      }
    `;
  } else if (rows >= 20) {
    tooBigBoardButtonStyles = css`
      &[name='bomb']::after {
        position: relative;
        top: -3px !important;
      }
    `;
  }
  return css`
    grid-template-rows: repeat(${rows}, ${size}rem);
    grid-template-columns: repeat(${columns}, ${size}rem);

    ${CellContainer} {
      ${tooBigBoardButtonStyles}
    }
  `;
};
export const BoardContainer = styled.div`
  display: grid;
  column-gap: 0;
  row-gap: 0;
  font-size: 16px;
  background: white;
  ${getBoardFlexAndSize}
`;

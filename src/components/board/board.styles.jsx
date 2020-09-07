import styled, { css } from 'styled-components';
const getBoardFlexAndSize = ({ rows, columns }) => {
  console.log('rendering a board with size: ', rows, columns);
  return css`
    grid-template-rows: repeat(${rows}, 20px);
    grid-template-columns: repeat(${columns}, 20px);
  `;
};
export const BoardContainer = styled.div`
  display: grid;
  column-gap: 0;
  row-gap: 0;
  font-size: 16px;
  ${getBoardFlexAndSize}
`;

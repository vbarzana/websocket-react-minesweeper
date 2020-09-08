import styled, { css } from 'styled-components';

const openButtonStyles = `
  background: #e2e1e1;
  border-radius: 0;
  user-select: none;
  pointer-events: none;
  border: 1px solid gray;
`;

const getExplodeEffect = ({ explodeDuration }) => css`
  z-index: 999;
  border: 1px solid gray;
  box-shadow: 0 0 34px 30px rgb(255 0 0 / 40%), 0 0 34px 40px rgb(255 0 0 / 40%),
    0 0 34px 60px rgb(255 0 0 / 40%), 0 0 34px 80px rgb(255 0 0 / 40%),
    0 0 34px 150px rgb(255 0 0 / 40%), 0 0 34px 300px rgb(255 0 0 / 40%),
    0 0 34px 500px rgb(255 0 0 / 40%), 0 0 34px 900px rgb(255 0 0 / 40%);
  transition: ${explodeDuration || '0.5'}s ease-in-out;
`;

const getContent = ({ content, flag }) => {
  if (flag) {
    return css`
      &::after {
        content: '☠️';
      }
    `;
  }
  const number = parseInt(content, 10);
  if (content === '*') {
    return css`
      ${openButtonStyles}
      &::after {
        content: '💣';
      }
    `;
  } else if (number) {
    const color =
      number === 1
        ? 'blue'
        : number === 2
        ? '#673AB7'
        : number === 3
        ? 'green'
        : number === 4
        ? '#b409b'
        : '#01ab0e';
    return css`
      ${openButtonStyles}
      color: ${color};
      &::after {
        content: '${content}';
      }
    `;
  } else if (number === 0) {
    return css`
      ${openButtonStyles}
    `;
  }
  return null;
};

export const CellContainer = styled.div`
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  padding: 0;
  background: #ff4655;
  border: 1px solid #f3f3f3;

  overflow: hidden;
  cursor: pointer;

  ${getContent}

  &.explode {
    ${getExplodeEffect}
  }

  &:active,
  &:focus {
    outline: none;
    border: 1px solid #7e7d7d;
  }
`;

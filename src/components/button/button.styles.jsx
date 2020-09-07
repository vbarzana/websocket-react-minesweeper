import styled, { css } from 'styled-components';

const openButtonStyles = `
  background: #e2e1e1;
  border-radius: 0;
  user-select: none;
  pointer-events: none;
  border: 1px solid gray;
`;

const getContent = ({ content }) => {
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
        ? 'red'
        : number === 3
        ? 'green'
        : number === 4
        ? 'orange'
        : '#01ab0e';
    return (
      //openButtonStyles +
      css`
        ${openButtonStyles}
        color: ${color};
        &::after {
          content: '${content}';
        }
      `
    );
  } else if (number === 0) {
    return css`
      ${openButtonStyles}
    `;
  }
  return null;
};

export const ButtonContainer = styled.button`
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin: 0.6px;
  padding: 0;
  display: block;
  position: relative;
  width: 1.3em;
  height: 1.3em;
  background: #c0c0c0;
  box-sizing: border-box;
  border: 1px solid #b3b3b3;
  flex: 0 0 11.1111111111%;
  overflow: hidden;
  cursor: pointer;

  ${getContent}

  &:active,
  &:focus {
    outline: none;
    border: 1px solid #7e7d7d;
  }
`;

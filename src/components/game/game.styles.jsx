import styled from 'styled-components';

export const BoardWrapperContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const BoardHeaderContainer = styled.div`
  background: #3e3e3e;
  padding: 10px 20px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    color: #f44336;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const BoardBodyContainer = styled.div`
  border: 1px solid #3e3e3e;
  padding: 2px;
  background: #3e3e3e;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-width: 200px;
  h2 {
    color: #ff4655;
  }
`;

export const MessageContainer = styled.span`
  font-size: 1em;
  color: orange;
`;

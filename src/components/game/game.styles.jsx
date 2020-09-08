import styled from 'styled-components';

export const BoardWrapperContainer = styled.div`
  border-radius: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  padding: 6px;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #3e3e3e;
  height: 100%;
  -webkit-box-shadow: 1px 1px 2008px 17px rgb(255 58 74);
  -moz-box-shadow: 1px 1px 2008px 17px rgb(255 58 74);
  box-shadow: 1px 1px 2008px 17px rgb(255 58 74);
`;

export const ConnectionStatusContainer = styled.div`
  position: absolute;
  right: 0;
  padding: 10px;
  display: flex;
  span {
    color: white;
    line-height: 0.4rem;
  }
  .status {
    height: 0.6rem;
    width: 0.6rem;
    margin-right: 3px;
    border-radius: 50%;

    &.online {
      background: green;
    }
    &.offline {
      background: red;
    }
  }
`;

export const BoardHeaderContainer = styled.div`
  background: #3e3e3e;
  padding: 10px 20px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: ${document.body.clientWidth}px;

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
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #ff4655;
  }
`;

export const MessageContainer = styled.span`
  font-size: 1em;
  color: orange;
  max-width: 250px;
`;

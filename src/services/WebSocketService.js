const ENDPOINT = 'wss://hometask.eg1236.com/game1/';
const DEFAULT_COLOR = 'color: blue;';
class WebSocketConnection {
  socket = null;
  debug = true;
  connect() {
    if (this.debug) {
      console.log(`%copening connection to ${ENDPOINT}`, DEFAULT_COLOR);
    }
    this.socket = new WebSocket(ENDPOINT);
    this.socket.onopen = this.onOpen;
    this.socket.onmessage = this.onMessage;
    this.socket.onclose = this.onClose;
  }
  onOpen = () => {
    if (this.debug) {
      console.log('%c you are online!', 'color: green');
    }
  };

  onMessage = data => {
    if (this.debug) {
      console.log('%cincoming message', DEFAULT_COLOR, data);
    }
  };
  onClose = () => {
    if (this.debug) {
      console.log('%cbye bye', 'color: red');
    }
  };
  disconnect = () => {
    if (this.debug) {
      console.log(`%cdisconnecting from ${ENDPOINT}`, DEFAULT_COLOR);
    }
    this.socket.close();
  };

  send = data => {
    if (this.debug) {
      console.log('%csending', DEFAULT_COLOR, data);
    }
    this.socket.send(data);
  };
  on(scope, listener) {
    this.socket.addEventListener(scope, listener);
  }
  un(scope, listener) {
    this.socket.removeEventListener(scope, listener);
  }
}

export default WebSocketConnection;

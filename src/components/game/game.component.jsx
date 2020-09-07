import React from 'react';
import Board from '../board/board.component';
import './game.styles.scss';
import WebSocketService from '../../services/WebSocketService';

class Game extends React.Component {
  state = {
    map: [],
    gameOver: false,
    currentLevel: '1',
    gameStarted: false
  };

  componentDidMount = () => {
    this.connection = new WebSocketService();
    this.connection.connect();
    this.connection.on('open', this.onOpen);
    this.connection.on('message', this.onMessage);
  };

  onOpen = () => {
    // @todo: add an online status in the header
  };

  onMessage = message => {
    const data = message.data;
    const command = (data || '').split(':')[0];
    switch (command) {
      case 'map': {
        this.paintMap(data);
        break;
      }
      case 'open': {
        if (data.indexOf('You lose') >= 0) {
          console.log('%c Game Over!', 'color: red;');
          this.setState({ gameOver: true });
        }
        break;
      }
      case 'help':
      case 'new': {
        break;
      }
      default: {
        console.log(
          '%c warning: command not handled yet',
          'color: orange;',
          command,
          data
        );
        break;
      }
    }
  };

  paintMap = data => {
    if (data.indexOf('Not started') >= 0) {
      this.setState({ map: [], gameStarted: false });
      return;
    }
    const map = data.trim().substr(5).split('\n');

    this.setState({ map: map });
  };

  restartGame = () => {
    this.setState({ gameOver: false });
    this.startGame();
  };

  startGame = () => {
    const levelSelect = document.getElementById('level');
    let level = this.currentLevel || 1;

    if (levelSelect) {
      level = levelSelect.value;
      this.currentLevel = level;
    }
    this.setState({ gameStarted: true });
    this.connection.send(`new ${level}`);
    this.connection.send('map');
  };

  onButtonClick = action => {
    this.connection.send(`open ${action}`);
    this.connection.send('map');
  };

  exitGame = () => {
    this.setState({ gameStarted: false });
  };

  render() {
    const { gameStarted, map, gameOver } = this.state;
    return (
      <div className='game-area'>
        <span className='message' hidden={!gameOver}>
          Game Over!
        </span>
        <br />
        {gameStarted ? (
          <div>
            <button onClick={this.exitGame}>Exit game</button>
            <button onClick={this.restartGame} hidden={!gameOver}>
              Restart game
            </button>
            <br />
            <Board squares={map} onButtonClick={this.onButtonClick} />
          </div>
        ) : (
          <>
            <label htmlFor='level'>Please choose a level:</label>
            <select name='level' id='level'>
              <option value='1' defaultValue>
                Novice
              </option>
              <option value='2'>Intermediate</option>
              <option value='3'>Expert</option>
              <option value='4'>King</option>
            </select>
            <button className='start-game' onClick={this.startGame}>
              Start New Game
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Game;

import './styles.css';
import goblinPic from './assets/goblin.png';
import Game from './game';
import GameField from './field';

const container = document.getElementById('game-container');
const field = new GameField(container, 4, goblinPic);
const game = new Game(field);

game.start();
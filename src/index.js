import './styles.css';
import goblinPic from './assets/goblin.png';
import Game from './game';
import GameField from './field';

const FIELD_SIZE = 4;
const container = document.getElementById('game-container');
const field = new GameField(container, FIELD_SIZE, goblinPic);
const game = new Game(field);

game.start();
export default class GameField {
  constructor(container, size = 4, goblinPic) {
    this.size = size;
    this.goblinPic = goblinPic;
    this.container = container;
    this.grid = null;
    this.goblin = null;
    this.prevIndex = null;
    this.goblInOnField = false;
    this.goblinClickHandler = null;
    this.scoreElement = null;
    this.missElement = null;
    this.gameOverElement = null;

    this.init();
  }

  init() {
    this.container.innerHTML = '';

    this.scoreElement = document.createElement('div');
    this.missElement = document.createElement('div');
    this.gameOverElement = document.createElement('div');
    this.gameOverElement.className = 'game-over-msg';

    this.container.append(this.scoreElement, this.missElement, this.gameOverElement);

    this.grid = document.createElement('div');
    this.grid.classList.add('grid');

    this.cells = [];
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.grid.append(cell);
      this.cells.push(cell);
    }

    this.container.append(this.grid);

    this.goblin = document.createElement('img');
    this.goblin.src = this.goblinPic;
    this.goblin.className = 'goblin';

    this.goblin.onclick = () => {
      if (this.goblinClickHandler) this.goblinClickHandler();
      this.goblInOnField = false;
    };
  }

  setGoblinClickHandler(fn) {
    this.goblinClickHandler = fn;
  }

  placeGoblin() {
    if (this.goblin.parentNode) {
      this.goblin.parentNode.removeChild(this.goblin);
    }
    let idx;
    do {
      idx = Math.floor(Math.random() * this.cells.length);
    } while (idx === this.prevIndex);
    this.cells[idx].append(this.goblin);
    this.prevIndex = idx;
    this.goblInOnField = true;
  }

  removeGoblin() {
    if (this.goblin.parentNode) {
      this.goblin.parentNode.removeChild(this.goblin);
      this.goblInOnField = false;
    }
  }

  updateScore(score) {
    this.scoreElement.textContent = `Счёт: ${score}`;
  }
  updateMissed(missed) {
    this.missElement.textContent = `Промахов: ${missed}`;
  }
  showGameOver(score) {
    this.gameOverElement.textContent = `Игра окончена! Ваш счет: ${score}`;
  }
}
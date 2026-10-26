export default class Game {
  constructor(field) {
    this.field = field;
    this.score = 0;
    this.missed = 0;
    this.maxMissed = 5;
    this.moveIntervalId = null;
    this.gameActive = false;

    this.field.setGoblinClickHandler(() => this.hit());
  }

  start() {
    this.score = 0;
    this.missed = 0;
    this.gameActive = true;
    this.field.updateScore(this.score);
    this.field.updateMissed(this.missed);

    this.moveGoblin();

    this.moveIntervalId = setInterval(() => this.moveGoblin(), 1000);
  }

  stop() {
    this.gameActive = false;
    clearInterval(this.moveIntervalId);
    this.field.showGameOver(this.score);
  }

  moveGoblin() {
    if (this.field.goblInOnField) {
      this.missed++;
      this.field.updateMissed(this.missed);
    }
    if (this.missed >= this.maxMissed) {
      this.stop();
      return;
    }
    this.field.placeGoblin();
  }

  hit() {
    if (!this.gameActive) return;
    this.score++;
    this.field.updateScore(this.score);
    this.field.removeGoblin();
  }
}
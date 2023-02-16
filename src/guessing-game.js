class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.max = max;
    this.min = min;
  }

  guess() {
    return Math.round((this.max + this.min) / 2);
  }

  lower() {
    this.max = Math.round((this.max + this.min) / 2);
    this.min = this.min;
  }

  greater() {
    this.min = Math.round((this.max + this.min) / 2);
    this.max = this.max;
  }
}

module.exports = GuessingGame;

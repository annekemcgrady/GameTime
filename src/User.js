import domUpdates from './domUpdates';

class User {
  constructor(name, player) {
    this.name = name;
    this.score = 0;
    this.player = player;
  }

  updateScore(amount) {
    this.score += amount;
    domUpdates.displayScore(this.player, this.score);
  }

  updateFinalRoundScore(amount) {
    this.score += amount * 2
    domUpdates.displayFinalRoundScore(this.player, this.score);
  }

}

export default User;


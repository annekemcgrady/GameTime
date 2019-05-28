import domUpdates from './domUpdates';
import Game from './Game';
import Round from './Round';

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
    this.score += amount*2
    console.log("AMOUNT", amount)
    console.log("PLAYER", this.player)
    console.log("SCORE", this.score)
    domUpdates.displayFinalRoundScore(this.player, this.score);
  }
  //DOM update name 

}

export default User;


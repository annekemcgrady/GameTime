import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import Turn from './Turn';

class Round {
  constructor(game, survey, user1, user2) {
    this.game = game;
    this.survey = survey;
    console.log(this.survey.survey.question)
    this.answers = this.survey.answers
    this.users = [user1, user2];
    this.currentPlayer = null;
  }

  displayCurrentQuestion() {
    domUpdates.displayCurrentQuestion(this.survey.survey.question);
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === null) {
      this.currentPlayer = this.users[0];
      domUpdates.displayCurrentPlayer(this.currentPlayer)
    } else if (game.roundCount === 2) {
      this.currentPlayer = this.users[1];
      domUpdates.displayCurrentPlayer(this.currentPlayer)
    }
  }
  
  changeTurn() {
    let index = this.users.indexOf(this.currentPlayer);
    this.currentPlayer = this.users[1-index];
    let turn = new Turn (this.currentPlayer, this);
    domUpdates.displayCurrentPlayer(this.currentPlayer);
  }

  eliminateGuessedAnswer(index) {
    if (this.answers.length > 0) {
      return this.answers.splice(index, 1)
    } else {
      this.game.updateRound();
    }
  }
  

  increaseScore(guess) {
    if(this.currentPlayer === this.users[0]) {
      user.score += this.survey.answers.find(amount => amount.answer === guess).respondents;
    }
  }

  finishRoundMessage() {
}

}

export default Round;
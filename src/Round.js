import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import Turn from './Turn';

class Round {
  constructor(game, survey, user1, user2) {
    this.game = game;
    this.survey = survey;
    this.answers = this.survey.answers.sort((a,b) => b.respondents-a.respondents)
    console.log(this.answers);
    this.users = [user1, user2];
    // this.currentPlayer = null;
    this.turn = {};
    console.log(this.turn)
  }

  displayCurrentQuestion() {
    domUpdates.displayCurrentQuestion(this.survey.survey.question);
  }

  updateCurrentPlayer() {
    let newTurn = new Turn (this);
    this.turn = newTurn; 
    if(this.turn.currentPlayer === null) {
      this.turn.currentPlayer = this.users[0];
      this.turn = newTurn;
      console.log(this.turn)
      domUpdates.displayCurrentPlayer(this.turn.currentPlayer)
    } else if (this.game.roundCount === 2) {
      this.turn.currentPlayer = this.users[1];
      let turn = new Turn (this);
      this.turn = newTurn; 
      console.log(this.turn)
      domUpdates.displayCurrentPlayer(this.turn.currentPlayer)
    }
  }
  
  changeTurn() {
    let index = this.users.indexOf(this.turn.currentPlayer);
    this.turn.currentPlayer = this.users[1-index];
    let turn = new Turn (this);
    console.log(this.turn.currentPlayer);
    domUpdates.displayCurrentPlayer(this.turn.currentPlayer);
  }

  eliminateGuessedAnswer(index) {
    if (this.answers.length > 0) {
      return this.answers.splice(index, 1)
    } else {
      this.game.updateRound();
    }
  }

  finishRoundMessage() {
}

}

export default Round;
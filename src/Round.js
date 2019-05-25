import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import Turn from './Turn';

class Round {
  constructor(game, survey, user1, user2) {
    this.game = game;
    this.survey = survey;
    this.answers = this.survey.answers.sort((a,b) => b.respondents-a.respondents)
    console.log(this.survey);
    this.users = [user1, user2];
    this.turn = {};
    console.log(this.turn)
  }

  displayCurrentQuestion() {
    domUpdates.displayCurrentQuestion(this.survey.survey.question);
  }

  updateCurrentPlayer() {
    let newTurn = new Turn(this);
    this.turn = newTurn; 
    if(this.turn.currentPlayer === null) {
      this.turn.currentPlayer = this.users[0];
      this.turn = newTurn;
      domUpdates.displayCurrentPlayer(this.turn.currentPlayer)
    } else if (this.game.roundCount === 2) {
      this.turn.currentPlayer = this.users[1];
      let turn = new Turn (this);
      this.turn = newTurn; 
      domUpdates.displayCurrentPlayer(this.turn.currentPlayer)
    }
  }
  
  changeTurn() {
    let index = this.users.indexOf(this.turn.currentPlayer);
    this.turn.currentPlayer = this.users[1-index];
    let turn = new Turn (this);
    domUpdates.displayCurrentPlayer(this.turn.currentPlayer);
  }

  eliminateGuessedAnswer(index) {
    if (this.answers.length > 0) {
      this.answers.splice(index, 1)
      console.log(this.answers)
      if (this.answers.length === 0){
        this.game.updateRound();
      }
    }
  }

  finishRoundMessage() {
}

}

export default Round;
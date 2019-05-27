import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import FinalRound from './FinalRound';


class Round {
  constructor(game, survey, user1, user2) {
    this.game = game;
    this.survey = survey;
    this.answers = this.survey.answers.sort((a,b) => b.respondents-a.respondents)
    this.users = [user1, user2];
    this.currentPlayer = null;
    this.guess = '';
    this.turn = {};
  }

  displayCurrentQuestion() {
    domUpdates.displayCurrentQuestion(this.survey.survey.question);
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === null) {
      this.currentPlayer = this.users[0];
      domUpdates.displayCurrentPlayer(this.currentPlayer)
    } else if (this.game.roundCount === 2) {
      this.currentPlayer = this.users[1];
      domUpdates.displayCurrentPlayer(this.currentPlayer)
    }
  }

  //MOVED FROM TURN
  returnUserGuess(guess) {
    this.guess = guess;
    if(this.game.roundCount < 3) {
    this.evaluateGuess(guess);
    } 
  }

  //MOVED FROM TURN
  evaluateGuess(guess) {
    let threeAnswers = this.answers;
    let threeWords = threeAnswers.map(el => el.answer.toUpperCase())
    if (threeAnswers.map(el => el.answer.toUpperCase()).includes(guess.toUpperCase())){
      let scoreUpdate= threeAnswers.find(el => {
        if(el.answer.toUpperCase() === guess.toUpperCase()) {
          return el
        }
      })
      domUpdates.displayEachAnswer(scoreUpdate)
      this.currentPlayer.updateScore(scoreUpdate.respondents);
      let indexOfGuess = threeWords.indexOf(guess.toUpperCase());
      this.eliminateGuessedAnswer(indexOfGuess);
    } else {
      this.changeTurn(this.currentPlayer);
    }
  }
  
  changeTurn(currentPlayer) {
    let index = this.users.indexOf(currentPlayer);
    this.currentPlayer = this.users[1-index];
    domUpdates.displayCurrentPlayer(this.currentPlayer);
  }

  eliminateGuessedAnswer(index) {
    if (this.answers.length > 0) {
      this.answers.splice(index, 1)
      if (this.answers.length === 0){
        this.game.updateRound();
      }
    }
  }

  finishRoundMessage() {
  }
}

export default Round;
import Game from './Game';
import Round from './Round';
import User from './User';
import { userInfo } from 'os';

class Turn {
  constructor(currentPlayer, round) {
    this.currentPlayer = currentPlayer;
    this.round = round;
    this.guess = '';
    console.log(this.guess);
  }

  // returnCurrentAnswers(){
  //   return this.answers = this.surveys.answers.map(el => el.answer)
  // }

  returnUserGuess(guess) {
    this.guess = guess;
    this.evaluateGuess(guess);
  }

  evaluateGuess(guess) {
    let threeAnswers = this.round.survey.answers;
    let threeWords = threeAnswers.map(el => el.answer)
    if (threeAnswers.map(el => el.answer.toUpperCase()).includes(guess.toUpperCase())){
      let scoreUpdate= threeAnswers.find(el => {
        if(el.answer.toUpperCase() === guess.toUpperCase()) {
          return el
        }
      })
      this.currentPlayer.updateScore(scoreUpdate.respondents);
      let indexOfGuess = threeWords.indexOf(guess);
      this.round.eliminateGuessedAnswer(indexOfGuess);
    } else {
      this.round.changeTurn();
    }
  }

}

export default Turn;
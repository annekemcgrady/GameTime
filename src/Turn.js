import Game from './Game';
import Round from './Round';
import User from './User';
import { userInfo } from 'os';
import domUpdates from './domUpdates';

class Turn {
  constructor(round) {
    this.currentPlayer = null;
    this.round = round;
    this.guess = '';
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
      this.round.eliminateGuessedAnswer(indexOfGuess);
    } else {
      this.round.changeTurn();
    }
  }

//Need to finish

  // finalRoundEvaluateGuess(guess) {
  //   let threeAnswers = this.round.survey.answers;
  //   let threeWords = threeAnswers.map(el => el.answer.toUpperCase())
  //   if (threeAnswers.map(el => el.answer.toUpperCase()).includes(guess.toUpperCase())){
  //     let scoreUpdate= threeAnswers.find(el => {
  //       if(el.answer.toUpperCase() === guess.toUpperCase()) {
  //         return el
  //       }
  //     })
  //     this.currentPlayer.updateScore(scoreUpdate.respondents*);
  //     let indexOfGuess = threeWords.indexOf(guess.toUpperCase());
  //     this.round.eliminateGuessedAnswer(indexOfGuess);
  //   } 
  // }


//after 30 seconds
//finalRoundEvaluateGuess
  // domUpdates.displayAllCorrectAnswers(scoreUpdate) //displayAllCorrectAnswers
 

}

export default Turn;
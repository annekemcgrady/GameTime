import domUpdates from './domUpdates';
import User from './User';
import Game from './Game';
import Round from './Round';

class FinalRound extends Round {
  constructor(game, survey, user1, user2, secondSurvey) {
  super(game, survey, user1, user2)
    this.secondSurvey = secondSurvey;
    this.secondAnswers = this.secondSurvey.answers.sort((a,b) => b.respondents-a.respondents)
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === null) {
      this.currentPlayer = this.users[0];
      domUpdates.displayCurrentPlayer(this.currentPlayer)
      this.displayFinalRoundCurrentQuestion();
    } else {
        if(this.currentPlayer === this.users[1]) {
          domUpdates.displayWinner(this.users[0], this.users[1])
      } else {
      this.currentPlayer = this.users[1];
      domUpdates.addDisabledAttribute()
      domUpdates.displayFinalRoundScore();
      domUpdates.displayCurrentPlayer(this.currentPlayer)
      domUpdates.addHiddenClass();
      this.displayFinalRoundCurrentQuestion();
      domUpdates.setFinalRoundAnswers(this.secondSurvey);
      }
    }
  }


  displayFinalRoundCurrentQuestion() {
    if (this.currentPlayer === this.users[0]){
      domUpdates.displayCurrentQuestion(this.survey.survey.question);
    } else {
      domUpdates.displayCurrentQuestion(this.secondSurvey.survey.question);
    }
  }

  evaluateFinalRoundGuess(guess) {
    let threeAnswers;
    if (this.currentPlayer === this.users[0]){
      threeAnswers = this.answers;
    } else {
      threeAnswers = this.secondAnswers;
    }
    if (threeAnswers.map(el => el.answer.toUpperCase()).includes(guess.toUpperCase())){
      let scoreUpdate = threeAnswers.find(el => {
        if(el.answer.toUpperCase() === guess.toUpperCase()) {
          return el
        }
      })
      this.currentPlayer.updateFinalRoundScore(scoreUpdate.respondents);
      console.log(scoreUpdate.answer.toUpperCase())
      domUpdates.displayEachFinalRoundAnswers(scoreUpdate.answer.toUpperCase());
    } 
  }

}





export default FinalRound;
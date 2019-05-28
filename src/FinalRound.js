import domUpdates from './domUpdates';
import User from './User';
import Game from './Game';
import Round from './Round';

class FinalRound extends Round {
  constructor(game, survey, user1, user2, secondSurvey) {
  super(game, survey, user1, user2)
  // this.game = game;
  // this.survey = survey;
  // this.answers = this.survey.answers.sort((a,b) => b.respondents-a.respondents)
  // this.users = [user1, user2];
  // this.currentPlayer = null;
  // this.guess = '';
  // this.turn = {};
    this.secondSurvey = secondSurvey;
    this.secondAnswers = this.secondSurvey.answers.sort((a,b) => b.respondents-a.respondents)
    this.guessedAnswers = [];
  }


  displayFinalRoundCurrentQuestion() {
    if (this.currentPlayer === this.users[0]){
      domUpdates.displayCurrentQuestion(this.survey.survey.question);
    } else if(this.currentPlayer === this.users[1]){
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
      console.log("HERE!")
      this.currentPlayer.updateFinalRoundScore(scoreUpdate.respondents);
      domUpdates.displayEachAnswer(scoreUpdate);
    } 
  }
  // gameTimer()
  changeFinalRoundTurn() {
    // domUpdates.displayEachFinalRoundAnswers();
    domUpdates.displayFinalRoundScore();

    // domUpdates.
    this.changeTurn(this.users[0]);
    domUpdates.setAnswers(this.survey);
  }

  displayFinalRoundCurrentQuestion() {
    domUpdates.displayFinalRoundCurrentQuestion(this.survey.survey.question);
  }

  // compareAnswersToGuessedAnswers(guess) {
  //   this.guessedAnswers.push(guess.toUpperCase())
  //   if (this.currentPlayer === this.users[0]){
  //     this.guessedAnswers.reduce((acc, word) => {
  //       let upperCased = this.answers.map(el => el.answer.toUpperCase())
  //       if (upperCased.includes(word)) {

  //        acc.push(word)
  //        console.log(acc)
  //       }
  //       return acc
  //     }, [])
  //   } else {
  //     this.guessedAnswers.reduce((acc, word) => {
  //       let upperCased = this.secondAnswers.map(el => el.answer.toUpperCase())
  //       if (upperCased.includes(word)) {
  //        acc.push(word)
  //        console.log(acc)
  //       }
  //       return acc
  //     }, [])
  //   }
  //   this.distributeCorrectAnswers(guess);
  // }

  distributeCorrectAnswers(guess) {
    let uppercasedGuess = guess.toUpperCase();
    let upperCased = this.answers.map(el => {
      return {
        answer: el.answer.toUpperCase(),
        respondents: el.respondents
      }
    })
    upperCased.forEach(answer => {
      if(upperCased.includes(uppercasedGuess)){
        let scoreUpdate= upperCased.find(el => {
          if(el.answer === uppercasedGuess) {
            return el
          }
        })
        console.log(this.currentPlayer)
        this.currentPlayer.updateFinalRoundScore(scoreUpdate.respondents)
        domUpdates.displayEachFinalRoundAnswers(answer.answer);
      }
      console.log("YES!", guess)
      console.log("RESPONDENTS", answer.respondents)
      // let scoreAmount = upperCased.find(guess => guess.answer === guess)
    })
  }


}





export default FinalRound;
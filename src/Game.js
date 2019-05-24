import domUpdates from './domUpdates';
import Round from './Round';
import data from '../data/surveys';

class Game {
  constructor(data, user1, user2) {
    this.data = data;
    this.users = [user1, user2];
    this.gameSurveys = [];
    this.roundCount = 0;
    this.ids = [];
    this.round = {};
  }

  selectFourQuestionsIDs(){
    let allSurveys = this.data.surveys.map(el => el.id)
    let currentIndex = allSurveys.length;
    let tempValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;
      tempValue = allSurveys[currentIndex]
      allSurveys[currentIndex] = allSurveys[randomIndex]
      allSurveys[randomIndex] = tempValue;
    }
    this.ids = this.ids.concat(allSurveys.splice(0,4))
  }
    
  setGameSurveyObjects() {
  this.gameSurveys = this.ids.map(el => this.createSurveyObject(el))
  }

  createSurveyObject(id) {
    let survey = this.data.surveys.find(el => el.id === id)
    let answers = this.data.answers.filter(el => el.surveyId === id)
    let object = {}
    object.survey = survey;
    object.answers = answers;
    return object;
  }

  start() {
    this.selectFourQuestionsIDs();
    this.setGameSurveyObjects();
    let newRound = new Round(this, this.gameSurveys[0], this.users[0], this.users[1]);
    this.round = newRound;
    console.log(this.round);
    this.round.displayCurrentQuestion();
    this.round.updateCurrentPlayer();
    this.gameSurveys.shift();
    this.roundCount++;
    domUpdates.showCurrentRound(this.roundCount);
  }
  
  updateRound() {
    this.roundCount++;
    domUpdates.showCurrentRound(this.roundCount);
    if (this.roundCount > 2) {
      let finalRound = new FinalRound();
    }else {
      console.log("ELSE")
      let newRound = new Round(this, this.gameSurveys[0], this.users[0], this.users[1]);
      this.round = newRound
      this.gameSurveys.shift()
      this.round.displayCurrentQuestion();
    }
  }

  endGame() {
    // DOM hard reset??????
  }


}

export default Game;
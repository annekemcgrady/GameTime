import $ from 'jquery';
import FinalRound from './FinalRound';
import Game from './Game';
import User from './User';
import Round from './Round';



const domUpdates = {

  displayNames: function(user1, user2) {
    $('.name-player-one').html(user1);
    $('.name-player-two').html(user2);
  },

  showCurrentRound: function(round) {
    $('.round-num').html(round);
  },

  displayCurrentQuestion: function(question) {
    $('.question').html(question)
  },

  setAnswers(survey){
    $('.answer-1').html(survey.answers[0].answer)
    $('.answer-2').html(survey.answers[1].answer)
    $('.answer-3').html(survey.answers[2].answer)
    $('.respondents-1').html(survey.answers[0].respondents)
    $('.respondents-2').html(survey.answers[1].respondents)
    $('.respondents-3').html(survey.answers[2].respondents)
  },

  displayCurrentPlayer(player){
    if(player.player === 'playerOne'){
      $('.player-one').addClass('your-turn');
      $('.player-two').removeClass('your-turn');
    } else {
      $('.player-two').addClass('your-turn');
      $('.player-one').removeClass('your-turn');
    }
  },

  displayScore(player, score){
    if(player === 'playerTwo') {
      $('.player-two-score').text(score);
    } else {
      $('.player-one-score').text(score);
    }
  },

  displayEachAnswer() {
    if ($('.answer-1').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
      $('.answer-1').toggle('hidden');
      $('.respondents-1').toggle('hidden');
    } else if ($('.answer-2').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
      $('.answer-2').toggle('hidden');
      $('.respondents-2').toggle('hidden');
    } else if ($('.answer-3').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
      $('.answer-3').toggle('hidden');
      $('.respondents-3').toggle('hidden');
    }   
  },

  addHiddenClass() {
    console.log("HI")
    $('.answer-1').toggle('hidden');
    $('.respondents-1').toggle('hidden');
    $('.answer-2').toggle('hidden');
    $('.respondents-2').toggle('hidden');
    $('.answer-3').toggle('hidden');
    $('.respondents-3').toggle('hidden');
  },

  // displayAllCorrectAnswers() {
  //   if($('.answer-1').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
  //     $('.answer-1').removeClass('hidden');
  //     $('.respondents-1').removeClass('hidden');
  //   } 
  //   if ($('.answer-2').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
  //     $('.answer-2').removeClass('hidden');
  //     $('.respondents-2').removeClass('hidden');
  //   } 
  //   if ($('.answer-3').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
  //     $('.answer-3').removeClass('hidden');
  //     $('.respondents-3').removeClass('hidden');
  //   }   
  // },

  revealFinalRoundPage() {
     $('.final-round-page').removeClass('hidden');
     $('main').addClass('hidden')
  }, 

  // delayedAlert() {
  //   timeoutID = window.setTimeout(window.alert, 1000, 'That was really slow!');
  // },

  // clearAlert() {
  //   window.clearTimeout(timeoutID);
  // }

  displayEachFinalRoundAnswers(finalGuess) {
    setTimeout(function(){
      if ($('.answer-1').html().toUpperCase() === finalGuess){
        $('.answer-1').fadeIn(0).toggle('hidden');
        $('.respondents-1').fadeIn(0).toggle('hidden');
      } else if ($('.answer-2').html().toUpperCase() === finalGuess){
        $('.answer-2').fadeIn(0).toggle('hidden');
        $('.respondents-2').fadeIn(0).toggle('hidden');
      } else if ($('.answer-3').html().toUpperCase() === finalGuess){
        $('.answer-3').fadeIn(0).toggle('hidden');
        $('.respondents-3').fadeIn(0).toggle('hidden');
      }   
    },15000)
  },

  displayFinalRoundScore(player, score){
    console.log("player", player)
    console.log("score", score)
    setTimeout(function(){
    if(player === 'playerTwo') {
      $('.player-two-score').text(score);
    } else {
      $('.player-one-score').text(score);
    }
    },5000)
  },

  // displayFinalRoundCurrentQuestion(question) {
  //   $('.question').html(question) 
  // }





};

export default domUpdates;
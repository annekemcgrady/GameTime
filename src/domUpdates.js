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

  setFinalRoundAnswers(survey){
    $('.answer-1-final').html(survey.answers[0].answer)
    $('.answer-2-final').html(survey.answers[1].answer)
    $('.answer-3-final').html(survey.answers[2].answer)
    $('.respondents-1-final').html(survey.answers[0].respondents)
    $('.respondents-2-final').html(survey.answers[1].respondents)
    $('.respondents-3-final').html(survey.answers[2].respondents)
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
      $('.answer-1').removeClass('hidden');
      $('.respondents-1').removeClass('hidden');
    } else if ($('.answer-2').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
      $('.answer-2').removeClass('hidden');
      $('.respondents-2').removeClass('hidden');
    } else if ($('.answer-3').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()){
      $('.answer-3').removeClass('hidden');
      $('.respondents-3').removeClass('hidden');
    }   
  },

  addHiddenClass() {
    console.log("HIDDEN")
    $('.answer-1').addClass('hidden');
    $('.respondents-1').addClass('hidden');
    $('.answer-2').addClass('hidden');
    $('.respondents-2').addClass('hidden');
    $('.answer-3').addClass('hidden');
    $('.respondents-3').addClass('hidden');
    $('.answer-1-final').toggle('hidden');
    $('.respondents-1-final').toggle('hidden');
    $('.answer-2-final').toggle('hidden');
    $('.respondents-2-final').toggle('hidden');
    $('.answer-3-final').toggle('hidden');
    $('.respondents-3-final').toggle('hidden');
    
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
     $('header').addClass('hidden')
  }, 

  // delayedAlert() {
  //   timeoutID = window.setTimeout(window.alert, 1000, 'That was really slow!');
  // },

  // clearAlert() {
  //   window.clearTimeout(timeoutID);
  // }

  displayEachFinalRoundAnswers(finalGuess) {
    console.log('DISPLAY EACH FINAL ANSWER', finalGuess)
    console.log($('.answer-1-final').html())
    setTimeout(function(){
      if ($('.answer-1-final').html().toUpperCase() === finalGuess){
        $('.answer-1-final').fadeIn(0).removeClass('hidden');
        $('.respondents-1-final').fadeIn(0).removeClass('hidden');
      } else if ($('.answer-2-final').html().toUpperCase() === finalGuess){
        $('.answer-2-final').fadeIn(0).removeClass('hidden');
        $('.respondents-2-final').fadeIn(0).removeClass('hidden');
      } else if ($('.answer-3-final').html().toUpperCase() === finalGuess){
        $('.answer-3-final').fadeIn(0).removeClass('hidden');
        $('.respondents-3-final').fadeIn(0).removeClass('hidden');
      }   
    },12000)
  },

  displayFinalRoundScore(player, score){
    setTimeout(function(){
    if(player === 'playerTwo') {
      $('.player-two-score').text(score);
    } else {
      $('.player-one-score').text(score);
    }
    },15000)
  },

  // displayFinalRoundCurrentQuestion(question) {
  //   $('.question').html(question) 
  // }





};

export default domUpdates;
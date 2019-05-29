// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import fetch from 'cross-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/normalize.scss'
import './css/base.scss';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/pink-diamond-barbie-head.jpg'
import './images/winner-barbie.jpg'
import data from '../data/surveys';

import User from './User';
import Game from './Game';
import domUpdates from './domUpdates';

let game;
let user1;
let user2;
var feudData;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(function(response) {
    response.json().then(function(info) {
      setData(info.data);
    })
  })
  .catch(err => console.error('Error'));


function setData(info) {
  feudData = info
}


$(document).ready(function() {

  $('body').prepend('<section class="landing-page"><h1 class="landing-title"><a href="https://fontmeme.com/barbie-font/"><img src="https://fontmeme.com/permalink/190527/9e1dea4903b801f58a178b13c0f4ffdf.png" alt="barbie-font" border="0"></a></h1><form class="intro-form"><input class="name-one" placeholder="Player One Name"><input class="name-two" placeholder="Player Two Name"><button class="start-button" type="button" id="star-five"><img src="https://fontmeme.com/permalink/190526/3844168efd44c37ec2867285667d7ac4.png" alt="barbie-font" border="0"></a></button></form></section>')

  $('body').prepend('<section class="final-round-page hidden"><div class="final-page-header"><h1><a href="https://fontmeme.com/barbie-font/"><img src="https://fontmeme.com/permalink/190527/9d3609fad958993950cd4e6869a56e20.png" alt="barbie-font" border="0"></a></h1><p class="final-round-message">Welcome to the Fast Money Round. You will have 30 seconds to enter your guesses. All points are doubled! Press the Start Final Round button to begin.</p><button type="button" class="start-final-round-btn">Start Final Round</button></div><div class="final-main"><section class="player-area player-one"><h3 class="player-one-name"><span class="name-player-one">NAME ONE</span></h3><div class="player-one-score">0</div></section><figure class="survey"><time class="timer">Timer: <span class="seconds">30 </span>seconds</time><h2 class="survey-question"><span class="question"></span></h2><div class="survey-board"><div class="align-answer-respondents"><h3 class="answer"><span class="answer-1-final hidden"></span></h3><h3 class="respondents"><span class="respondents-1-final hidden"></span></h3></div><div class="align-answer-respondents"><h3 class="answer"><span class="answer-2-final hidden"></span></h3><h3 class="respondents"><span class="respondents-2-final hidden"></span></h3></div><div class="align-answer-respondents"><h3 class="answer"><span class="answer-3-final hidden"></span></h3><h3 class="respondents"><span class="respondents-3-final hidden"></span></h3></div></div><form class="final-player-guess"><label class="final-guess-input-label" for="final-guess-input">Please enter your guess...</label><input type="text" id="final-guess-input" class="final-guess-input"><button type="button" class="submit-final-guess">SUBMIT GUESS</button><button type="button" class="quit">QUIT GAME</button></form></figure><section class="player-area player-two"><h3 class="player-two-name"><span class="name-player-two">NAME TWO</span></h3><div class="player-two-score">0</div></section></div>')


  $('.start-button').on('click', function() {
    user1 = new User($('.name-one').val(), "playerOne");
    user2 = new User($('.name-two').val(), "playerTwo");
    game = new Game(feudData, user1, user2);
    game.start();
    $('.landing-page').slideToggle('slow');
    domUpdates.displayNames(user1.name, user2.name);
  })

  $('.intro-form').on('submit', function(e) {
    e.preventDefault();
    user1 = new User($('.name-one').val(), "playerOne");
    user2 = new User($('.name-two').val(), "playerTwo");
    game = new Game(feudData, user1, user2);
    game.start();
    $('.landing-page').slideToggle('slow');
    domUpdates.displayNames(user1.name, user2.name); 
  });

  $('.player-guess').on('submit', function(e) {
    e.preventDefault();
    game.round.returnUserGuess($('#user-guess-input').val())
    $('.guess-input').val('')
  });

  $('.submit-guess').on('click', function(e) {
    e.preventDefault();
    game.round.returnUserGuess($('#user-guess-input').val())
    $('.guess-input').val('')
  });

  $('.quit').click(function() {
    location.reload (true);
  });
  
  $('.final-player-guess').on('submit', function(e) {
    e.preventDefault();
    game.finalRound.evaluateFinalRoundGuess($('#final-guess-input').val());
    $('#final-guess-input').val('');
  });

  $('.submit-final-guess').on('submit', function(e) {
    e.preventDefault();
    game.finalRound.evaluateFinalRoundGuess($('#final-guess-input').val());
    $('#final-guess-input').val('');
  });

  $('.submit-final-guess').on('click', function(e) {
    e.preventDefault();
    game.finalRound.evaluateFinalRoundGuess($('#final-guess-input').val());
    $('#final-guess-input').val('');
  });

  $('.start-final-round-btn').on('click', function() {
    var started = false;
    var timeLeft = 30;
    var elem = $('.seconds');
    if (!started) {
      started = true;
      var timerId = setInterval(countdown, 1000);
    }

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        setTimeout(() => {
          game.finalRound.updateCurrentPlayer() 
        }, 13000);
       
      } else {
        elem.html(timeLeft);
        timeLeft--;
      }
   
    }
    $('#final-guess-input').removeAttr('disabled')
  })

  $('.final-guess-input').focus(function() {
    $(this).removeAttr('placeholder')
  })

  $('.final-guess-input').blur(function() {
    $(this).attr('placeholder')
  })

});

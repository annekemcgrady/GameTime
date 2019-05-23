import $ from 'jquery';
import User from './User';
import Round from './Round';
import Game from './Game';


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

  displayCurrentPlayer(player){
    if(player.player === 'playerOne'){
      $('.player-one').addClass('your-turn');
      $('.player-two').removeClass('your-turn');
    } else {
      $('.player-two').addClass('your-turn');
      $('.player-one').removeClass('your-turn');
    }
  }

  // displayWords: function(string){
  //   $('#words').text(string)
  // }

  // displayScore: function(score){
  //   $('.player-one-score').text(score)
  // }


};


export default domUpdates;
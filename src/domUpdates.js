import $ from 'jquery';
import User from './User';
import Round from './Round';
import Game from './Game';


const domUpdates = {

  displayNames: function(user1, user2) {
    $('.name-player-one').html(user1);
    $('.name-player-two').html(user2);
  }

  // displayWords: function(string){
  //   $('#words').text(string)
  // }

  // displayScore: function(score){
  //   $('.player-one-score').text(score)
  // }


};


export default domUpdates;
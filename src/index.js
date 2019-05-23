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

var data;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
    .then(function(response){
        return response.json()
    })
    .then(function(parsedData){
        data = parsedData;
        var user1 = new User("Anneke", "playerOne")
        var user2 = new User("Andreea", "playerTwo")
        var game = new Game(data, user1, user2)
    })
    .catch(err => console.error('Error'));


import User from './User';
import Game from './Game';

$(document).ready(function() {

$('body').prepend('<section class="landing-page"><h1 class="landing-title">Welcome to Family Feud!  Let\'s Start the Game!</h1><input class="name-one" placeholder="Player One Name"><input class="name-two" placeholder="Player Two Name"><button class="start-button" type="button" id="star-five"></button></section>')

$('.start-button').on('click', function(){
 $('.landing-page').slideToggle('slow')

})

$('.submit-guess').on('click', function(){
 user1.updateScore(100);
//  console.log(user1)
});


})


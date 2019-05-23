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
import data from '../data/surveys';

import User from './User';
import Game from './Game';
import domUpdates from './domUpdates';
let game;
let user1;
let user2;

var feudData;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
    .then(function(response){
        return response.json()
    })
    .then(function(parsedData){
        feudData = parsedData;
    })
    .catch(err => console.error('Error'));


$(document).ready(function() {

$('body').prepend('<section class="landing-page"><h1 class="landing-title">Welcome to Family Feud!  Let\'s Start the Game!</h1><input class="name-one" placeholder="Player One Name"><input class="name-two" placeholder="Player Two Name"><button class="start-button" type="button" id="star-five"></button></section>')


$('.start-button').on('click', function(){
    user1 = new User($('.name-one').val(), "playerOne");
    user2 = new User($('.name-two').val(), "playerTwo");
    game = new Game(data, user1, user2);
    game.start();
    $('.landing-page').slideToggle('slow')
    domUpdates.displayNames(user1.name, user2.name);
})

$('.submit-guess').on('click', function(){
    console.log(game.users)
});




})


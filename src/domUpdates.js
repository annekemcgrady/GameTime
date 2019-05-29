import $ from 'jquery';

const domUpdates = {

  displayNames(user1, user2) {
    $('.name-player-one').html(user1);
    $('.name-player-two').html(user2);
  },

  showCurrentRound(round) {
    $('.round-num').html(round);
  },

  displayCurrentQuestion(question) {
    $('.question').html(question)
  },

  setAnswers(survey) {
    $('.answer-1').html(survey.answers[0].answer)
    $('.answer-2').html(survey.answers[1].answer)
    $('.answer-3').html(survey.answers[2].answer)
    $('.respondents-1').html(survey.answers[0].respondents)
    $('.respondents-2').html(survey.answers[1].respondents)
    $('.respondents-3').html(survey.answers[2].respondents)
  },

  setFinalRoundAnswers(survey) {
    $('.answer-1-final').html(survey.answers[0].answer)
    $('.answer-2-final').html(survey.answers[1].answer)
    $('.answer-3-final').html(survey.answers[2].answer)
    $('.respondents-1-final').html(survey.answers[0].respondents)
    $('.respondents-2-final').html(survey.answers[1].respondents)
    $('.respondents-3-final').html(survey.answers[2].respondents)
  },

  displayCurrentPlayer(player) {
    if (player.player === 'playerOne') {
      $('.player-one').addClass('your-turn');
      $('.player-two').removeClass('your-turn');
    } else {
      $('.player-two').addClass('your-turn');
      $('.player-one').removeClass('your-turn');
    }
  },

  displayScore(player, score) {
    if (player === 'playerTwo') {
      $('.player-two-score').text(score);
    } else {
      $('.player-one-score').text(score);
    }
  },

  displayEachAnswer() {
    if ($('.answer-1').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()) {
      $('.answer-1').removeClass('hidden');
      $('.respondents-1').removeClass('hidden');
    } else if ($('.answer-2').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()) {
      $('.answer-2').removeClass('hidden');
      $('.respondents-2').removeClass('hidden');
    } else if ($('.answer-3').html().toUpperCase() === $('#user-guess-input').val().toUpperCase()) {
      $('.answer-3').removeClass('hidden');
      $('.respondents-3').removeClass('hidden');
    }   
  },

  addHiddenClass() {
    $('.answer-1').addClass('hidden');
    $('.respondents-1').addClass('hidden');
    $('.answer-2').addClass('hidden');
    $('.respondents-2').addClass('hidden');
    $('.answer-3').addClass('hidden');
    $('.respondents-3').addClass('hidden');
    $('.answer-1-final').addClass('hidden-final');
    $('.respondents-1-final').addClass('hidden-final');
    $('.answer-2-final').addClass('hidden-final');
    $('.respondents-2-final').addClass('hidden-final');
    $('.answer-3-final').addClass('hidden-final');
    $('.respondents-3-final').addClass('hidden-final');
    
  },

  revealFinalRoundPage() {
    $('.final-round-page').removeClass('hidden');
    $('main').addClass('hidden')
    $('header').addClass('hidden')
  }, 

  displayEachFinalRoundAnswers(finalGuess) {
    setTimeout(function() {
      if ($('.answer-1-final').html().toUpperCase() === finalGuess) {
        $('.answer-1-final').fadeIn(0).removeClass('hidden-final');
        $('.respondents-1-final').fadeIn(0).removeClass('hidden-final');
      } else if ($('.answer-2-final').html().toUpperCase() === finalGuess) {
        $('.answer-2-final').fadeIn(0).removeClass('hidden-final');
        $('.respondents-2-final').fadeIn(0).removeClass('hidden-final');
      } else if ($('.answer-3-final').html().toUpperCase() === finalGuess) {
        $('.answer-3-final').fadeIn(0).removeClass('hidden-final');
        $('.respondents-3-final').fadeIn(0).removeClass('hidden-final');
      }   
    }, 28000)
  },

  displayFinalRoundScore(player, score) {
    setTimeout(function() {
      if (player === 'playerTwo') {
        $('.player-two-score').text(score);
      } else {
        $('.player-one-score').text(score);
      }
    }, 29000)
  },

  displayWinner(user1, user2) {
    $('body').prepend('<section class="winner-display"><h1>CONGRATULATIONS <span class="winner-name"></span></h1><img class="barbie-winning-image" src="https://i.pinimg.com/originals/38/2d/c6/382dc6b9f23add6acefc189b4026b75e.jpg" alt="Barbie winning a pageant"><h2> YOUR SCORE: <span class="winner-score"></span></h2></section>')
    $('.final-round-page').addClass('hidden')

    if (user1.score > user2.score) {
      $('.winner-score').html(user1.score)
      $('.winner-name').html(user1.name)
    } else {
      $('.winner-score').html(user2.score)
      $('.winner-name').html(user2.name)
    }
  },

  addDisabledAttribute() {
    $('#final-guess-input').attr('disabled')
  }

};

export default domUpdates;
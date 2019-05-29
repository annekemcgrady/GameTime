import User from '../src/User';
var chai = require('chai');
var expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);
import domUpdates from '../src/domUpdates';

chai.spy.on(domUpdates, [
  'displayScore',
  'displayCurrentQuestion',
  'displayCurrentPlayer',
  'displayEachAnswer',
  'setAnswers',
  'showCurrentRound',
  'addHiddenClass',
  'displayFinalRoundScore'
], () => true);

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User('Anneke', 'playerTwo');
  }) 
  it('should be a function', function() {
    
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Anneke');
  })

  it('should have a score', function() {
    expect(user.score).to.equal(0);
  })

  it('should have a player identifier', function() {
    expect(user.player).to.equal('playerTwo');
  })

  it('should update the score according to the amount of respondents', function() {
    expect(user.score).to.equal(0);
    user.updateScore(30);
    expect(user.score).to.equal(30);
  })

  it('should update the score in the Final Round according to the amount of respondents times two', function() {
    expect(user.score).to.equal(0);
    user.updateFinalRoundScore(30);
    expect(user.score).to.equal(60);
  })

})





'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event Listener on '.check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When correct input
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.check').disabled = true;

    // When incorrect input
  } else {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('↗ Too High!');
      } else {
        displayMessage('↘ Too Low!');
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💥 You Lost The Game!');
      document.querySelector('.check').disabled = true;
    }
  }
});

// Event listener on '.again' button
document.querySelector('.again').addEventListener('click', function () {
  // Reset to initial state
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});

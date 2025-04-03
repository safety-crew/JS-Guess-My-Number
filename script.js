'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

// Event Listener on '.check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else {
    if (score > 1) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '↗ Too High!';
      } else {
        document.querySelector('.message').textContent = '↘ Too Low!';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You Lost The Game!';
    }
  }
});

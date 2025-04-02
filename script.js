'use strict';

// Event Listener on '.check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});

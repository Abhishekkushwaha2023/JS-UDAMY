'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = '🎉 Correct Number!');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

// 'Math.random()' gives us a random number between 0 to 1 to get number between 0 and any other number we multiply it with that number

// So "Math.random()" gives a number in points like "0.456789" so to remove number after points we use "Math.trunc()
/* 
example :-
Math.trunc(Math.random()*20 + 1)
to see example run it in the console. It value is random  and change everytime .
*/

let scoreValue = 10;
let highScoreValue = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number provide ';

    // When the Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    if (highScoreValue < scoreValue) {
      highScoreValue = scoreValue;
      document.querySelector('.highscore').textContent = highScoreValue;
    }

    document.querySelector('.message ').textContent =
      '🎉 Congratulation you guessed it right.';

    document.querySelector('body').style.backgroundColor = 'aqua';
  }

  // When the guess is different from secretNumber
  else if (guess !== secretNumber) {
    scoreValue = scoreValue - 1;
    if (scoreValue > 0) {
      document.querySelector('.score').textContent = scoreValue;
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 The guess is too high'
          : '📈 The guess is too low';
    } else {
      document.querySelector('.message').textContent = ' You Loss the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// To play again in rounds
document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 10;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // highScoreValue = highScoreValue + 1;
  // document.querySelector('.highscore').textContent = highScoreValue;
  document.querySelector('body').style.backgroundColor = 'black';
});

// To reload the page to play again
// document
//   .querySelector('.again')
//   .addEventListener('click', function refreshPage() {
//     location.reload();
//   });

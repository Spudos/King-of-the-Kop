/*jshint esversion: 6 */
// **** game ****
// set required vaiables
const gameContainer = document.getElementById('gameContainer');
const instructions = document.getElementById('instructions');
const startGameButton = document.getElementById('startGameButton');
const message = document.getElementById('message');
const homePenaltyDisplay = document.getElementById('homePenaltyDisplay');
const awayPenaltyDisplay = document.getElementById('awayPenaltyDisplay');
const pens = document.getElementById('pens');
const blocks = document.querySelectorAll('.block');

let homePenalty = 0;
let awayPenalty = 0;
let iteration = 0;

// add listener for start button and show game/hide rules when pressed
startGameButton.addEventListener('click', function() {
gameContainer.style.display = 'block';
instructions.style.display = 'none';
});

// on block click comepare with random number to see if matched then process outcome
function handleBlockClick() {
  // turns of button click listener until it is time for the next go
  blocks.forEach(block => {
    block.removeEventListener('click', handleBlockClick);
  });
  
  message.textContent = " ";
    const randomBlock = Math.floor(Math.random() * 4) + 1;
  
  if (parseInt(this.id.slice(-1)) === randomBlock) {
    message.innerHTML = "<h3>You saved it!</h3>";
  } else {
    awayPenalty++;
    awayPenaltyDisplay.textContent = awayPenalty;
    message.innerHTML = "<h3>They scored!</h3>"; 
  }

  // roll random number and compare it to see what outcome is given
  //  after 5 penalites each end the game and show the try again button
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum > 1) {
      homePenalty++;
      homePenaltyDisplay.textContent = homePenalty;
      message.innerHTML = "<h3>Your team scored!</h3>"; 
      setTimeout(function() {
        if (iteration > 4) {
          message.innerHTML = "<h3>Game over!</h3>";
        } else {
          message.innerHTML = "<h3>Click where you think they are going to shoot</h3>";
          }
      }, 1000);
    } else {
      message.innerHTML = "<h3>Your team missed!</h3>"; 
      setTimeout(function() {
        if (iteration > 4) {
          message.innerHTML = "<h3>Game over!</h3>";
        } else {
          message.innerHTML = "<h3>Click where you think they are going to shoot</h3>";
          }  
      }, 1000);  
    }
    pens.textContent = iteration + 1;

    // iterates to allow a maximum of 5 penalties to be taken the reset the game when try again is pressed
    iteration++;
    if (iteration >= 5) {
      message.innerHTML = "<h3>Game over!</h3>";
      const tryAgainButton = document.createElement('button');
      tryAgainButton.textContent = 'Try Again';
      tryAgainButton.addEventListener('click', function() {
        // Reset game state and display
        homePenalty = 0;
        awayPenalty = 0;
        iteration = 0;
        homePenaltyDisplay.textContent = homePenalty;
        awayPenaltyDisplay.textContent = awayPenalty;
        pens.textContent = iteration;
        message.innerHTML = "<h3>Click where you think they are going to shoot</h3>";
        blocks.forEach(block => {
          block.addEventListener('click', handleBlockClick);
        });
        // Hide the try again button
        tryAgainButton.style.display = 'none';
      });
      gameContainer.appendChild(tryAgainButton);
    }
    // adds the listener for the block click
    blocks.forEach(block => {
    block.addEventListener('click', handleBlockClick);
  }); 
  }, 2000);
}

// adds the listener for the block click
blocks.forEach(block => {
  block.addEventListener('click', handleBlockClick);
});


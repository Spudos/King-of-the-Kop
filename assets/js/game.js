// **** game ****
// add listener for start button and show game/hide rules when pressed
document.getElementById('startGameButton').addEventListener('click', function() {
document.getElementById('gameContainer').style.display = 'block';
document.getElementById('instructions').style.display = 'none';
});

// set required vaiables
let homePenalty = 0;
let awayPenalty = 0;
let iteration = 0;

// on block click comepare with random number to see if matched then process outcome
function handleBlockClick() {
  // turns of button click listener until it is time for the next go
  document.querySelectorAll('.block').forEach(block => {
    block.removeEventListener('click', handleBlockClick);
  });
  
  document.getElementById('message').textContent = " ";
    const randomBlock = Math.floor(Math.random() * 4) + 1;
  
  if (parseInt(this.id.slice(-1)) === randomBlock) {
    document.getElementById('message').innerHTML = "<h3>You saved it!</h3>";
  } else {
    awayPenalty++;
    document.getElementById('awayPenaltyDisplay').textContent = awayPenalty;
    document.getElementById('message').innerHTML = "<h3>They scored!</h3>"; 
  }

  // roll random number and compare it to see what outcome is given
  //  after 5 penalites each end the game and show the try again button
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum > 1) {
      homePenalty++;
      document.getElementById('homePenaltyDisplay').textContent = homePenalty;
      document.getElementById('message').innerHTML = "<h3>Your team scored!</h3>"; 
      setTimeout(function() {
        if (iteration > 4) {
          document.getElementById('message').innerHTML = "<h3>Game over!</h3>";
        } else {
          document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>";
          };
      }, 1000);
    } else {
      document.getElementById('message').innerHTML = "<h3>Your team missed!</h3>"; 
      setTimeout(function() {
        if (iteration > 4) {
          document.getElementById('message').innerHTML = "<h3>Game over!</h3>";
        } else {
          document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>";
          };  
      }, 1000);  
    }
    document.getElementById('pens').textContent = iteration + 1;

    // iterates to allow a maximum of 5 penalties to be taken the reset the game when try again is pressed
    iteration++;
    if (iteration >= 5) {
      document.getElementById('message').innerHTML = "<h3>Game over!</h3>";
      const tryAgainButton = document.createElement('button');
      tryAgainButton.textContent = 'Try Again';
      tryAgainButton.addEventListener('click', function() {
        // Reset game state and display
        homePenalty = 0;
        awayPenalty = 0;
        iteration = 0;
        document.getElementById('homePenaltyDisplay').textContent = homePenalty;
        document.getElementById('awayPenaltyDisplay').textContent = awayPenalty;
        document.getElementById('pens').textContent = iteration;
        document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>";
        document.querySelectorAll('.block').forEach(block => {
          block.addEventListener('click', handleBlockClick);
        });
        // Hide the try again button
        tryAgainButton.style.display = 'none';
      });
      document.getElementById('gameContainer').appendChild(tryAgainButton);
    }
    // adds the listener for the block click
    document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', handleBlockClick);
  }); 
  }, 2000);
}

// adds the listener for the block click
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('click', handleBlockClick);
});


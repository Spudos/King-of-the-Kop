document.getElementById('startGame').addEventListener('click', function() {
  document.getElementById('gameContainer').style.display = 'block';
  document.getElementById('startGame').style.display = 'none'; // Hide the button
});

let homePenalty = 0;
let awayPenalty = 0;
let iteration = 0;

function handleBlockClick() {
  document.getElementById('message').textContent = " ";
  const randomBlock = Math.floor(Math.random() * 4) + 1;
  if (parseInt(this.id.slice(-1)) === randomBlock) {
    document.getElementById('message').innerHTML = "<h3>You saved it!</h3>";
    setTimeout(function() {
      document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>"; 
    }, 3000);
  } else {
    awayPenalty++;
    document.getElementById('awayPenaltyDisplay').textContent = awayPenalty;
    document.getElementById('message').innerHTML = "<h3>They scored!</h3>"; 
    setTimeout(function() {
      document.getElementById('message').textContent = "Match Score";
    }, 3000);
  }

  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum > 2) {
      homePenalty++;
      document.getElementById('homePenaltyDisplay').textContent = homePenalty;
      document.getElementById('message').innerHTML = "<h3>Your team scored!</h3>"; 
      setTimeout(function() {
      document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>";  
      }, 3000);
    } else {
      document.getElementById('message').innerHTML = "<h3>Your team missed!</h3>"; 
      setTimeout(function() {
      document.getElementById('message').innerHTML = "<h3>Click where you think they are going to shoot</h3>";  
      }, 3000);  
    }
    document.getElementById('pens').textContent = iteration + 1;

    iteration++;
    if (iteration >= 5) {
      document.querySelectorAll('.block').forEach(block => {
        block.removeEventListener('click', handleBlockClick);
      });
    }
  }, 3000);
      
}
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('click', handleBlockClick);
});


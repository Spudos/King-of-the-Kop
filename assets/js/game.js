let homePenalty = 0;
let awayPenalty = 0;
let iteration = 0;

function handleBlockClick() {
  const randomBlock = Math.floor(Math.random() * 4) + 1;
  if (parseInt(this.id.slice(-1)) === randomBlock) {
    document.getElementById('board').textContent = "You saved it!";
    setTimeout(function() {
      document.getElementById('board').textContent = "Match Score";
    }, 3000);
  } else {
    awayPenalty++;
    document.getElementById('awayPenaltyDisplay').textContent = awayPenalty;
    document.getElementById('board').textContent = "They scored";
    setTimeout(function() {
      document.getElementById('board').textContent = "Match Score";
    }, 3000);
  }

  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum > 2) {
      homePenalty++;
      document.getElementById('homePenaltyDisplay').textContent = homePenalty;
      document.getElementById('board').textContent = "Your team scored!";
      setTimeout(function() {
        document.getElementById('board').textContent = "Match Score";
      }, 3000);
    } else {
      document.getElementById('board').textContent = "Your team missed!";
      setTimeout(function() {
        document.getElementById('board').textContent = "Match Score";
      }, 3000);
      document.getElementById('pens').textContent = iteration + 1;
    }

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


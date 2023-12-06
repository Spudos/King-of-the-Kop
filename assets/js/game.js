let homePenalty = 0;
let awayPenalty = 0;

document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('click', () => {
    const randomBlock = Math.floor(Math.random() * 4) + 1;
    if (parseInt(block.id.slice(-1)) === randomBlock) {
      homePenalty++;
      document.getElementById('homePenaltyDisplay').textContent = homePenalty;

    } else {
      document.getElementById('board').textContent = "You missed!";
      setTimeout(function() {
        document.getElementById('board').textContent = "Match Score";
      }, 2000);
    }
    
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 4) + 1;
      if (randomNum > 2) {
        awayPenalty++;
        document.getElementById('awayPenaltyDisplay').textContent = awayPenalty;

      } else {
      
      }
    }, 3000);
  });
});

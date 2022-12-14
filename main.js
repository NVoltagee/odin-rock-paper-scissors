const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  if(scoreboard.player < 5 && scoreboard.computer < 5){
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
  } else{
    endGame();
  }
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'grass';
  } else if (rand <= 0.67) {
    return 'fire';
  } else {
    return 'water';
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'grass') {
    if (c === 'fire') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'fire') {
    if (c === 'water') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'water') {
    if (c === 'grass') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <img class="sign" id="${computerChoice}" src="img/${computerChoice}.png" alt="${computerChoice}" />
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <img class="sign" id="${computerChoice}" src="img/${computerChoice}.png" alt="${computerChoice}" />
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <img class="sign" id="${computerChoice}" src="img/${computerChoice}.png" alt="${computerChoice}" />
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  modal.style.display = 'block';
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
  restart.style.display = 'none';
}

// Play game until someone reaches 5 wins
function endGame() {
  if (scoreboard.player > scoreboard.computer) {
      alert("Game Over! You Win! :)");
  } else if (scoreboard.computer > scoreboard.player) {
      alert("Game Over! You Lost! :(");
  }
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
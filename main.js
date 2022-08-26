const playerScore = 0;
const computerScore = 0;
const roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
}

// Computer selection
function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //Randomizes computer selection from 1 to 3
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "Scissors";
  }
}

// Declares winner of the match

function gameOver() {
  return playerScore === 5 || computerScore === 5;
}

const playerScore = 0;
const computerScore = 0;
const roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
}

// Game
function playRound(playerSelection, computerSelection) {
  if (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    alert(
      "You've entered an incorrect selection!",
      "You need to enter either rock, paper or scissors"
    );
  } else {
    return results(selection, computerPlay());
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

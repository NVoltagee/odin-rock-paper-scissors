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
  if (playerSelection === computerSelection){
    return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  }
   else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = computerTurn();
console.log(playRound(playerSelection, computerSelection))

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

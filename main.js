const choices = ["rock", "paper", "scissors"];
const winners = [];

// Game
function game() {
  for (let i = 1; i < 5; i++) {
    playRound(i);
  }
  logWins();
}

// Plays rounds vs Computer
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = declaresWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

// Gets input from Player / User
function playerChoice() {
  let input = prompt("Start the game by picking among 'Rock, Paper, Scissors'");
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, Scissors. Capitalization does not matter."
    );
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

// Computer selection
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]; //Randomizes computer selection from the variable named choices
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  }
  return false;
}

function declaresWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWin = winners.filter((item) => item == "Player won").length;
  let computerWin = winners.filter((item) => item == "Computer won").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWin);
  console.log("Computer Wins:", computerWin);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "the Round");
  console.log("-------------------------------");
}

game();

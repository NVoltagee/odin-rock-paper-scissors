const choices = ["rock", "paper", "scissors"];

// Game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

// Plays rounds vs Computer
function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = declaresWinner(playerSelection, computerSelection);
  console.log(winner);
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
    return "Player won";
  } else {
    return "Computer Won";
  }
}

game();

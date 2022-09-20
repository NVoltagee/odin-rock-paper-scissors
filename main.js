const choices = ["grass", "fire", "water"];
let winners = [];

//Resets game back to 0 
function resetGame() {
  winners = [];
  document.getElementById("playerScore").textContent = "Score: 0";
  document.getElementById("computerScore").textContent = "Score: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}
// Game
function game() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

// Plays rounds vs Computer
function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerSelection = computerChoice();
  const winner = declaresWinner(playerSelection, computerSelection);
  winners.push(winner);
  winCounter();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins === 5) {
    displayEnd
  }
}

function displayEnd(){
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins === 5) {
    document.querySelector(".winner").textContent =
      "You Won 5 Games, Congrats!";
  } else {
    document.querySelector(".winner").textContent =
      "Sorry, the computer won 5 times";
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.getElementById("playerSign").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.getElementById(
    "computerSign"
  ).textContent = `The Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

// Counts number of wins of player and computer
function winCounter(){
  const playerWin = winners.filter((item) => item == "Player").length;
  const computerWin = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.getElementById("playerScore").textContent = `Score: ${playerWin}`;
  document.getElementById("computerScore").textContent = `Score: ${computerWin}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

//Randomizes computer selection from the variable named choices
function computerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

// Check wins
function checkWins() {
  let playerWin = winners.filter((item) => item == "Player won").length;
  let computerWin = winners.filter((item) => item == "Computer won").length;
  return Math.max(playerWin, computerWin);
}

function declaresWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "grass" && computerChoice === "water") ||
    (playerChoice === "fire" && computerChoice === "grass") ||
    (playerChoice === "water" && computerChoice === "fire")
  ) {
    return "Player won";
  } else {
    return "Computer won";
  }
}

function setWins() {
  const playerWin = winners.filter((item) => item == "Player").length;
  const computerWin = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
game();
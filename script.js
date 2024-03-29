let playerScore = 0;
let computerScore = 0;
let playerChoice;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((buttons) => buttons.addEventListener("click", processClick));

function processClick() {
  playerChoice = this.id;
  playRound();
}

const reset = document.querySelector(".reset-button");
reset.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerChoice = null;
  document.getElementById("c-score").innerHTML = computerScore;
  document.getElementById("p-score").innerHTML = playerScore;
  document.getElementById(
    "results-text"
  ).innerHTML = `Make your choice to start the game.`;
  buttons.forEach((button) => {
    button.addEventListener("click", processClick);
    button.disabled = false;
  });
}

function playRound() {
  if (!playerChoice) {
    return;
  }
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    document.getElementById(
      "results-text"
    ).innerHTML = `It's a tie - you both chose ${playerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    document.getElementById(
      "results-text"
    ).innerHTML = `You win this round - ${playerChoice} beats ${computerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    document.getElementById(
      "results-text"
    ).innerHTML = `You lose this round - ${playerChoice} is beaten by ${computerChoice}!`;
  }
  document.getElementById("c-score").innerHTML = computerScore;
  document.getElementById("p-score").innerHTML = playerScore;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      document.getElementById(
        "results-text"
      ).innerHTML = `You won! Press reset to play again.`;
    } else {
      document.getElementById(
        "results-text"
      ).innerHTML = `You lost! press reset to play again.`;
    }
    buttons.forEach((button) => {
      button.removeEventListener("click", processClick);
      button.disabled = true;
    });
  }
}

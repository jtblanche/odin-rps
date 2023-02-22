const playerChoice = "";
const computerChoice = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerChoice, computerChoice) {
  playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (playerChoice === computerChoice) {
    return `It's a tie - both chose ${playerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win this round - ${playerChoice} beats ${computerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    return `You lose this round - ${playerChoice} is beaten by ${computerChoice}!`;
  }
}

console.log(playRound(playerChoice, computerChoice));

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

// game();

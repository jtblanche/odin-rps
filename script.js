let playerChoice = "";
let computerChoice = "";
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
  computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    return `It's a tie - you both chose ${playerChoice}! Player: ${playerScore}  Computer: ${computerScore}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `You win this round - ${playerChoice} beats ${computerChoice}! Player: ${playerScore}  Computer: ${computerScore}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return `You lose this round - ${playerChoice} is beaten by ${computerChoice}! Player: ${playerScore}  Computer: ${computerScore}`;
  }
}

function game() {
  function winner() {
    if (playerScore > computerScore) {
      return `You win! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
    } else if (playerScore < computerScore) {
      return `You lose! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
    } else {
      return `Tie game! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
    }
  }
  // PLAY ONLY 5 ROUNDS
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound());
  // }
  console.log(winner());
}

game();

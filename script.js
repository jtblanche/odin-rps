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

function playRound() {
  if (!playerChoice) {
    return;
  }
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    console.log(`It's a tie - you both chose ${playerChoice}!`);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log(
      `You win this round - ${playerChoice} beats ${computerChoice}!`
    );
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `You lose this round - ${playerChoice} is beaten by ${computerChoice}!`
    );
  }
  document.getElementById("c-score").innerHTML = computerScore;
  document.getElementById("p-score").innerHTML = playerScore;
}

// function game() {
//   function winner() {
//     if (playerScore > computerScore) {
//       return `You win! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
//     } else if (playerScore < computerScore) {
//       return `You lose! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
//     } else {
//       return `Tie game! Final score - Player: ${playerScore}  Computer: ${computerScore}`;
//     }
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound());
//   }
//   console.log(winner());
// }

// game();

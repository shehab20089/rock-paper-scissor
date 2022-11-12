const possibleChoices = ["rock", "paper", "scissor"];
const gameRecord = { playerScore: 0, computerScore: 0, round: 1 };

// function to get the computer choice randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return possibleChoices[randomNumber];
}

// function to get the player choice
function getPlayerChoice(text = "please enter your choice") {
  const choice = prompt(text);
  if (possibleChoices.includes(choice.toLowerCase())) {
    return choice;
  }
  //force the user to choice between rock or paper or scissor
  return getPlayerChoice(
    "Please enter a valid user choice between rock , paper or scissor"
  );
}

//function to play the round between the computer and the user
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";
  else if (checkStrongerChoice(playerSelection, computerSelection))
    return "player";
  else return "computer";
}

//helper function to check the strongest between two choices
function checkStrongerChoice(choice1, choice2) {
  if (choice1 === "rock") {
    if (choice2 === "paper") return false;
    return true;
  }
  if (choice1 === "paper") {
    if (choice2 == "scissor") return false;
    return true;
  }
  if (choice1 === "scissor") {
    if (choice2 === "rock") return false;
    return true;
  }
}
//  function to create game form multiple rounds
function game(playerChoice) {
  const messageArea = document.querySelector(".msg-area");
  const playerScreen = document.querySelector("#player");
  const computerScreen = document.querySelector("#computer");
  const computerScore = document.querySelector(".compScore");
  const playerScore = document.querySelector(".plaScore");
  const choices = document.querySelectorAll(".choice-Item");
  const playAgainBtn = document.querySelector(".play-again");
  const computerChoice = getComputerChoice();
  const winner = playRound(playerChoice, computerChoice);
  if (winner === "computer") {
    gameRecord.computerScore++;
    messageArea.textContent = `You Lose this round! ${computerChoice} beats ${playerChoice}`;
  } else if (winner === "player") {
    gameRecord.playerScore++;
    messageArea.textContent = `You Win this round! ${playerChoice} beats ${computerChoice}`;
  } else {
    messageArea.textContent = `Draw`;
  }

  playerScreen.textContent = playerChoice;
  computerScreen.textContent = computerChoice;
  computerScore.textContent = "Computer: " + gameRecord.computerScore;
  playerScore.textContent = "Player: " + gameRecord.playerScore;
  if (gameRecord.round == 5) {
    choices.forEach((choice) => {
      choice.style.display = "none";
    });
    if (gameRecord.computerScore > gameRecord.playerScore)
      document.querySelector(
        ".round-num"
      ).textContent = `Computer Won , You lose`;
    else if (gameRecord.playerScore > gameRecord.computerScore)
      document.querySelector(
        ".round-num"
      ).textContent = `Congratulations you won against the computer`;
    else document.querySelector(".round-num").textContent = `you all are loser`;
    playAgainBtn.style.display = "block";

    return;
  }
  gameRecord.round++;
  document.querySelector(
    ".round-num"
  ).textContent = `Round ${gameRecord.round}`;
}

document.querySelectorAll("div[rps-choice]").forEach((element) => {
  element.addEventListener("click", (e) => {
    const playerChoice = e.target.getAttribute("rps-choice");
    game(playerChoice);
  });
});
document.querySelector(".play-again").addEventListener("click", () => {
  gameRecord.computerScore = 0;
  gameRecord.playerScore = 0;
  gameRecord.round = 1;
  document.querySelector(
    ".round-num"
  ).textContent = `Round ${gameRecord.round}`;
  document.querySelector(".msg-area").textContent =
    "Please select your choice to start playing";
  const computerScore = document.querySelector(".compScore");
  const playerScore = document.querySelector(".plaScore");
  computerScore.textContent = "Computer: " + gameRecord.computerScore;
  playerScore.textContent = "Player: " + gameRecord.playerScore;
  document.querySelectorAll(".choice-Item").forEach((choice) => {
    choice.style.display = "flex";
  });
  document.querySelector(".play-again").style.display = "none";
  document.querySelector("#player").textContent = "";
  document.querySelector("#computer").textContent = "";
});
document.querySelector(".start-btn").addEventListener("click", () => {
  document.querySelector("#page2").style.display = "flex";
  document.querySelector("#page1").style.display = "none";
});

const possibleChoices = ["rock", "paper", "scissor"];

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

// function to create game form multiple rounds
function game(numberOfRounds = 5) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < numberOfRounds; i++) {
    console.log(`*****************Round${i + 1}*****************`);
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(`player: ${playerChoice} , computer:${computerChoice}`);

    const winner = playRound(playerChoice, computerChoice);
    if (winner === "computer") {
      computerScore++;
      console.log(
        `You Lose this round! ${computerChoice} beats ${playerChoice}`
      );
    } else if (winner === "player") {
      playerScore++;
      console.log(
        `You Win this round! ${playerChoice} beats ${computerChoice}`
      );
    } else {
      console.log("draw");
    }
    console.log(
      `Total score Player:${playerScore} , computer:${computerScore}`
    );
  }

  if (computerScore > playerScore)
    alert("You loseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  else if (playerScore > computerScore)
    alert("Congratulations you won against the computer");
  else alert("you all are loser");
}

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
  console.log(`player: ${playerSelection} , computer:${computerSelection}`);
  if (playerSelection === computerSelection) console.log("draw");
  else if (checkStrongerChoice(playerSelection, computerSelection))
    console.log("Congratulations you win against the computer !!!");
  else console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
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

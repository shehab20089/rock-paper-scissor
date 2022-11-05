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

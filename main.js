const possibleChoices = ["rock", "paper", "scissor"];

// function to get the computer choice randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return possibleChoices[randomNumber];
}

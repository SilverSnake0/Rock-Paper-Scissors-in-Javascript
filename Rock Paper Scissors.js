//function to make sure the user choice is one of the possible  options
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: This is not a valid option. Choices are Rock, Paper, or Scissors.');
    }
  };
  //function to obtain the computer choice randomly from the three possible choices
  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  }
  //function to determine who will win out of the possible outcomes
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was a tie!';
    } 
    if (userChoice === 'bomb') {
      return 'You have won the game! :)';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer has won the game :(';
      } else {
        return 'You have won the game! :)';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer has won the game :(';
      } else {
        return 'You have won the game! :)';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has won the game :(';
      } else {
        return 'You have won the game! :)';
      }
    }
  }
  //function to utilize the earlier functions and find the winner
  const playGame = userChoice => {
    userChoice = getUserChoice(userChoice);
    computerChoice = getComputerChoice();
    return console.log(` User played: ${userChoice}.\n Computer played: ${computerChoice}.\n ${determineWinner(userChoice, computerChoice)}`);
  }
  
  playGame('bomb');
  

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let computerChoice = '';
    
    switch (randomChoice) {
        case 1:
            computerChoice = computerOptions[0];
            break;
        case 2:
            computerChoice = computerOptions[1];
            break;
        case 3:
            computerChoice = computerOptions[2];
            break;
    }
    console.log(computerChoice);
    return computerChoice;
}

// Function that plays a single round of Rock Paper Scissors and determines a winner.
const player = 'ROCK';

function playGame(playerSelection, computerSelection) {
    let playerSelectionToLower = playerSelection.toLowerCase();
    
    playerSelectionToLower == "rock" && computerSelection == "scissors" || 
    playerSelectionToLower == "scissors" && computerSelection == "paper" || 
    playerSelectionToLower == "paper" && computerSelection == "rock" ? console.log('you win.' + playerSelectionToLower + " " + computerSelection)
    : playerSelectionToLower ===  computerSelection ? console.log('It\'s a tie. ' + playerSelectionToLower + " " + computerSelection)
    : console.log('You lose ' + playerSelectionToLower + " " + computerSelection);

}

playGame(player, getComputerChoice());

/*
if (playerSelectionToLower == "rock" && computerSelection == "scissors" || playerSelectionToLower == "scissors" && computerSelection == "paper" || playerSelectionToLower == "paper" && computerSelection == "rock") {
    console.log('you win.' + playerSelectionToLower + " " + computerSelection);
} else if (playerSelectionToLower ===  computerSelection) {
    console.log('It\'s a tie. ' + playerSelectionToLower + " " + computerSelection);
} else {
    console.log('You lose ' + playerSelectionToLower + " " + computerSelection);
}*/
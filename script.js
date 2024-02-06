
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

function playRound(playerSelection, computerSelection) {
    const computerOptions = ['rock', 'paper', 'scissors'];

    if (playerSelection == "") {
        alert('You didn\'t write anything');
        playGame();
    } else {
        if (!computerOptions.includes(playerSelection)) {
            alert('invalid input. \n You can only play Rock, Paper or Scissors.');
            playGame();
        } else {
            playerSelection == "rock" && computerSelection == "scissors" || 
            playerSelection == "scissors" && computerSelection == "paper" || 
            playerSelection == "paper" && computerSelection == "rock" ? alert('You win! You chose ' + playerSelection + " and the CPU chose " + computerSelection)
            : playerSelection ===  computerSelection ? alert('It\'s a tie. You chose ' + playerSelection + " and the CPU chose " + computerSelection)
            : alert('You lose. You chose' + playerSelection + " and the CPU chose " + computerSelection);
            playGame();
        }   
    }   
    
}
// Play the game
function playGame() {
    const userInput = prompt("Please type your choice: Rock, Paper, Scissors.").toLowerCase();   

    playRound(userInput, getComputerChoice())
}

console.log(playGame());
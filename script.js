
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
    console.log('CPU ' + computerChoice);
    cpuChoice.textContent = computerChoice.toUpperCase();
    return computerChoice;
}

// Function that plays a single round of Rock Paper Scissors and determines a winner.

function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection == 'rock') {
        result = 'You Win';
    } else if (playerSelection === computerSelection) {
        result = 'You Tie';
    } else {
        result = 'You Lose';
    }

    showResult.textContent = result;
}   

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const usrChoice = document.querySelector('#playerChoice');
const cpuChoice = document.querySelector('#cpuChoice');
const showResult = document.querySelector('h1');
let userInput = '';

rock.addEventListener('click', () => {
    userInput = 'rock';
    console.log('user' + userInput);
    playGame();
});

rock.addEventListener('focus', (e) => {
    e.target.style.background = '#EABE6C';
    e.target.style.color = '#891652';
});

rock.addEventListener('blur', (e) => {
    e.target.style.background = '#891652';
    e.target.style.color = '#EABE6C';
});

paper.addEventListener('click', () => {
    userInput = 'paper';
    console.log('user' + userInput);
    playGame();
});

paper.addEventListener('focus', (e) => {
    e.target.style.background = '#EABE6C';
    e.target.style.color = '#891652';
});

paper.addEventListener('blur', (e) => {
    e.target.style.background = '#891652';
    e.target.style.color = '#EABE6C';
});

scissors.addEventListener('click', () => {
    userInput = 'scissors';
    console.log('user' + userInput);
    playGame();
});

scissors.addEventListener('focus', (e) => {
    e.target.style.background = '#EABE6C';
    e.target.style.color = '#891652';
});

scissors.addEventListener('blur', (e) => {
    e.target.style.background = '#891652';
    e.target.style.color = '#EABE6C';
});



// Play the game
function playGame() {
    playRound(userInput, getComputerChoice())
    usrChoice.textContent = userInput.toUpperCase();
    console.log('game played');
}
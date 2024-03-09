
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

    if (computerChoice == 'rock') {
        image2.src = 'media/rock.png';
    } else if (computerChoice == 'paper') {
        image2.src = 'media/paper.png';
    } else if (computerChoice == 'scissors') {
        image2.src = 'media/scissors.png';
    }

    
    return computerChoice;
}

// Function that plays a single round of Rock Paper Scissors and determines a winner.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection == 'rock') {
        console.log("it's a win");
        userscore += 1; 
    } else if (playerSelection === computerSelection) {
        console.log("it's a tie");
    } else {
        console.log('You Lose');;
        cpuScore += 1;
    }
    console.log(userscore + '\n' + cpuScore)
}   

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const usrChoice = document.querySelector('#playerChoice');
const cpuChoice = document.querySelector('#cpuChoice');
const showResult = document.querySelector('h1');
const userscoreText = document.querySelector('#userPoints');
const cpuScoreText = document.querySelector('#cpuPoints');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');

let userscore = 0;
let cpuScore = 0;
let userInput = '';

rock.addEventListener('click', () => {
    userInput = 'rock';
    console.log('user' + userInput);
    image1.src = 'media/rock.png';
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
    image1.src = 'media/paper.png';
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
    image1.src = 'media/scissors.png';
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
    if (userscore == 5) {
        alert('You Win!');
        if (confirm('Play again?') == true) {
            location.reload();
        };
    } else if (cpuScore == 5) {
        alert('You Lose!')
        if (confirm('Play again?') == true) {
            location.reload();
        };
    }

    userscoreText.textContent = userscore;
    cpuScoreText.textContent = cpuScore;
    console.log('game played');
}


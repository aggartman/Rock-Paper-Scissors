// computerPlay function randomly returns "'Rock' 'Paper' or 'Scissors'"
// outputs this answer in var computerSelection
RPS = ["rock", "paper", "scissors"]
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0; 
let games = 1;

function computerPlay() {
    const random = Math.floor(Math.random()* RPS.length)
    computerSelection = RPS[random]
    return computerSelection
} 
// console.log(computerPlay())

// playerInput will accept the same values as computerPlay()
// input is case-insensitve and will return value in var playerSelection
function playerInput() {
    playerSelection = prompt("Choose Rock, Paper, or Scissors")
    playerSelection = playerSelection.toLowerCase()
    if (RPS.includes(playerSelection)) {
        return playerSelection; }
    else {
        console.log("Player selection must be Rock, Paper, or Scissors")
        playerInput()
    }
}
// console.log(playerInput())

//playRound function will call computerPlay() and then PlayerInput() to obtain 
//It takes PlayerInput as a parameter.
function playRound(a) {
    computerPlay();
    playerSelection = a;
    let computerWins = `Computer: ${computerSelection} Player: ${playerSelection} \n Computer Wins`;
    let playerWins = `Computer: ${computerSelection} Player: ${playerSelection} \n Player Wins`
    let TieGame =  `Computer: ${computerSelection} Player: ${playerSelection} \n It's a tie!`
    
    if (computerSelection == playerSelection) {
        let result = document.getElementById('results');
        result.textContent = "It's a tie game!";
        games++;
        let match = document.getElementById('matches');
        match.textContent = games;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
            computerScore++
            let result = document.getElementById('results');
            result.textContent = 'Computer Wins';
            games++
            let match = document.getElementById('matches');
            match.textContent = games
            
    } else {
        playerScore++
        let result = document.getElementById('results');
        result.textContent = 'Player Wins!';
        let score = document.getElementById('score');
        score.textContent = playerScore;
        games++;
        let match = document.getElementById('matches');
        match.textContent = games;
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', function() { playRound('rock'); }
);
paper.addEventListener('click', function() { playRound('paper'); }
);
scissors.addEventListener('click', function() { playRound('scissors'); }
);


// Last function is 'game' and it will use playRound 5 times and keep score.
// Then it will report who wins and who loses. 

// function game() {
//     while (games < 6) {
//         playRound()
//         games++
//     } 
//     console.log(`Player score: ${playerScore} \n Computer Score: ${computerScore}`)
//     if (playerScore == computerScore) {
//         console.log("It's a tie match")
//     } else if (playerScore > computerScore) {
//         console.log("Player wins!")
//     } else {
//         console.log("Computer wins!")
//     }
// }
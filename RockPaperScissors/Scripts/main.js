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
function playRound() {
    computerPlay();
    playerInput();
    let computerWins = `Computer: ${computerSelection} Player: ${playerSelection} \n Computer Wins`;
    let playerWins = `Computer: ${computerSelection} Player: ${playerSelection} \n Player Wins`
    let TieGame =  `Computer: ${computerSelection} Player: ${playerSelection} \n It's a tie!`
    
    if (computerSelection == playerSelection) {
        console.log(TieGame)
        return TieGame;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
            computerScore++
            console.log(computerWins)
            return computerWins;
    } else {
        playerScore++
        console.log(playerWins)
        return playerWins;
    }
}

// Last function is 'game' and it will use playRound 5 times and keep score.
// Then it will report who wins and who loses. 
function game() {
    while (games < 6) {
        playRound()
        games++
    } 
    console.log(`Player score: ${playerScore} \n Computer Score: ${computerScore}`)
    if (playerScore == computerScore) {
        console.log("It's a tie match")
    } else if (playerScore > computerScore) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}
game()
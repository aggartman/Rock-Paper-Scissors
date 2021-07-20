// computerPlay function randomly returns "'Rock' 'Paper' or 'Scissors'"
// outputs this answer in var computerSelection
RPS = ["rock", "paper", "scissors"]
function computerPlay() {
    const random = Math.floor(Math.random()* RPS.length)
    computerSelection = RPS[random]
    return computerSelection
} 
console.log(computerPlay())

// playerInput will accept the same values as computerPlay()
// input is case-insensitve and will return value in var playerSelection
function playerInput() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors")
    playerSelection = playerSelection.toLowerCase()
    if (RPS.includes(playerSelection)) {
        return playerSelection; }
    else {
        console.log("Player selection must be Rock, Paper, or Scissors")
        playerInput()
    }
}
console.log(PlayerInput())
//playRound function will call computerPlay() and then PlayerInput() to obtain 
//It takes PlayerInput as a parameter.
function playRound(computerPlay, playerInput) {
    
}


// Last function is 'game' and it will use playRound 5 times and keep score.
// Then it will report who wins and who loses. 
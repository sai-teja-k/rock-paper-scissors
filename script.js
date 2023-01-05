const choices = ["rock" , "paper" , "Scissors"];
const winners = [];

function game(){
    //play game five times
    playRound();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    let winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    console.log(winners)
}

function playerChoice(){
    //input from player
    let playerC = prompt("Enter Rock, paper or scissors");

    while (playerC === null) //will not let user to cancel or pass empty i.e, null
        playerC = prompt("Please Enter Rock, paper or scissors");
    
    playerC = playerC.toLowerCase();
    
    while (validInput(playerC) == false ) {
        playerC = prompt("Please enter correct word with or without Capital letters");
        while (playerC === null) //will not let user to cancel or pass empty i.e, null
            playerC = prompt("Please Enter Rock, paper or scissors");
    }
    
    return playerC;
}

function computerChoice(){
    //input from computer
    const computerC = choices[Math.floor(Math.random()*choices.length)];
    //console.log(computerC);
    return computerC;
}

function validInput(playerC){
    return choices.includes(playerC);
}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection== computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection== "rock" && computerSelection == "scissors") ||
        (playerSelection== "paper" && computerSelection == "rock") ||
        (playerSelection== "scissors" && computerSelection == "paper")
    )
    {
        return "Player";
    }
    else{
        return "Computer";
    }
}

game();
const choices = ["rock" , "paper" , "scissors"];
const winners = [];
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

//play game five times
function game(){
    for(let i=0;i<5;i++){
        playRound(i);
    }

    if(playerCount >= 3){
        console.log("Player wins the game by ",playerCount," Rounds");
    }
    else if(computerCount >= 3){
        console.log("Computer wins the game by ",computerCount," Rounds");
    }
    else{
        console.log("Its a Tie");
    }
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    let winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    console.log("Round ",round+1," winner is ",winner);
    console.log("-----------------------------");
    gameWinner(winners,round);
}

 //input from player
function playerChoice(){
    let playerC = prompt("Enter Rock, paper or scissors");

    while (playerC === null) //will not let user to cancel or pass empty i.e, null
        playerC = prompt("Please Enter Rock, paper or scissors");
    
    playerC = playerC.toLowerCase();
    
    while (validInput(playerC) == false ) {
        playerC = prompt("Please enter correct word with or without Capital letters");
        while (playerC === null) //will not let user to cancel or pass empty i.e, null
            playerC = prompt("Please Enter Rock, paper or scissors");
    }
    console.log("Player chose ",playerC)
    return playerC;
}

//input from computer
function computerChoice(){
    const computerC = choices[Math.floor(Math.random()*choices.length)]; //random from 0 to 2 numbers floored
    console.log("Computer chose ",computerC);
    return computerC;
}

function validInput(playerC){
    return choices.includes(playerC);
}

//check who is the winner
function checkWinner(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")){
        return "Player";
    }
    else{
        return "Computer";
    }
}

//check winners of 5 rounds
function gameWinner(winners,round){
    if (winners[round] === "Player"){
        playerCount++;
    }
    else if(winners[round] === "Computer"){
        computerCount++;
    }
    else{
        tieCount++;
    }
}
game();
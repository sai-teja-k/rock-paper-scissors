const choices = ["rock" , "paper" , "Scissors"];

function game(){
    //play game five times
    playRound();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
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

game();
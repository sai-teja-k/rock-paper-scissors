const choices = ["rock" , "paper" , "scissors"];
let round = 0;
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

const winners_div = document.querySelector('.winners_div');
let flash = document.querySelector(".winner");
const scoreboard = document.querySelector('#scoreboard');

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));


function playRound(e){
    const playerSelection = e.target.id; //returns which button is clicked
    const computerSelection = computerChoice();
    let winner = checkWinner(playerSelection,computerSelection);  //chech who is the winner for each round
    updateFlash(winner);  //show the winner on the screen
    updateScoreboard(winner); //update the scoreboard 
    checkRound(round);  //chech for 5 rounds 
}

//input from computer
function computerChoice(){
    const computerC = choices[Math.floor(Math.random()*choices.length)]; //random from 0 to 2 numbers floored
    return computerC;
}

//check winner for each round or button click and return winner
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

//shows the winner on the screen i,e. flashes for 2 sec
function updateFlash(winner) {
  if (winner === "Player") {
    flash.innerHTML = "You won!";
    flash.classList.add("flash-win");
  } else if (winner === "Computer") {
    flash.innerHTML = "You lost!";
    flash.classList.add("flash-lose");
  } else {
    flash.innerHTML = "It's a tie!";
    flash.classList.add("flash-tie");
  }
  setTimeout(() => {  //flases for 2 sec
    flash.innerHTML = "";
    flash.classList.remove("flash-win", "flash-lose", "flash-tie");
  }, 2000);
}

//update the winner score 
function updateScoreboard(winner) {
    round++;
    if (winner === "Player") {
      playerCount++;
    } else if (winner === "Computer") {
        computerCount++;
    } else {
      tieCount++;
    }
    document.querySelector("#win").innerHTML = playerCount;
    document.querySelector("#lose").innerHTML = computerCount;
    document.querySelector("#tie").innerHTML = tieCount;
}

//check for 5 rounds to complete
function checkRound(round){
    if (round % 5 === 0) {
        flash.textContent = `${gameWinner()}`;
        round = 0;
        playerCount = 0;
        computerCount = 0;
        tieCount = 0;
        document.querySelector("#win").innerHTML = playerCount;
        document.querySelector("#lose").innerHTML = computerCount;
        document.querySelector("#tie").innerHTML = tieCount;
    }
}

//after 5 rounds ..flashes the winner of 5 rounds
function gameWinner(){
    if(playerCount >= 3){
        return "YOU WON THE GAME";
    }
    else if(computerCount >= 3){
        return "COMPUTER WON THE GAME";
    }
    else{
        return "ITS A TIE";
    }
}
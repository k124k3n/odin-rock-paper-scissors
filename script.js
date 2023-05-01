let choiceList = [`Rock`, `Paper`, `Scissors`];
let lastRoundResult;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    return choiceList[randomNum];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    let playerIndex = choiceList.indexOf(playerSelection);
    let computerIndex = choiceList.indexOf(computerSelection);
    let result;
    if((playerIndex+1)%3 === computerIndex){
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
        lastRoundResult = 0;
    }

    else if(playerIndex === computerIndex){
        result = "Draw!";
        lastRoundResult = 1;
    }

    else{
        result = "You Win!" + playerSelection + " beats " + computerSelection;
        lastRoundResult = 2;
    }

    return result;
}


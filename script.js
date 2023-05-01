let choiceList = [`Rock`, `Paper`, `Scissors`]; // Array of possible choice
let lastRoundResult; // to increment winCount

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3); // get a random index [0..2]
    return choiceList[randomNum]; // return the choice string instead
}

function playRound(playerSelection, computerSelection){
    // uppercase first letter
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();

    // find indexOf playerSelection and computerSelection in choiceList
    let playerIndex = choiceList.indexOf(playerSelection);
    let computerIndex = choiceList.indexOf(computerSelection);

    let result; // pop-up string

    // Lose
    if((playerIndex+1)%3 === computerIndex){
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
        lastRoundResult = 0;
    }

    // Draw
    else if(playerIndex === computerIndex){
        result = "Draw!";
        lastRoundResult = 1;
    }

    // Win
    else{
        result = "You Win! " + playerSelection + " beats " + computerSelection;
        lastRoundResult = 2;
    }

    return result;
}

function game(){
    let winCount = 0; // count number of win
    for(let i = 1; i <= 5; i++){ // loop 5 times to match Odin statement

        // input player choice via prompt
        let playerSelection = prompt("Input your choice!: (Rock/Paper/Scissors)");

        let computerSelection = getComputerChoice(); // get random computer choice via function

        // alert result per round
        alert("Round " + i + ": " + playRound(playerSelection, computerSelection));

        // increment winCount
        winCount += (lastRoundResult === 2);
    }

    // alert number of win
    alert("Win: " + winCount + " times");
}
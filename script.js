function getComputerChoice(){
    let choiceList = [`Rock`, `Paper`, `Scissors`];

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    return choiceList[randomNum];
}
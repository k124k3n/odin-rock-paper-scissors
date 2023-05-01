function getComputerChoice(){
    let choiceList = [`Rock`, `Paper`, `Scissors`];
    let randomNum = Math.floor(Math.random() * 3);
    return choiceList[randomNum];
}
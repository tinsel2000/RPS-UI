// Computer Choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
};

//Choice handling
let humanChoice = "None"
let computerChoice = "None"
const webHumanChoice = document.getElementById('humanChoice');
const webComputerChoice = document.getElementById('computerChoice');
webHumanChoice.textContent = humanChoice;
webComputerChoice.textContent = computerChoice;

function resetChoices(){
    humanChoice = "None"
    computerChoice = "None"
    webHumanChoice.textContent = humanChoice;
    webComputerChoice.textContent = computerChoice;
}

// Scores handling
let humanScore = 0;
let computerScore = 0;
let winner = 0;
let maxScore = 5;

const webHumanScores = document.getElementById('humanScore');
const webComputerScores = document.getElementById('computerScore');
webHumanScores.textContent = humanScore;
webComputerScores.textContent = computerScore;

const webWinner = document.getElementById('winner');

function incrementHumanScores(){
    humanScore += 1;
    webHumanScores.textContent = humanScore;
}

function incrementComputerScores(){
    computerScore += 1;
    webComputerScores.textContent = computerScore;
}

function resetScores(){
    humanScore = 0;
    computerScore = 0;
    winner = 0;
}

function declareWinner(){
    if (winner === 1) {
        webWinner.textContent = `You are the winner! Your score was ${humanScore}`;
    }
    else if (winner === 2) {
        webWinner.textContent = `You lost. Try again! Your score was ${humanScore}`;
    }
    webComputerScores.textContent = computerScore;
    webHumanScores.textContent = humanScore;
    resetScores()
}

function setMaxScore(number) {
    maxScore = number;
    (maxScore);
}

// Play Round

function playRound(humanChoice) {
    webComputerScores.textContent = computerScore;
    webHumanScores.textContent = humanScore;
    webWinner.textContent = 'Make your choice'
    let computerChoice = getComputerChoice();
    let humanChoiceLower = humanChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();
    webHumanChoice.textContent = humanChoice;
    webComputerChoice.textContent = computerChoice;

    if (humanChoiceLower === computerChoiceLower) {
        ('Draw! Nobody wins')
    }
    else if (humanChoiceLower === 'rock' && computerChoiceLower != 'paper') {
        ('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else if (humanChoiceLower === 'paper' && computerChoiceLower != 'scissors') {
        ('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else if (humanChoiceLower === 'scissors' && computerChoiceLower != 'rock') {
        ('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else {
        (`You Lose! ${computerChoice} beats ${humanChoice}.`)
        incrementComputerScores()
    };
    if (humanScore >= maxScore) {
        winner = 1;
        declareWinner()
    }
    else if (computerScore >= maxScore) {
        winner = 2;
        declareWinner()
    }
};

// Webpage interactions

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");

rock.addEventListener("click", function (e) {
    playRound("Rock");
    (humanScore, computerScore)
});
paper.addEventListener("click", function (e) {
    playRound("Paper");
});
scissors.addEventListener("click", function (e) {
    playRound("Scissors");
});
reset.addEventListener("click", function (e) {
    resetScores();
    resetChoices();
    webComputerScores.textContent = computerScore;
    webHumanScores.textContent = humanScore;
    webWinner.textContent = 'Make your choice'
});

// Switch modes
let mode;
function switchMode(mode) {
    switch(mode){
        case 3:
            setMaxScore(3);
            break;
        case 5:
            setMaxScore(5);
            break;
        case 10:
            setMaxScore(10);
            break;
    }
};

const setMax3 = document.querySelector("#setMaxScore3");
const setMax5 = document.querySelector("#setMaxScore5");
const setMax10 = document.querySelector("#setMaxScore10");

setMax3.addEventListener("click", function (e) {
    switchMode(3);
});
setMax5.addEventListener("click", function (e) {
    switchMode(5);
});
setMax10.addEventListener("click", function (e) {
    switchMode(10);
});
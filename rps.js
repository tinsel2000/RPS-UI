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
const humanChoice = "None"
const computerChoice = "None"
const webHumanChoice = document.getElementById('humanChoice');
const webComputerChoice = document.getElementById('computerChoice');
webHumanChoice.textContent = humanChoice;
webComputerChoice.textContent = computerChoice;

// Scores handling
let humanScore = 0;
let computerScore = 0;
let winner = 0;

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
    if (winner === 1) {
        webWinner.textContent = `You are the winner! Your score was ${humanScore}`;
    }
    else if (winner === 2) {
        webWinner.textContent = `You lost. Try again! Your score was ${humanScore}`;
    }
    humanScore = 0;
    computerScore = 0;
    webComputerScores.textContent = computerScore;
    webHumanScores.textContent = humanScore;
    winner = 0;
}


// Play Round
// console.log(humanChoice + humanChoiceLower + computerChoice);

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let humanChoiceLower = humanChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();
    webHumanChoice.textContent = humanChoice;
    webComputerChoice.textContent = computerChoice;

    if (humanChoiceLower === computerChoiceLower) {
        //console.log('Draw! Nobody wins')
    }
    else if (humanChoiceLower === 'rock' && computerChoiceLower != 'paper') {
        //console.log('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else if (humanChoiceLower === 'paper' && computerChoiceLower != 'scissors') {
        //console.log('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else if (humanChoiceLower === 'scissors' && computerChoiceLower != 'rock') {
        //console.log('You win! Rock beats Scissors!')
        incrementHumanScores()
    }
    else {
        //console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`)
        incrementComputerScores()
    };
    if (humanScore >= 5) {
        winner = 1;
        resetScores()
    }
    else if (computerScore >= 5) {
        winner = 2;
        resetScores()
    }
};

// 5 Round Game
/* function playGame() {
    for (let i = 0; i<5 ; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    console.log(`Game Over! Your score is: ${humanScore}`)
    if (humanScore > computerScore) {
        console.log('Congratulations, you win!');
    }
    else if(humanScore < computerScore){
        console.log('Better luck next time.')
    }
    else {
        console.log('Its a tie!')
    }
};

playGame()
*/


// Webpage interactions

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function (e) {
    playRound("Rock");
    //console.log(humanScore, computerScore)
});
paper.addEventListener("click", function (e) {
    playRound("Paper");
});
scissors.addEventListener("click", function (e) {
    playRound("Scissors");
});

/*
const info = document.querySelector("#info");

const scores = document.createElement('scores');
scores.classList.add("scores");
scores.textContent = "Current Scores: Humans: " + humanScore + " | Computers: " + computerScore;

info.appendChild(scores);
*/
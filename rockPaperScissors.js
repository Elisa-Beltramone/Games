const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

posibleChoices.forEach(posibleChoices => posibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * posibleChoices.length + 1)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'draw'
    }
    if (computerChoice === "rock" && userChoice === 'paper') {
        result = 'You win'
    } 
    if (computerChoice === "rock" && userChoice === 'scissors') {
        result = "Computer win"
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "User win"
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "Computer win"
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "Computer win"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "User win"
    }
    
    resultDisplay.innerHTML = result
}


let randomNumber = parseInt((Math.random() * 100 + 1));
const userGuess = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');

const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultPara');
const p = document.createElement('p');
let gamePlay = true;
let prevGuess = [];
let numOfGuesses = 1;

if (gamePlay) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userGuess.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1');
    }
    else if (guess > 100) {
        alert('Please enter a number lesser than 100');
    }
    else {
        prevGuess.push(guess);
        if (numOfGuesses > 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulation! You Guessed it right.');
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage('Guess a lower number');
    }
    else {
        displayMessage('Guess a higher number');
    }
}

function displayGuess(guess) {
    userGuess.value = '';
    guesses.innerHTML += `${guess}, `;
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses} `;
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    p.addEventListener('click', function(e) {
        e.displayMessage(' ');
    })
    startOver.appendChild(p);
    gamePlay = false;
    newGame();
    //   displayMessage(' ');
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        guesses.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuesses} `;
        userGuess.removeAttribute('disabled');
        startOver.removeChild(p);

        gamePlay = true;
    });
}

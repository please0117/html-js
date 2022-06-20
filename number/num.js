var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
var resetButton;
var error = false;

function CheckGuess(){
    var userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameover();
    }
    else if(guessCount === 10){
        lastResult.textContent = "GameOver!";
        lastResult.style.backgroundColor = "grey";
        setGameover();
    }
    else if(userGuess > 100 || userGuess < 0){
        lastResult.textContent = "Please enter number between 1 and 100"
        lastResult.style.backgroundColor = "gray";
        error = true;
    }
    else{
        lastResult.textContent = "Wrong!"; 
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last Guess was too low";
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last Guess was too high";
        }
    }
    if (!error) guessCount++;
    guessField.value = " ";
    guessField.focus();
}
guessSubmit.addEventListener('click', CheckGuess);

function setGameover(){
    guessField.disabled = "true";
    guessSubmit.disabled = "true";
    resetButton = document.createElement("button");
    resetButton.textContent = "start a new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    var resetParas = document.querySelectorAll(".resultParas p");
    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = " ";
    guessField.focus();

    lastResult.style.backgroundColor = "White";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
// Comenzamos el juego

var randomNumber = generateNumber.generateRandomNumber();
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guesslog = document.querySelector('.btn_guess');
guesslog.style.visibility='hidden';
var log = document.querySelector('.log');
var guessCount = 1;

function checkGuess(){

    var userGuess = parseInt(guessField.value); // capturo el valor de un input

    guesses.textContent += userGuess + ' ';
    guesses.textContent='Intentos gastados: '+ guessCount;
        guesslog.style.visibility='visible';

    if(userGuess === randomNumber){
        lastResult.textContent='lo has adivinado';
        lastResult.style.backgroundColor='green';
    }else if(guessCount === 10){
        lastResult.textContent='Fin del juego';
        gameOver();
    }else{
        lastResult.textContent='Te has equivocado';
        lastResult.style.backgroundColor='red';
        if(userGuess < randomNumber){
            lastResult.textContent='El numero es mayor';
            lastResult.style.backgroundColor='yellow';
        }else if(userGuess > randomNumber){
            lastResult.textContent='El numero es menor';
            lastResult.style.backgroundColor='yellow';
        }
        guessCount++;
        guessField.value='';
        player.addTry(userGuess);
    }

    guesslog.addEventListener('click', activeLog);
}

function gameOver(){
    guessSubmit.disabled = true;
    guessSubmit.disabled = true;
    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reiniciar';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    var resultParas = document.querySelectorAll('.resultParas p');
    for(var i=0; i<resultParas.length; i++){
        resultParas[i].textContent='';
    }
    console.log(resultParas)

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value='';
    randomNumber=Math.floor(Math.random() * 100) + 1;
    resetBtn.parentNode.removeChild(resetBtn);
    player.reset();
}

function activeLog(){
    log.textContent = 'Intentos anteriores: ';
    log.textContent += player.tries.join();
}

guessSubmit.addEventListener('click', checkGuess);
guesslog.addEventListener('click', activeLog);


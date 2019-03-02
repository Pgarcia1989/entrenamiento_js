

// Comenzamos el juego

   // Genero el número aleatorio
   generateNumber = {
       min: 1,
       max: 30,
       generateRandomNumber: function getRandomArbitrary() {
          return parseInt(Math.floor(Math.random() * (this.max - this.min) + this.min));
       }
    };
// Almaceno el número
let randomnumber = generateNumber.generateRandomNumber();
console.log(randomnumber);
let userNumber = document.querySelector('.guessNumber');
var userSend = document.querySelector('.guessSubmit');
let numberTries = document.querySelector('guessNumberTries');
let lowNumber = document.querySelector('low_result');
let lastResult = document.querySelector('last_result');
var guessTries = 0;

function checkGuess() {

guessTries++;
console.log(guessTries);
}

userSend.addEventListener('click', checkGuess);


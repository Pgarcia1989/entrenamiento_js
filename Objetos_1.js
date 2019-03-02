

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

let userNumber = document.querySelector('.guessNumber');
let userSend = document.querySelector('.guessSubmit');
let numberTries = document.querySelector('guessNumberTries');
let lowNumber = document.querySelector('low_result');
let lastResult = document.querySelector('last_result');
let guessTries = 0;

function checkGuess(){
  userGuess = userNumber.value();

//

}


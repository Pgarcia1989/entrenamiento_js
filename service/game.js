var game = {
    maxTries: 10,
    randomNumber: null,
    checkGuess: function(number) {
        if (number === this.randomNumber) {
            console.log('Has acertado!');
        } else if (number > this.randomNumber) {
            console.log('El número es menor');
        } else if (number < this.randomNumber) {
            console.log('El número es mayor');
        }
    },
    start: function() {
        this.randomNumber = generateRandomNumber(30, 1);
    }
};
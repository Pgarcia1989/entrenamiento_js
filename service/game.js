var game = {
    maxTries: 10,
    randomNumber: null,
    checkGuess: function(number) {
        if (number === this.randomNumber) {
            var currentRecord = this.getCurrentRecord();
            var currentScore =  player.tries.length;

            if(!currentRecord || parseInt(currentRecord) > player.tries.length) {
                localStorage.setItem('record', currentScore.toString());
            }

            return guessChecks.SUCCESS;
        } else if (number > this.randomNumber) {
            return guessChecks.BIGGER; // 2
        } else if (number < this.randomNumber) {
            return guessChecks.LOWER; // 3
        }
    },
    start: function() {
        this.randomNumber = generateRandomNumber(30, 1);
    },
    reset: function() {
        this.start();
    },
    getCurrentRecord: function() {
        return localStorage.getItem('record');
    }
};
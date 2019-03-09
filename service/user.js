var player = {
    tries: [],
    addTry: function(userGuess) {
        this.tries.push(userGuess);
    },
    reset: function() {
        this.tries = [];
    }
};
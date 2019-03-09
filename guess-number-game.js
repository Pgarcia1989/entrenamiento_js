var AppRootNode = document.querySelector('#app');

var form = Form({
    text: 'Adivina número',
    placeholder: 'escribe tu número',
    onGuessNumber: function(userGuess) {
        player.addTry(userGuess);
        game.checkGuess(userGuess);
    },
    onShowTries: function() {
        console.log(player.tries.join());
    },
});

AppRootNode.appendChild(form);

game.start();

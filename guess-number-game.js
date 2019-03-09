var AppRootNode = document.querySelector('#app');

var messages;
var tries;

var form = Form({
    text: 'Adivina número',
    placeholder: 'escribe tu número',
    onGuessNumber: function(userGuess) {
        player.addTry(userGuess);
        var messagesTexts = player.tries.map(function(tryResult) {
            var result = game.checkGuess(tryResult);
            return guessMessages[result];
        });
        if(messages) {
            messages.parentNode.removeChild(messages);
        }
        messages = MessagesList({ items:messagesTexts });
        AppRootNode.appendChild(messages);
    },
    onShowTries: function() {
        if(tries) {
            tries.parentNode.removeChild(tries);
        }
        tries = Message({ text: player.tries.join() });
        AppRootNode.appendChild(tries);
    },
    onRestart: function() {
        if(messages) {
            messages.parentNode.removeChild(messages);
            messages = null;
        }

        if(tries) {
            tries.parentNode.removeChild(tries);
            tries = null;
        }

        player.reset();
        game.reset();
    }
});

AppRootNode.appendChild(form);
AppRootNode.appendChild(Record());

game.start();

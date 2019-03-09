function Form({ text, placeholder, onGuessNumber, onShowTries, onRestart }) {
    var root = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var guessButton = Button({ text: 'Enviar intento' });
    var showTries = Button({ text: 'Mostrar intentos', onClick: onShowTries });
    var restart = Button({ text: 'Restart', onClick: onRestart });

    guessButton.addEventListener('click', function() {
        onGuessNumber(parseInt(input.value));
    });

    label.innerText = text;
    input.placeholder = placeholder;

    root.appendChild(label);
    root.appendChild(input);
    root.appendChild(guessButton);
    root.appendChild(showTries);
    root.appendChild(restart);

    return root;
}
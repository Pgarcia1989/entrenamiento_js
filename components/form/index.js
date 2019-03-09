function Form({ text, placeholder, onGuessNumber, onShowTries }) {
    var root = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var guessButton = Button({ text: 'Enviar intento' });
    var showTries = Button({ text: 'Mostrar intentos' });

    guessButton.addEventListener('click', function() {
        onGuessNumber(parseInt(input.value));
    });
    showTries.addEventListener('click', onShowTries);

    label.innerText = text;
    input.placeholder = placeholder;

    root.appendChild(label);
    root.appendChild(input);
    root.appendChild(guessButton);
    root.appendChild(showTries);

    return root;
}
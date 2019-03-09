function Button({ text, onClick }) {
    var root = document.createElement('button');

    root.innerText = text;
    root.classList.add('button');

    if (onClick) {
        root.addEventListener('click', onClick);
    }

    return root;
}
function Button({ text }) {
    var root = document.createElement('button');

    root.innerText = text;
    root.classList.add('button');

    return root;
}
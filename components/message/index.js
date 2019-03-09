function Message({ text }) {
    var root = document.createElement('p');
    root.innerText = text;

    return root;
}
function MessagesList({ items }) {
    var root = document.createElement('div');

    items.forEach(function(text) {
        var message = Message({ text });
        root.appendChild(message);
    });

    return root;
}
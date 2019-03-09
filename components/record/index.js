function Record() {
    var root = document.createElement('p');
    root.innerText = 'Record actual: ' + game.getCurrentRecord();

    return root;
}
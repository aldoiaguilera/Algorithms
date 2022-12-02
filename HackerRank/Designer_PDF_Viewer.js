function designerPdfViewer(h, word) {
    let characters = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let width = word.length, height = 0;
    for(var i = 0; i < h.length; i++) {
        let letter = alphabet.charAt(i);
        characters[letter] = h[i];
    }
    for(var i = 0; i < word.length; i++) {
        if(characters[word[i]] > height) {
            height = characters[word[i]];
        }
    }
    return width * height;
}
function camelcase(s) {
    let words = 1;
    for(var i = 0; i < s.length; i++) {
        let temp = s[i];
        if(s[i] == temp.toUpperCase()) {
            words++;
        }
    }
    return words;
}
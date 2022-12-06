function utopianTree(n) {
    if(n == 0) {
        return 1;
    }
    let height = 1;
    for(var i = 0; i < n; i++) {
        if((i % 2 == 0) && i != 1) {
            height *= 2;
        }
        else {
            height++;
        }
        console.log('height',height);
    }
    return height;
}
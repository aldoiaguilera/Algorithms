function howManyGames(p, d, m, s) {
    let items = 0;
    while(s >= p) {
        items++;
        s -= p;
        p -= d;
        if(p < m) {
            p = m;
        }
    };
    return items;
}
function saveThePrisoner(n, m, s) {
    if(m >= n) {
        m %= n;
    }
    s--;
    if(s < 1) {
        s = n;
    }
    if(m == 0){ 
        return s;
    }
    s += m;
    if(s > n) {
        s -= n;
    }
    return s;
}
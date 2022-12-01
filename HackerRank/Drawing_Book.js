function pageCount(n, p) {
    let is_even = n % 2;
    if(p == n || (p == n - 1  && is_even != 0) || p == 1) {
        return 0;
    }
    else {
        let front = 0, back = 0, j = 0;
        if(is_even == 0) {
            j = n;
        }
        else {
            j = n - 1;
        }
        for(var i = 1; i < n; i+=2) {
            if(i >= p || j <= p) {
                break;
            }
            front++;
            back++;
            j -= 2;
        }
        return front > back ? back : front;
    }
}
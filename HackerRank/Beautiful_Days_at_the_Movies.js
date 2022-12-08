function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    for(var iter = i; iter <= j; iter++) {
        let reversed = parseFloat(iter.toString().split('').reverse().join(''));
        if(Math.abs(iter - reversed) % k == 0) {
            beautifulDays++;
        }
    }
    return beautifulDays;
}
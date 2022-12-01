function sockMerchant(n, ar) {
    // Write your code here
    let socks = {};
    let totalPairs = 0;
    for(var i = 0; i < n; i++) {
        if(socks[ar[i]]) {
            socks[ar[i]]++;
        }
        else {
            socks[ar[i]] = 1;
        }
    }
    let pairs = Object.values(socks);
    for(var i = 0; i < pairs.length; i++) {
        if(pairs[i] >= 2) {
            totalPairs += Math.floor(pairs[i] / 2);
        }
    }
    return totalPairs;
}
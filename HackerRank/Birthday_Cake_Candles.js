function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort((a, b) => a - b);
    var size = candles.length, sum = 0;
    if(candles[0] == candles[size - 1]) {
        return size;
    }
    for(var i = size - 1; i >= 0; i--) {
        if(candles[i] == candles[size - 1]) {
            sum++;
        }
        else {
            break;
        }
    }
    console.log(sum);
    return sum;
}
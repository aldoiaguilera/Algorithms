function findDigits(n) {
    let temp = n.toString();
    let divisors = 0;
    for(var i = 0; i < temp.length; i++) {
        if(n % temp[i] == 0){
            divisors++;
        }
    }
    return divisors;
}

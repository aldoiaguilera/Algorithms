function bonAppetit(bill, k, b) {
    let total = 0;
    for(var i = 0; i < bill.length; i++) {
        if(i != k) {
            total += bill[i];
        }
    }
    total = total / 2;
    total -= b;
    if(total < 0) {
        total = total * -1;
    }
    if(total == 0) {
        console.log('Bon Appetit');
    }
    else {
        console.log(total);
    }

}
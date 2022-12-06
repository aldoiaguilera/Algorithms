function angryProfessor(k, a) {
    let onTime = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i] <= 0) {
            onTime++;
        }
    }
    if(onTime >= k) {
        return 'NO';
    }
    else {
        return 'YES';
    }
}
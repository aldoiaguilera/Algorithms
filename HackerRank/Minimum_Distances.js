function minimumDistances(a) {
    let first = [], second = [];    
    var minimum_distance;
    for(var i = 0; i < a.length; i++) {
        for(var j = 0; j < a.length; j++) {
            if(a[i] == a[j] && i != j) {
                first.push(i);
                second.push(j);
            }
        }
    }
    if(first[0] >= 0) {
        for(var i = 0; i < first.length; i++) {
            if(!minimum_distance) {
                minimum_distance = second[i] - first[i];
            }
            if(second[i] - first[i] < minimum_distance && second[i] - first[i] > 0) {
                minimum_distance = second[i] - first[i];
            }
        }
    }
    else {
        minimum_distance = -1;
    }
    console.log(minimum_distance);
    return minimum_distance;
}
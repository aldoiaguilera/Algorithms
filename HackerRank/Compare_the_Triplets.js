function compareTriplets(a, b) {
    let comparison_points = [0,0];
    for(var i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            comparison_points[0]++;
        }
        else if (a[i] < b[i]){ 
            comparison_points[1]++;
        }
    }
    return comparison_points;
}
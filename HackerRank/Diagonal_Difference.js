function diagonalDifference(arr) {
    // Write your code here
    var primary_diagonal  = 0, secondary_diagonal = 0, difference = 0, j = arr.length - 1;
    for(var i = 0; i < arr.length; i++) {
        primary_diagonal += arr[i][i];
        secondary_diagonal += arr[i][j];
        j--;
    }
    difference = primary_diagonal - secondary_diagonal;
    if(difference < 0) { 
        difference = difference * -1;
    }
    return difference;
}
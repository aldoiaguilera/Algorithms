function miniMaxSum(arr) {
    // Write your code here
    var large_sum = 0, small_sum = 0, j = arr.length - 1;    
    arr.sort()
    for(var i = 0; i < arr.length - 1 ; i++) {
        small_sum += arr[i];
        large_sum += arr[j];
        j--;
    }
    console.log(small_sum, large_sum)
}
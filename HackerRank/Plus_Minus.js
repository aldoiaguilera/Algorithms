function plusMinus(arr) {
    // Write your code here
    var positive = 0, negative = 0, zeros = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive++;
        }
        else if(arr[i] < 0) {
            negative++;
        }
        else {
            zeros++;
        }
    }
    console.log(positive/arr.length)
    console.log(negative/arr.length)
    console.log(zeros/arr.length)
}
function cutTheSticks(arr) {
    var num_of_sticks = [];
    num_of_sticks.push(arr.length)
    timer = 10;
    do {
        arr.sort();
        var min = arr[0];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == min) {
                arr.splice(i, 1);
                i--;
            }
            else {
                arr[i] = arr[i] - min;
            }
        }
        if(arr.length > 0) {
            num_of_sticks.push(arr.length);
        }
        
    } while(arr.length > 0)
    console.log('num of sticks: ', num_of_sticks);
    return num_of_sticks;
}

cutTheSticks([5, 4, 4, 2, 2, 8])
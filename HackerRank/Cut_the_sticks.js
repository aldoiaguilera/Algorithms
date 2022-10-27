function cutTheSticks(arr) {
    var num_of_sticks = [];
    num_of_sticks.push(arr.length)
    do {
        arr.sort((a,b)=>a-b);
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
    return num_of_sticks;
}

cutTheSticks([5, 4, 4, 2, 2, 8])
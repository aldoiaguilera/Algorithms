// Push Front
function pushFront(array, value) {
    let tempArray = [value];
    for(var i = 0; i < array.length; i++) {
        tempArray.push(array[i]);
    }
    console.log(tempArray);
    return tempArray;
}
pushFront([5,7,2,3], 8);

// Pop Front

// Insert At


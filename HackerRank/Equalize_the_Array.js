function equalizeArray(arr) {
    let deletions = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0; i < arr.length - 1; i++) {
        let copies = 1;
        for(var j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                copies++;
            }
        }
        deletions.push(arr.length - copies);
    }
    deletions.sort((a,b)=>b-a);
    return deletions.pop();
}
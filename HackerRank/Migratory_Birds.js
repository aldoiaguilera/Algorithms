function migratoryBirds(arr) {
    arr.sort((a,b)=>a-b);
    let hash = {};
    for(var i = 0; i < arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]]++;
        }
        else{
            hash[arr[i]] = 1;
        }
    }
    let qtys = Object.values(hash);
    let bird = Object.keys(hash);
    let max = Math.max(...qtys);
    let answer;
    for(var i = 0; i < qtys.length; i++) {
        if(qtys[i] == max){
            answer = bird[i];
            break;
        }
    }
    return answer;
}
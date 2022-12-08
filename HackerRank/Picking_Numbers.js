function pickingNumbers(a) {
    console.log(a);
    let answers = [];
    for(var i = 0; i < a.length - 1; i++) {
        let subarray = 1;
        let temp = i;        
        for(var j = 1; j < a.length; j++) {
            if(Math.abs(a[i] - a[j]) <= 1) {
                console.log('a[i] - a[j]', a[i], a[j]);
                subarray++;
                i = j;
            }
        }
        console.log('DONE');
        i = temp;
        answers.push(subarray);
    }
    answers.sort((a,b)=>a-b);
    console.log('answers',answers);
    return answers.pop();
}

let array = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 
4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4];


pickingNumbers(array);
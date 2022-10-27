function getTotalX(a, b) {
    let possible_numbers = [];
    b.sort((a,b)=>a-b);

    // Find all factors of smallest value in array
    for(var i = 1; i <= b[0]; i++) {
        if(b[0] % i == 0) {
            possible_numbers.push(i);
        }        
    }
    
    // Check all possible answers for condition #2
    for(var i = 0; i < b.length; i++) {
        for(var j = 0; j < possible_numbers.length; j++) {
            if(b[i] % possible_numbers[j] != 0){ 
                possible_numbers[j] = 0;
            }
        }       
    }
    
    // Pop all possible answers that did not work for condition #2
    possible_numbers.sort((a,b)=>b-a);
    for(var i = possible_numbers.length - 1; i >= 0; i--) {
        if(possible_numbers[i] == 0) {
            possible_numbers.pop();
        }
        else {
            break;
        }
    }

    // Check all possible answers for condition #1
    for(var i = 0; i < a.length; i++) {
        for(var j = 0; j < possible_numbers.length; j++) {
            if( possible_numbers[j] % a[i] != 0){
                console.log('failed', possible_numbers[j]); 
                possible_numbers[j] = 0;
            }
        } 
    }
    
    // Pop all possible answers that did not work for condition #1
    possible_numbers.sort((a,b)=>b-a);
    for(var i = possible_numbers.length - 1; i >= 0; i--) {
        if(possible_numbers[i] == 0) {
            possible_numbers.pop();
        }
        else {
            break;
        }
    }    
    console.log(possible_numbers);
    return possible_numbers.length;
}

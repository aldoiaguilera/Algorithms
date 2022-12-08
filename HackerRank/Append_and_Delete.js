function appendAndDelete(s, t, k) {
    let count = 0;
    s = s.split('');
    t = t.split('');
    
    // Pop
    for(var i = 0; i < s.length; i++) {
        if(s[i] != t[i]) {
            let pops = s.length - (i);
            while(pops != 0) {
                s.pop();
                pops--;
                count++;
            }
        }
    }
    
    // Push
    for(var i = 0; i < t.length; i++) {
        if(s[i] != t[i]) {
            s.push(t[i]);
            count++;
        }
    }
    
    console.log(count);

    if(count == k || Math.abs(count - k) % 2 != 0) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}


console.log(appendAndDelete('y','yu',2))
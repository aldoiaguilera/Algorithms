function appendAndDelete(s, t, k) {
    let count = 0;
    s = s.split('');
    t = t.split('');
    
    if((k / 2) > t.length) {
        return 'Yes';
    }
    
    let iter = 0;
    do {
        if(s[iter] != t[iter]) {
            count = s.length - iter;
            break;
        }
        iter++; 
    } while(iter < s.length);

    console.log(count);

    if(count == 0) {
        count = t.length - s.length;
    }
    
    if(k < count * 2) {
        return 'No';
    }

    if(k % 2 == 0 && k > 0) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}

console.log('Yes',appendAndDelete('aba', 'aba', 7));
console.log('No',appendAndDelete('y','yu',2))
console.log('No',appendAndDelete('abcd','abcdert',10))
console.log('No',appendAndDelete('qwerasdf','qwerbsdf', 6))
console.log('Yes',appendAndDelete('hackerhappy','hackerrank',9))
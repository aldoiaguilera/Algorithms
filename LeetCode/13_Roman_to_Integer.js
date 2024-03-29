/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0;
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    
    for(i = 0; i < s.length; i++) {
        let temp = s[i] + s[i+1];
        if(roman[temp]) {
            number += roman[temp];
            i++;
        }
        else {
            number += roman[s[i]];
        }
    }

    return number;

};
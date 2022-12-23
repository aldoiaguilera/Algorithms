/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x.toString();
    let tempBack = [];
    for(let i = 0; i < temp.length; i++) {
        tempBack.push(temp[i]);
    }
    tempBack.reverse();
    let isValid = true;
    for(let i = 0; i < tempBack.length; i++) {
        if(tempBack[i] != temp[i])
            isValid = false;
    }
    return isValid;
};
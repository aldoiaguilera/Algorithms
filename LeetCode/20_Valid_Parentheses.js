/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 1) {
        return true;
    }
    
    let stack = [];
    for(var i = 0; i < s.length; i++) {
        if(s[i] == '[' || s[i] == '(' || s[i] == '{') {
            stack.push(s[i]);
        }
        else {
            if(s[i] == ']') {
                if(stack[stack.length - 1] != '[') {
                    return false;
                }
                else {
                    stack.pop();
                }
            }
            else if(s[i] == ')') {
                if(stack[stack.length - 1] != '(') {
                    return false;
                }
                else {
                    stack.pop();
                }
            }
            else {
                if(stack[stack.length - 1] != '{') {
                    return false;
                }
                else {
                    stack.pop();
                }
            }
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};
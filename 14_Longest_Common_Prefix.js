/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // set initial letter
    if(strs[0].length < 1){
        return "";
    }
    let letters = strs[0][0];
    let j = 0;
    let isDone = false;
    do {
        for(var i = 0; i < strs.length; i++) {
            if(letters[j] != strs[i][j]) {
                if(letters.length == 1) {
                    letters = "";
                }
                else {
                    letters = letters.slice(0,j);
                }
                
                isDone = true;
                break;            
            }
        }
        if(!isDone) {
            j++;
            letters += strs[0][j];
        }

    } while(!isDone);
    return letters;
};
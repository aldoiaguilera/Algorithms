/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let is_double = false;
    for(let i = 0; i < nums.length; i++) {
        for( let j = 0; j < nums.length; j++) {
            if(i != j && nums[i] == nums[j]) {
                is_double = true;
                break;
            }
        }
    }
    return is_double
};
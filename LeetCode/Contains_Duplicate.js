
function containsDuplicate(nums) {
    let object = {} //hashmap
    for(let i = 0; i < nums.length; i++){
        if(object[nums[i]]){
            object[nums[i]]++
        }
        else{
            object[nums[i]] = 1
        }
    }
    let is_double = false;
    for (value in object) {
        if(object[value] > 1){
            is_double = true;
        }
        else{
            is_double = false;
        }
    }
    console.log(is_double);
    return is_double;
}

containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);

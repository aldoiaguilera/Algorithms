function getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a, b)=>a-b);
    drives.sort((a,b)=>a-b);
    let max_spent = 0;
    if(keyboards[0] + drives[0] > b) {
        return -1;
    }
    else {
        max_spent = keyboards[0] + drives[0];
        for(var i = 0; i < keyboards.length; i++) {
            for(var j = 0; j < drives.length; j++) {
                if(keyboards[i]+drives[j] <= b && keyboards[i]+drives[j] > max_spent) {
                    max_spent = keyboards[i]+drives[j];
                }
            }
        }
        return max_spent;
    }
}
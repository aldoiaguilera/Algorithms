function countingValleys(steps, path) {
    let level = 0, valleys = 0;
    for(var i = 0; i < steps; i++) {
        if(level == 0) {
            // Sea level
            if(i != steps-1) {
                // Not at final
                if(path[i] == 'D') {
                    // Check if going down
                    valleys++;
                }
            }
        }
        if(path[i] == 'U') {
            // Raise level
            level++;
        }
        else {
            // Lower level
            level--;
        }
    }
    return valleys;
}
function hurdleRace(k, height) {
    let max = height[0];
    for(var i = 1; i < height.length; i++) {
        if(height[i] > max) {
            max = height[i];
        }
    }
    if(max < k) {
        return 0;
    }
    return max - k;
}
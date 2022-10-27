function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apples_on_house = 0;
    let oranges_on_house = 0;
    
    // Check how many apples will fall on house
    for(let i = 0; i < apples.length; i++) {
        if(apples[i] > 0 && apples[i] + a >= s && apples[i] + a <= t) {
            apples_on_house++;
        }
    }
    
    // Check how many organges will fall on house
    for(let i = 0; i < oranges.length; i++) {
        if(oranges[i] < 0 && b + oranges[i] <= t && b + oranges[i] >= s) {
            oranges_on_house++;
        }
    }
    console.log(apples_on_house);
    console.log(oranges_on_house);
}
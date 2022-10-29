function breakingRecords(scores) {
    let high_score = scores[0];
    let low_score = scores[0];
    let times_breaking_record = [0,0];
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > high_score) {
            high_score = scores[i];
            times_breaking_record[0]++;
        }
        if(scores[i] < low_score) {
            low_score = scores[i];
            times_breaking_record[1]++;
        }
    }
    return times_breaking_record;
}
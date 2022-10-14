function climbingLeaderboard(ranked, player) {
    // Write your code here
    var mapped_ranks = new Map();
    var unmapped_ranks = [];
    var rank_counter = 1;
    for(var i = 0; i < ranked.length; i++) {
        if(!mapped_ranks.get(ranked[i])) {
            mapped_ranks.set(ranked[i], rank_counter);
            unmapped_ranks.push(ranked[i]);
            rank_counter++;
        }
    }
    var ranks = [];
    for(var i = 0; i < player.length; i++) {
        if(mapped_ranks.get(player[i])) {
            ranks.push(mapped_ranks.get(player[i]));
        }
        else {
            for(var j = 0; j < unmapped_ranks.length; j++){ 
                if(player[i] > unmapped_ranks[j]) {
                    ranks.push(j + 1);
                    break;
                }
                else if(j == unmapped_ranks.length - 1) {
                    ranks.push(j + 2);
                }
            }
        }
    }
    console.log(unmapped_ranks);
    return ranks;
}
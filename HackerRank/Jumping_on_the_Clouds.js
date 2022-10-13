function jumpingOnClouds(c) {
    let player_position = 0;
    let jumps = 0;
    do{
        if(player_position + 2 <= c.length) {
            if(c[player_position + 2] == 0) {
                player_position = player_position + 2;
                jumps++;
            }
            else {
                player_position++;
                jumps++;
            }
        }
        else {
            player_position++;
            jumps++;
        }
    } while (player_position < c.length - 1)
    return jumps;
}
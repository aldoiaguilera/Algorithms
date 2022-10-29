function catAndMouse(x, y, z) {
    var position_x = z - x;
    var position_y = z - y;
    if(position_y < 0) {
        position_y *= -1;
    }    
    if(position_x < 0) {
        position_x *= -1;
    }   
    if(position_x > position_y) {
        return 'Cat B';
    }
    else if(position_x < position_y) {
        return 'Cat A';
    }
    else {
        return 'Mouse C';
    }
}
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let is_possible = 'NO';
    let jumps_x1 = 0, jumps_x2 = 0;
    do {
        if(x1 == x2 && jumps_x1 == jumps_x2) {
            is_possible = 'YES';
        }
        if((v1 < v2 && x1 < x2) || (v2 < v1 && x2 < x1) || (v2 == v1 && x1 != x2)) {
            break;
        }
        x1 += v1;
        x2 += v2;
        jumps_x1++;
        jumps_x2++;
    } while(is_possible == 'NO');
    
    return is_possible;
}
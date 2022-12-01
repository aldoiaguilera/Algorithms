function dayOfProgrammer(year) {
    let date;
    if(year < 1918) {
        // Julian Calendar
        if(year % 4 == 0) {
            // Leap year
            date = '12.09.' + year;
        }
        else {
            // Non-leap year
            date = '13.09.' + year;
        }
    }
    else if(year == 1918) {
        // Adjustment to Gregorian Calendar
        date = '26.09.1918';
    }
    else {
        // Gregorian Calendar
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            // Leap year
            date = '12.09.' + year;
        }
        else {
            // Non-leap year
            date = '13.09.' + year;
        }
    }
    return date;
}
function timeConversion(s) {
    // Write your code here
    
    var am_or_pm = s.slice(8);
    var new_time = s.slice(0, 8);
    var hour = new_time.slice(0,2);
    if(am_or_pm == 'AM') {
        if(hour == '12') {
            new_time = '00';
            new_time += s.slice(2, 8);
        }
        return new_time;
    }
    else {
        if(hour != '12') {
            new_time = String(Number(hour) + 12);
            new_time += s.slice(2, 8);
        }
        return new_time;
    }
}
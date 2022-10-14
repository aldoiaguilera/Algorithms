function staircase(n) {
    var counter = n - 1;
    do {
        var statement = '';
        for(var i = 0; i < n; i++) {
            if(i < counter) {
                statement += ' '
            }
            else {
                statement += '#'
            }
        }
        console.log(statement)
        counter--;
    } while(counter >= 0)
}
function gradingStudents(grades) {
    let multiples_of_5 = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    for(var i = 0; i < grades.length; i++) {
        if(grades[i] >= 38) {
            for(var j = 0; j < multiples_of_5.length; j++) {
                if(grades[i] < multiples_of_5[0]) {
                    if(multiples_of_5[0] - grades[i] <= 2) {
                        grades[i] = multiples_of_5[0];
                    }
                    break;
                }
                if(grades[i] > multiples_of_5[j] && grades[i] < multiples_of_5[j + 1]) {
                    if(multiples_of_5[j+1] - grades[i] <= 2) {
                        grades[i] = multiples_of_5[j+1];
                    }
                    break;
                }
            }
        }
    }
    return grades;
}
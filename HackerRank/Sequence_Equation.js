function permutationEquation(p) {
    let count = 1;
    let answer = [];
    do{ 
        let numb;
        for(var i = 0; i < p.length; i++) {
            if(p[i] == count) {
                numb = i + 1;
            }
        }
        console.log('numb',numb);
        for(var i = 0; i < p.length; i++) {
            if(p[i] == numb) {
                answer.push(i+1);
            }
        }
        count++;
    } while(count <= p.length);
    
    return answer;
}
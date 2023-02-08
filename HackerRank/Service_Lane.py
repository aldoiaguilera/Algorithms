def serviceLane(n, cases, width):
    smallestWidths = []
    newArray = []
    
    for case in cases:
        temp = []
        for i in range(case[0],(case[1]+1)):
            temp.append(width[i])
        newArray.append(temp)
    
    for answer in newArray:
        answer.sort(reverse=True)
        smallestWidths.append(answer.pop())
    
    return smallestWidths
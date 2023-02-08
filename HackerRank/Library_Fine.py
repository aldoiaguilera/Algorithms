def libraryFine(d1, m1, y1, d2, m2, y2):
    fine = 0
    years = y2-y1
    months = m2-m1
    days = d2-d1
    print('years',years)
    print('months',months)
    print('days',days)
    
    if years >= 0 and months == 0 and days >= 0:
        print('on time')
        fine = 0
    elif years == 0 and months == 0:
        print('days late')
        fine = days * 15
    elif (years > 1) or (years == 1 and months == 0):
        print('years late')
        fine = 10000
    else:
        print('Other')
    
    
    return fine

print(libraryFine(10,6,2018,9,6,2019))
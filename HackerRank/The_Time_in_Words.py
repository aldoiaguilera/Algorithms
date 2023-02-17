def timeInWords(h, m):
    string = ''
    
    numbers = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'quarter',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eightteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'half',
    }
    
    if m == 0:
        string += numbers[str(h)] + " o' clock"
    elif m > 30:
        minute = 60 - m
        if m > 20 and m < 30:
            string += numbers['20'] + numbers[str(minute[1])] + ' minutes to ' + numbers[str(h + 1)]
        else:
            print('here')
            if minute == 15:
                string += numbers[str(minute)] + ' to ' + numbers[str(h + 1)]
            else:
                string += numbers[str(minute)] + ' minutes to ' + numbers[str(h + 1)]
    elif m > 20 and m < 30:
        minute = str(m)
        string += numbers['20'] + ' ' + numbers[str(minute[1])] + ' minutes past ' + numbers[str(h)]
    else:
        string += numbers[str(m)] + ' past ' + numbers[str(h)]        
    
    return string

print(timeInWords(5,45))
print(timeInWords(7,29))
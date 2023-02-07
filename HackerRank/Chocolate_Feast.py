def chocolateFeast(n, c, m):
    bars = n // c
    wrappers = bars
    
    while wrappers // m != 0:
        tempBars = wrappers // m
        bars += tempBars
        wrappers = tempBars + (wrappers % m)
        
    return bars
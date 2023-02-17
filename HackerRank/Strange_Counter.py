def strangeCounter(t):
    cycle = 3
        
    while t > cycle:
        t -= cycle
        cycle *= 2
    
    t -= 1
        
    return (cycle - t)
def jumpingOnClouds(c, k):
    energy = 100
    location = 0
    
    while (energy > 0) or (location != 0):
        if location + k >= len(c):
            location = (k + location) - len(c)
        else:
            location += k
        energy -= 1
        if c[location] == 1:
            energy -= 2
        if(energy == 0 or location == 0):
            break

    return energy

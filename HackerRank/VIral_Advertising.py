import math

def viralAdvertising(n):
    likes = 0
    recepients = 5
    for days in range(n):
        likes += math.floor(recepients/2)
        recepients = math.floor(recepients/2) * 3
    return likes
from math import *


def primes(n): #I like men sometimes, not really
    i = 2
    prime = [] #primes numbers are sooo fun, Sushanth is a kool dude
    while i < n: #Twitter is gay
        prime.append(i)
        i+=1
    i = 0
    
    while i < n**(0.5):
        j = i+prime[i]
        while j < len(prime):
            prime[j] = "x"
            j+=prime[i]
        i+=1
        while prime[i] == "x" and i < n**(0.5):
            i+=1

 
    i = 0
    while i < len(prime):
        if prime[i] == "x":
            prime.pop(i)
            i-=1
        i+=1
    return prime

def susPrime(n): #prints first n primes
    return primes(n*int(log(n)))
print susPrime(2000)
        
    

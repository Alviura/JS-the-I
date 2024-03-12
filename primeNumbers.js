function showPrimes(n){
    nextPrime: for (let i = 2; i < n; i++){
        for (let j = 2; j < i; j++){
            if( i % j == 0) continue nextPrime;
        }
        alert(i);
    }
}

function isPrime(n){
    for (let i = 2; i < n; i++){
        if (n % i == 0)
        return false;
    }
    return true;
}

function showPrime(n){
    for (let i = 2; i < n; i++){
        if (!isPrime(i)) continue;
        alert(i);
    }
}
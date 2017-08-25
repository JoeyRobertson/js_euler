var input = 600851475143;


function largestPrimeFactor(n) {
    for (var i = 2; i <= n; i++) {
        if (n % i === 0) {
            n /= i;
          	i--;
        }
    }
    return i;
}

console.log(largestPrimeFactor(input));

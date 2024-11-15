function power(base, exponent) {
    // Base case: exponent is 0
    if (exponent === 0) {
        return 1;
    }

    // Recursive case: base * (base^exponent-1)
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); 
console.log(power(5, 0));  
console.log(power(3, 4));

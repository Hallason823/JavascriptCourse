function getFactorial(num) {
    return num < 2 ? 1 : num * getFactorial(num-1);
}

function getExponentialWithNonNegativeIntegerExponent(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    return exponent > 1 ? base * getExponentialWithNonNegativeIntegerExponent(base, exponent-1) : base;
}

function getExponentialWithNegativeIntegerExponent(base, exponent) {
    return getExponentialWithNonNegativeIntegerExponent(1/base, Math.abs(exponent));
}

function updatelogarithmApproximation(vector, base, n) {
    vector[0] += getExponentialWithNonNegativeIntegerExponent(-1, n-1)*getExponentialWithNonNegativeIntegerExponent(base-1, n)*(1/n);
}

function startLogarithmApproximation(vector, base, n_start) {
    vector[0] = 0;
    for (let i = 1; i <= n_start; i++) {
        vector[0] += getExponentialWithNonNegativeIntegerExponent(-1, i-1)*getExponentialWithNonNegativeIntegerExponent(base-1, i)*(1/i);
    }
}

function getexponentialApproximation(vector, exponent, n) {
    vector[1] = 0;
    for (let i = 0; i < n; i++) {
        vector[1] += getExponentialWithNonNegativeIntegerExponent(exponent*vector[0], i)/getFactorial(i);
    }
}

function getGenericExponentiationBaseZeroToTwo(base, exponent, n_start = 10, error = 0.0000000001) {
    let vector = [0, 0];
    let approximation;
    let stopping_criterion;
    startLogarithmApproximation(vector, base, n_start);
    getexponentialApproximation(vector, exponent, n_start);
    approximation = vector[1];
    stopping_criterion = false;
    while (!stopping_criterion) {
        n_start++
        updatelogarithmApproximation(vector, base, n_start);
        getexponentialApproximation(vector, exponent, n_start);
        if (Math.abs((vector[1] - approximation)/vector[1]) < error) {
            stopping_criterion = true;
        }
        approximation = vector[1];
    }
    return vector[1];
}

//Question 13
console.log("Input (exponent positive integer): 3^4\nOutput: " + getExponentialWithNonNegativeIntegerExponent(3, 4));
console.log("\nInput (exponent negative integer): 2^(-4)\nOutput: " + getExponentialWithNegativeIntegerExponent(2, -4));
console.log("\nInput (base -> (0-2)): 1.5^(3.5)\nOutput:  "+ getGenericExponentiationBaseZeroToTwo(1.5, 3.5));
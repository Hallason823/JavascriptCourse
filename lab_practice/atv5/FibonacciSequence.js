function getFibonacciSequenceLimited(limited_value) {
    if (limited_value < 0) return [0];
    else if (limited_value < 1) return [0, 1];
    else {
        fibonacci_sequence = [0, 1];
        while (fibonacci_sequence[fibonacci_sequence.length-1] <= limited_value) {
            fibonacci_sequence.push(fibonacci_sequence[fibonacci_sequence.length-2]+fibonacci_sequence[fibonacci_sequence.length-1]);
        }
        return fibonacci_sequence;
    }
}

//Question 17
let limited_value = 500
console.log("Output: " + getFibonacciSequenceLimited(limited_value));
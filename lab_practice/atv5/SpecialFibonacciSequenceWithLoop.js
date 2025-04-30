function getFibonacciSequence(length) {
    if (length == 0) return [];
    else if (length == 1) return [0];
    else {
        var fibonacci_sequence = [0, 1]
        for (let i = 2; i < length; i ++) fibonacci_sequence.push(fibonacci_sequence[fibonacci_sequence.length-2]+fibonacci_sequence[fibonacci_sequence.length-1]);
        return fibonacci_sequence;
    }
}

//Questions 15 and 16
let array_length = 10;
console.log("Size: " + array_length);
console.log("Output: " + getFibonacciSequence(array_length));
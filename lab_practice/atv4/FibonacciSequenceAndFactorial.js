const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getUserInput(message) {
    return new Promise((resolve, reject) => {
        rl.question(message, (inserted_num) => {
            const num = parseInt(inserted_num);
            resolve(num);
        });
    });
}

function getFibonacciSequence(length) {
    if (length == 0) return [];
    else if (length == 1) return [0];
    else {
        var fibonacci_sequence = [0, 1]
        for (var i = 2; i < length; i ++) fibonacci_sequence.push(fibonacci_sequence[fibonacci_sequence.length-2]+fibonacci_sequence[fibonacci_sequence.length-1]);
        return fibonacci_sequence;
    }
}

function getFactorial(num) {
    return num < 2 ? 1 : num * getFactorial(num-1);
}

console.log("\nFibonacci Sequence");
getUserInput("Insert the array size: ")
    .then((array_size) => {
        console.log("Output: " + getFibonacciSequence(array_size));
    })
    .then(() => {  
        console.log("\nFactorial");
        return getUserInput("Insert a positive integer: ");
    })
    .then((num) => {
        console.log("Output: " + getFactorial(num));
        rl.close();
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
function getSum(numA, numB) {
    return numA+numB;
}

function getIntervalBetweenNumbers(lower_limited, upper_limited) {
    numbers_between = []
    for (let i = lower_limited+1; i < upper_limited; i++) {
        numbers_between.push(i);
    }
    return numbers_between;
}

//Questions 10 and 11
let numA = 0, numB = 10
console.log("Input A: " + numA + "\nInput B: " + numB);
console.log("Output sum: " + getSum(numA, numB));
console.log("Output between: " + getIntervalBetweenNumbers(numA, numB));
function printBetweenNumbers(lower_limited, upper_limited) {
    for (let i = lower_limited+1; i < upper_limited; i++) {
        process.stdout.write(i+'\n');
    }
}

function printBetweenNumbersOnlySingleLine(lower_limited, upper_limited) {
    for (let i = lower_limited+1; i < upper_limited-1; i++) {
        process.stdout.write(i + ' ');
    }
    process.stdout.write((upper_limited-1) + '');
}

//Question 06
let lower_limited = 1, upper_limited = 20;
console.log("Output (1):");
printBetweenNumbers(lower_limited, upper_limited);
console.log("\nOutput (2):");
printBetweenNumbersOnlySingleLine(lower_limited, upper_limited);
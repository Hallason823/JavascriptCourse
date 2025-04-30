const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function askForElements(numbers, array_length, count, resolve) {
    rl.question("Insert the element " + (count+1) + " of the array: ", (element) => {
        const num = parseFloat(element);
        numbers.push(num);
        count++;
        if (count < array_length) askForElements(numbers, array_length, count, resolve);
        else resolve(numbers);
    });
}

function getInputArray(array_length = 10) {
    return new Promise((resolve, reject) => {
        let numbers = [];
        askForElements(numbers, array_length, 0, resolve);
    });
}

function getAndPrintAmountEvenOddInArray(numbers) {
    let amount = [0, 0];
    for (i = 0; i < numbers.length; i++) {
        amount[numbers[i]%2] += 1;
    }
    console.log("Amount [Even, Odd]: " + amount);
    return amount;
}

getInputArray()
    .then((numbers) => {
        //Question 14
        let amount = getAndPrintAmountEvenOddInArray(numbers, true, false);
        rl.close();
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
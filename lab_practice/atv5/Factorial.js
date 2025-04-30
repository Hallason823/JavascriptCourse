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

function getFactorial(num) {
    return num < 2 ? 1 : num * getFactorial(num-1);
}

getUserInput("Insert a positive integer: ")
    .then((num) => {
        //Question 18
        console.log("Output: " + getFactorial(num));
        rl.close();
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
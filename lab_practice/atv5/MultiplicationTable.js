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

function getMultiplicationTable(num) {
    console.log("Multiplication Table " + num);
    for (let i = 0; i < 11; i++) {
        console.log(num+'X'+i+'='+num*i);
    }
}

getUserInput("Insert the number to get the multiplication table: ")
    .then((num) => {
        //Question 12
        getMultiplicationTable(num);
        rl.close();
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
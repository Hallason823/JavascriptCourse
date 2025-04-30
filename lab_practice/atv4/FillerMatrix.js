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

function fillMatrix(rows_num, columns_num) {
    let matrix = []
    count = 1;
    for (var i = 0; i < rows_num; i++){
        let row = []
        for (var j =0; j < columns_num; j++){
            row.push(count);
            count++;
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) console.log(matrix[i].toString());
}

console.log("\nFiller Matrix\n");
let rows_num, columns_num;
getUserInput("Insert the rows number: ")
    .then((num) => {
        rows_num = num;
    })
    .then(() => {  
        return getUserInput("Insert the columns number: ");
    })
    .then((num) => {
        columns_num = num;
        rl.close();
        console.log("\nMatrix:\n" );
        printMatrix(fillMatrix(rows_num, columns_num));
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
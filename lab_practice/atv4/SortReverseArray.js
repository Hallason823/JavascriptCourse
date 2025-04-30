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

function getInputArray(fixed_size = 5, is_fixed_size = false) {
    return new Promise((resolve, reject) => {
        let numbers = [];
        let array_length;
        if (is_fixed_size) {
            array_length = parseInt(fixed_size);
            askForElements(numbers, array_length, 0, resolve);
        } else {
            rl.question("Insert the array size: ", (inserted_size) => {
                array_length = parseInt(inserted_size);
                askForElements(numbers, array_length, 0, resolve);
            });
        }
    });
}

function bubbleSort(numbers, iter) {
    var temp_var;
    if (iter < 1) return;
    for (var i = 0; i < iter; i++) {
        if (numbers[i] > numbers[i+1]) {
            temp_var = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp_var;
        }
    }
    bubbleSort(numbers, iter-1);
}

function getReversedArray(numbers) {
    var temp_var, reversed_length = numbers.length/2;
    for (var i = 0; i < reversed_length; i++) {
        temp_var = numbers[i];
        numbers[i] = numbers[(numbers.length-1)-i];
        numbers[(numbers.length-1)-i] = temp_var;
    }
}

function getSortedArray(numbers, ascending_order = true) {
    bubbleSort(numbers, numbers.length-1);
    if (!ascending_order) getReversedArray(numbers);
}

function printChangedArray(numbers, reversed = false, ascending_order = true) {
    console.log("Array of input: " + numbers);
    if (ascending_order) getSortedArray(numbers, ascending_order);
    if (reversed) getReversedArray(numbers);
    console.log("Array of output: " + numbers);
}

//Question 01
console.log("Question 01");
let num_1 = [5, 4];
printChangedArray(num_1);
//Question 02
console.log("\nQuestion 02");
let num_2 = [5, 4, 8];
printChangedArray(num_2);
//Question 03
console.log("\nQuestion 03");
getInputArray(3, true)
    .then((numbers) => {
        printChangedArray(numbers, true, false);
    })
    .then(() => { 
        //Question 04
        console.log("\nQuestion 04");
        return getInputArray();
    })
    .then((numbers) => {
        printChangedArray(numbers, true, false);
        rl.close();
    })
    .then(() => {  
        //Question 05
        console.log("\nQuestion 05");
        let num_5 = [28, 49, 65, 2, 45, 99, 22, 10, 24, 48, 100, 435, 422, 222, 28, 29, 27];
        printChangedArray(num_5);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
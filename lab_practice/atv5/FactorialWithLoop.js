function getFactorial(num) {
    let product = 1;
    if (num < 2) {
        return product;
    }
    else {
        for (let i = num; i > 1; i--) product *= i;
        return product;
    }
}
//Testing - Question 19
let num = 8;
console.log("Input: " + num + "\nOutput: " + getFactorial(num));
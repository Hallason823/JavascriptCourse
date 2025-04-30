function sum(a, b) {
    return a+b;
}

function minus(a, b) {
    return a-b;
}

function product(a, b) {
    return a*b;
}

function division(a ,b) {
    return a/b;
}

function operation(operation_type, a, b) {
    switch (operation_type) {
        case "sum":
            console.log(sum(a, b));
            break;
        case "minus":
            console.log(minus(a,b));
            break;
        case "product":
            console.log(product(a, b));
            break;
        case "division":
            console.log(division(a, b));
            break;
        default:
            console.log("The operation is not defined!");
            break;
    }
}

const prompt = require(`prompt-sync`)();
//Reading by the keyboard
const user_input = prompt("How can i help you? ");
const a = parseFloat(prompt("Insert the first number? "));
const b = parseFloat(prompt("Insert the second number? "));
operation(user_input, a, b);

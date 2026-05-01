function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(5, 4, add));
console.log(calculator(5, 4, subtract));
console.log(calculator(5, 4, multiply));
console.log(calculator(5, 4, divide));

// Output: 9
// Output: 1
// Output: 20
// Output: 1.25

// Install Node.js to run this code in the terminal.
// To run this code, save it in a file named "index.js" and execute the command "node index.js" in the terminal.
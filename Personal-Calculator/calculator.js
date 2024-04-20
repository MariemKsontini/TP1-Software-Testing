
// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if(b === 0) throw new Error("Divide by zero error.");
    return a / b;
}

module.exports = { add, subtract, multiply, divide };

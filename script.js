const inputBox = document.getElementById("output");
const clearButton = document.getElementById("clear");
const buttons = document.getElementsByTagName("button");
const positiveNegative = document.getElementById("positiveNegative");
const percent = document.getElementById("percent");
const decimal = document.getElementById("changeToDecimal");
const addition = document.getElementById("plus");
const equals = document.getElementById("equals");
let firstNumber;
let operator;

clearButton.addEventListener("click", clearInput)
decimal.addEventListener("click", toDecimal);
positiveNegative.addEventListener("click", positiveToNegative);
percent.addEventListener("click", toPercentValue);
addition.addEventListener("click", plus);
equals.addEventListener("click", operate);

// Adds an event listener to each number button to display it's number value
for (let i = 0; i < buttons.length - 9; i++) {
    buttons[i].addEventListener('click', () => {
        inputBox.value += i;
    })
}

// Function to made numbers positive or negative
function positiveToNegative() {
    let zeroIndex = inputBox.value[0];
    let positive = "+";
    let negative = "-"
    if (zeroIndex === "+") {
        inputBox.value = negative + inputBox.value.slice(1);
    } else if (zeroIndex === "-") {
        inputBox.value = positive + inputBox.value.slice(1);
    } else {
        inputBox.value = positive + inputBox.value;
    }
}

// Function that adds a decimal point into the number being input
function toDecimal() {
    isDecimal = inputBox.value.includes(".");
    if (isDecimal === true) {
        return;
    } else if (isDecimal === false) {
        let decimalPoint = ".";
        inputBox.value = inputBox.value + decimalPoint;
    } else {
        alert("An error related to the decimal point button has occurred");
    }
}

// Changes numbers to percents in decimal form eg: 5 = .05 && 500 = 5
function toPercentValue() {
    if (inputBox.value.length === 0) {
        return;
    } else if (inputBox.value.length === 1) {
        inputBox.value = ".0" + inputBox.value;
    } else {
        numberArray = inputBox.value.split("");
        numberArray.splice(-2, 0, ".");
        inputBox.value = numberArray.join("")
    }
}

function clearInput() {
    inputBox.value = ""
}

function storeDisplayNumber() {
    firstNumber = inputBox.value;
    inputBox.value = "";
}

function plus() {
    operator = "+";
    return operator;
}

function add(x, y) {
    output = x + y;
    inputBox.value = output;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    x = parseFloat(firstNumber);
    y = parseFloat(inputBox.value);
    if (operator === "+") {
        return add(x, y);
    } else if (operator === "-") {
        return subtract(x, y);
    } else if (operator === "*") {
        return multiply(x, y);
    } else if (operator === "/") {
        return divide(x, y);
    } else {
        console.log("The operate function has failed.");
    }
}
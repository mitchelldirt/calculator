const inputBox = document.getElementById("output");
const clearButton = document.getElementById("clear");
const buttons = document.getElementsByTagName("button");
const positiveNegative = document.getElementById("positiveNegative");
const percent = document.getElementById("percent");
const decimal = document.getElementById("changeToDecimal");
const addition = document.getElementById("plus");
const equals = document.getElementById("equals");
const subtraction = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
let previousNumber = 0;
let currentNumber = 0;
let howManyOperations = 0;
let operator;

clearButton.addEventListener("click", clearInput)
decimal.addEventListener("click", toDecimal);
positiveNegative.addEventListener("click", positiveToNegative);
percent.addEventListener("click", toPercentValue);
addition.addEventListener("click", add);
equals.addEventListener("click", operate);
subtraction.addEventListener("click", subtract);
multiplication.addEventListener("click", multiply);
division.addEventListener("click", divide);


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
    inputBox.value = "";
    inputBox.placeholder = "";
    previousNumber = 0;
    howManyOperations = 0;
}

function storeDisplayNumber() {
    howManyOperations += 1;
}

function add(x, y) {
    storeDisplayNumber();
    if (howManyOperations === 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        if (y === NaN) {
            y = parseFloat(0);
        }
        currentNumber = parseFloat(x) + parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
    } else if (howManyOperations > 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        console.log(typeof (y));
        console.log(y);
        if (isNaN(y) === true) {
            y = parseFloat(0);
        }
        inputBox.value = previousNumber;
        currentNumber = parseFloat(x) + parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
        inputBox.placeholder = currentNumber;
    } else {
        return;
    }
}

function subtract(x, y) {
    storeDisplayNumber();
    if (howManyOperations === 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        if (y === NaN) {
            y = parseFloat(0);
        }
        currentNumber = parseFloat(x) - parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
    } else if (howManyOperations > 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        console.log(typeof (y));
        console.log(y);
        if (isNaN(y) === true) {
            y = parseFloat(0);
        }
        inputBox.value = previousNumber;
        currentNumber = parseFloat(x) - parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
        inputBox.placeholder = currentNumber;
    } else {
        return;
    }
}

function multiply(x, y) {
    storeDisplayNumber();
    if (howManyOperations === 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        if (y === NaN) {
            y = parseFloat(0);
        }
        currentNumber = parseFloat(x) * parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
    } else if (howManyOperations > 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        console.log(typeof (y));
        console.log(y);
        if (isNaN(y) === true) {
            y = parseFloat(0);
        }
        inputBox.value = previousNumber;
        currentNumber = parseFloat(x) * parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
        inputBox.placeholder = currentNumber;
    } else {
        return;
    }
}

function divide(x, y) {
    storeDisplayNumber();
    if (howManyOperations === 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        if (y === NaN) {
            y = parseFloat(0);
        }
        currentNumber = parseFloat(x) / parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
    } else if (howManyOperations > 1) {
        x = parseFloat(previousNumber);
        y = parseFloat(inputBox.value);
        console.log(typeof (y));
        console.log(y);
        if (isNaN(y) === true) {
            y = parseFloat(0);
        }
        inputBox.value = previousNumber;
        currentNumber = parseFloat(x) / parseFloat(y);
        previousNumber = currentNumber;
        inputBox.value = "";
        inputBox.placeholder = currentNumber;
    } else {
        return;
    }
}

/*TODO: Make the initial value of previousNumber Zero then every time you click an operation change the value of 
previousNumber to that number and add the current display value to it. */

function operate() {
    if (inputBox.value === "" || inputBox.value === "0") {
        inputBox.value = currentNumber;
    } else {
        add()
    }
}
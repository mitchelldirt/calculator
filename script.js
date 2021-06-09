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
let currentNumber = 0;
let operator = 0;
let displayedNumber = 0;

clearButton.addEventListener("click", clearInput)
decimal.addEventListener("click", toDecimal);
positiveNegative.addEventListener("click", positiveToNegative);
percent.addEventListener("click", toPercentValue);
equals.addEventListener("click", grabNumbers);

/*addition.addEventListener("click", add);
addition.addEventListener("click", () => {
    operator = 1;
})

subtraction.addEventListener("click", subtract);
subtraction.addEventListener("click", () => {
    operator = 2;
})

multiplication.addEventListener("click", multiply);
multiplication.addEventListener("click", () => {
    operator = 3;
}) */

division.addEventListener("click", grabNumbers);
division.addEventListener("click", () => {
    operator = 4;
})

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
    currentNumber = 0;
}

function emptyInputBox() {
    inputBox.value = "";
}

function grabNumbers() {
    if (currentNumber === 0) {
        currentNumber = inputBox.value
        emptyInputBox();
        return;
    } else {
        displayedNumber = inputBox.value;
        operate();
    }
}

function divide(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (y === 0) {
        return "You can't divide by zero >:(";
    } else {
        let result = x / y;
        inputBox.value = result;
    }
}

/*TODO: Make the initial value of previousNumber Zero then every time you click an operation change the value of 
previousNumber to that number and add the current display value to it. */

function operate() {
    if (currentNumber === "" || currentNumber === "0") {
        inputBox.value = currentNumber;
    } else {
        switch (operator) {
            case 1:
                add()
                break;
            case 2:
                subtract();
                break;
            case 3:
                multiply();
                break;
            case 4:
                divide(currentNumber, displayedNumber);
                break;
            default:
                inputBox.placeholder = "An Error Has Ocurred :("
        }
    }
}
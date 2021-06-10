/* TODO: 
1. Round out decimal points to the hundredth decimal place. DONE
2. Test out a bunch of different equations using decimal points and the percent button to make sure everything is working correctly. DONE
3. Add in a backspace button. DONE
4. Add in keyboard support and disable the typing in the text box.
5. Make sure numbers can't extend past input box
6. Organize and comment all of your code.
7. CSS Time baby.
*/
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
const deleteButton = document.getElementById("delete");
let currentNumber = 0;
let operator = 0;
let displayedNumber = 0;
let midOperation = false;

deleteButton.addEventListener("click", backSpace);
clearButton.addEventListener("click", clearInput);
decimal.addEventListener("click", toDecimal);
positiveNegative.addEventListener("click", positiveToNegative);
percent.addEventListener("click", toPercentValue);
equals.addEventListener("click", grabNumbers);
equals.addEventListener("click", () => {
    midOperation = false;
});

addition.addEventListener("click", grabNumbers);
addition.addEventListener("click", () => {
    operator = 1;
})

subtraction.addEventListener("click", grabNumbers);
subtraction.addEventListener("click", () => {
    operator = 2;
})

multiplication.addEventListener("click", grabNumbers);
multiplication.addEventListener("click", () => {
    operator = 3;
})

division.addEventListener("click", grabNumbers);
division.addEventListener("click", () => {
    operator = 4;
})

// Adds an event listener to each number button to display it's number value
for (let i = 0; i < buttons.length - 10; i++) {
    buttons[i].addEventListener('click', () => {
        inputBox.value += i;
    })
}

// Function to make numbers positive or negative
function positiveToNegative() {
    let zeroIndex = inputBox.value[0];
    let negative = "-";
    if (zeroIndex !== "-") {
        inputBox.value = negative + inputBox.value;
    } else {
        inputBox.value = inputBox.value.slice(1);
    }
}

// This removes the last character in the input box value field.
function backSpace() {
    oldInputBox = inputBox.value;
    newValue = oldInputBox.substring(0, oldInputBox.length - 1);
    inputBox.value = newValue;
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
    midOperation = false;
}

function emptyInputBox() {
    inputBox.value = "";
}

function grabNumbers() {
    if (inputBox.value === "" && inputBox.placeholder === "") {
        return;
    } else if (midOperation === false && inputBox.placeholder === "") {
        currentNumber = inputBox.value
        emptyInputBox();
        midOperation = true;
        return;
    } else if (midOperation === false && inputBox.placeholder !== "") {
        currentNumber = inputBox.placeholder;
        midOperation = true;
        return;
    } else {
        displayedNumber = inputBox.value;
        operate();

    }
}

function add(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x + y;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
}


function subtract(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x - y;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
}


function multiply(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x * y;
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
}


function divide(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (y === 0) {
        clearInput();
        inputBox.placeholder = "You can't divide by zero >:(";
        setTimeout(function () {
            inputBox.placeholder = "";
        }, 3000);
        grabNumbers();
    } else {
        let result = x / y;
        result = Math.round((result + Number.EPSILON) * 100) / 100;
        currentNumber = result;
        inputBox.value = "";
        inputBox.placeholder = result;
    }
}

function operate() {
    if (currentNumber === "" || currentNumber === "0") {
        inputBox.value = currentNumber;
    } else {
        switch (operator) {
            case 1:
                add(currentNumber, displayedNumber)
                break;
            case 2:
                subtract(currentNumber, displayedNumber);
                break;
            case 3:
                multiply(currentNumber, displayedNumber);
                break;
            case 4:
                divide(currentNumber, displayedNumber);
                break;
            default:
                inputBox.placeholder = "An Error Has Ocurred :("
        }
    }
}
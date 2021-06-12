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

// equals sets midOperation to false so that a new number can be assigned to `displayedNumber`.
equals.addEventListener("click", () => {
    midOperation = false;
});

/* The operator is set before `grabNumbers()` is called. If this wasn't the case `operator` would equal 0 
and the first time you click the button on page load it wouldn't work. */
addition.addEventListener("click", () => {
    operator = 1;
});
addition.addEventListener("click", grabNumbers);


subtraction.addEventListener("click", () => {
    operator = 2;
});
subtraction.addEventListener("click", grabNumbers);


multiplication.addEventListener("click", () => {
    operator = 3;
});
multiplication.addEventListener("click", grabNumbers);

division.addEventListener("click", () => {
    operator = 4;
});
division.addEventListener("click", grabNumbers);


// Adds an event listener to each number button to display it's number value.
for (let i = 0; i < buttons.length - 10; i++) {
    buttons[i].addEventListener("click", () => {
        if (inputBox.value.length === 10) {
            inputBox.value += "";
        } else {
            inputBox.value += i;
        }
    })
};

// Adds a '-' if there is none. If there is a '-' the functions removes it.
function positiveToNegative() {
    let zeroIndex = inputBox.value[0];
    let negative = "-";
    if (zeroIndex !== "-") {
        inputBox.value = negative + inputBox.value;
    } else {
        inputBox.value = inputBox.value.slice(1);
    }
};

// Removes the last character of `inputBox.value`.
function backSpace() {
    oldInputBox = inputBox.value;
    newValue = oldInputBox.substring(0, oldInputBox.length - 1);
    inputBox.value = newValue;
};

// Adds a decimal point to the last index position of `inputBox.value`.
function toDecimal() {
    isDecimal = inputBox.value.includes(".");
    if (isDecimal === true) {
        return;
    } else if (isDecimal === false) {
        initialValue = inputBox.value;
        inputBox.value = "";
        inputBox.value += initialValue;
        inputBox.value += ".";
    } else {
        alert("An error related to the decimal point button has occurred");
    }
};

// Changes numbers to percents in decimal form eg: 5 = .05 && 500 = 5
function toPercentValue(x, y) {
    if (inputBox.value === "") {
        x = currentNumber;
        y = 100;
    } else {
        x = parseFloat(inputBox.value);
        y = 100;
    }
    result = x / y;
    result = Math.round((result + Number.EPSILON) * 100000) / 100000;
    inputBox.value = result;
};

function clearInput() {
    inputBox.value = "";
    inputBox.placeholder = "";
    currentNumber = 0;
    midOperation = false;
};

// unlike the above `clearInput()` this function simply gets rid of any characters in `inputBox`.
function emptyInputBox() {
    inputBox.value = "";
};

// Sets currentNumber and displayedNumber to be used in `operate()`.
function grabNumbers() {
    if (inputBox.value === "" && inputBox.placeholder === "" && operator === 0) {
        return; // When nothing has been entered.
    } else if (midOperation === false && operator === 0) {
        return; // When hitting equal while a number appears without hitting an operator nothing happens.
    } else if (midOperation === false && inputBox.placeholder === "") {
        currentNumber = inputBox.value;
        emptyInputBox();
        midOperation = true;
        return; // Sets the displayed number to be the current number. Next operation or equal sign will `operate()`.
    } else if (midOperation === false && inputBox.placeholder !== "") {
        currentNumber = inputBox.placeholder;
        midOperation = true;
        return; /* Sets the returned value from hitting equal to `currentNumber`. 
        Next operation or equal sign will `operate()`. */
    } else if (midOperation === true && inputBox.value === "") {
        displayedNumber = currentNumber;
        operate(); // Will `operate()` if user doesn't provide second number. eg: number -> operator -> equals button.
    } else {
        displayedNumber = inputBox.value;
        operate();
    }
};

// All of the operator functions below will round to the 5th decimal place. eg: .00005
// Results will convert to exponent after the length exceeds 10 digits.
function add(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x + y;
    result = Math.round((result + Number.EPSILON) * 100000) / 100000;
    let resultLength = result.toString().length;
    if (resultLength <= 10) {
        result = result;
    } else {
        result = result.toExponential(5);
    }
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
};


function subtract(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x - y;
    result = Math.round((result + Number.EPSILON) * 100000) / 100000;
    let resultLength = result.toString().length;
    if (resultLength <= 10) {
        result = result;
    } else {
        result = result.toExponential(5);
    }
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
};


function multiply(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x * y;
    result = Math.round((result + Number.EPSILON) * 100000) / 100000;
    let resultLength = result.toString().length;
    if (resultLength <= 10) {
        result = result;
    } else {
        result = result.toExponential(5);
    }
    currentNumber = result;
    inputBox.value = "";
    inputBox.placeholder = result;
};


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
        result = Math.round((result + Number.EPSILON) * 100000) / 100000;
        let resultLength = result.toString().length;
        if (resultLength <= 10) {
            result = result;
        } else {
            result = result.toExponential(5);
        }
        currentNumber = result;
        inputBox.value = "";
        inputBox.placeholder = result;
    }
};

// Decides which operator function to run based on the `operator` variable.
function operate() {
    if (currentNumber === "" || currentNumber === "0" || displayedNumber === "") {
        inputBox.placeholder = currentNumber;
    } else {
        switch (operator) {
            case 0:
                return; // If `operator` === 0 and user hits `equals` will do nothing. 
            case 1:
                add(currentNumber, displayedNumber);
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
                inputBox.placeholder = "An Error Has Ocurred :(";
        }
    }
};

// Sets all of the keyboard inputs.
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    switch (event.code) {
        case "Digit0":
            const zero = document.getElementById("numberZero");
            zero.click();
            break;
        case "Digit1":
            const one = document.getElementById("one");
            one.click();
            break;
        case "Digit2":
            const two = document.getElementById("two");
            two.click();
            break;
        case "Digit3":
            const three = document.getElementById("three");
            three.click();
            break;
        case "Digit4":
            const four = document.getElementById("four");
            four.click();
            break;
        case "Digit5":
            if (event.key === "%") {
                toPercentValue();
            } else {
                const five = document.getElementById("five");
                five.click();
            }
            break;
        case "Digit6":
            const six = document.getElementById("six");
            six.click();
            break;
        case "Digit7":
            const seven = document.getElementById("seven");
            seven.click();
            break;
        case "Digit8":
            if (event.key === "*") {
                multiplication.click();
            } else {
                const eight = document.getElementById("eight");
                eight.click();
            }
            break;
        case "Digit9":
            const nine = document.getElementById("nine");
            nine.click();
            break;
        case "Escape":
            clearInput();
            break;
        case "ArrowUp":
        case "ArrowDown":
            positiveToNegative();
            break;
        case "Period":
            toDecimal();
            break;
        case "Backspace":
        case "Delete":
            backSpace();
            break;
        case "Equal":
        case "Enter":
            if (event.key === "+") {
                addition.click();
            } else {
                equals.click();
            }
            break;
        case "KeyX":
            multiplication.click();
            break;
        case "Minus":
            subtraction.click();
            break;
        case "Slash":
            division.click();
            break;
    }
    // Consume the event so it doesn't get handled twice
    event.preventDefault();
}, true);
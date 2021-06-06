const inputBox = document.getElementById("output");
const clearButton = document.getElementById("clear");
const buttons = document.getElementsByTagName("button");

// Adds an event listener to each number button to display it's number value
for (let i = 0; i < buttons.length - 9; i++) {
    buttons[i].addEventListener('click', () => {
        inputBox.value += i;
    })
}

clearButton.addEventListener("click", clearInput)

function clearInput() {
    const inputBox = document.getElementById("output");
    inputBox.value = ""
}

function add(x, y) {
    return x + y;
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
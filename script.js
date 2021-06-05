const inputBox = document.getElementById('output');
const clearButton = document.getElementById('clear');
const buttons = document.getElementsByTagName('button');

function numberButtons() {
    const zero = document.getElementById('numberZero')
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')
    const seven = document.getElementById('seven')
    const eight = document.getElementById('eight')
    const nine = document.getElementById('nine')

}
clearButton.addEventListener('click', clearInput)

function clearInput() {
    const inputBox = document.getElementById('output');
    inputBox.value = ''
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
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    } else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    } else {
        console.log('The operate function has failed.');
    }
}
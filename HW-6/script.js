let operation;
let fullNameOfOperation;
let result;
let firstNumber;
let secondNumber;
let number;
let mathematicalExpression;
let history = [];

function checkingOperator() {
    do {
        operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow, history)!');
    } while (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*'
        && operation !== 'cos' && operation !== 'sin' && operation !== 'pow' && operation !== 'history');
}
function validationInput(a) {
    return isValidNuumber = a;
}

function addition() {
    return firstNumber + secondNumber;
}
function subtraction() {
    return firstNumber - secondNumber;
}
function multiplication() {
    return firstNumber * secondNumber;
}
function division() {
    return firstNumber / secondNumber;
}
function power() {
    return Math.pow(firstNumber, secondNumber);
}
function sinus() {
    return Math.sin(number);
}
function cosinus() {
    return Math.cos(number);
}

do {
    checkingOperator();
    switch (operation) {
        case 'history': {
            alert(history);
            oneMoreOperation = confirm('Do you want continue to do calculation?');
            break;
        }
        case '+': case '-': case '*': case '/': {
            do {
                firstNumber = +prompt('Enter, please the first number');
                validationInput(firstNumber);
            } while (isNaN(isValidNuumber));
            do {
                secondNumber = +prompt('Enter, please the second number');
                validationInput(secondNumber);
            } while (isNaN(isValidNuumber));
            switch (operation) {
                case '+': {
                    fullNameOfOperation = 'Sum: ';
                    result = addition();
                    break;
                }
                case '-': {
                    fullNameOfOperation = 'Diff: ';
                    result = subtraction();
                    break;
                }
                case '*': {
                    fullNameOfOperation = 'Mult: ';
                    result = multiplication();
                    break;
                }
                case '/': {
                    fullNameOfOperation = 'Div: ';
                    result = division();
                    break;
                }
            }
            console.log(mathematicalExpression = `${fullNameOfOperation + firstNumber} ${operation} ${secondNumber} = ${result}`);
            oneMoreOperation = confirm('Do you want to do one more calculation or look history?');
            break;
        }
        case 'pow': {
            do {
                firstNumber = +prompt('Enter, please the base number');
                validationInput(firstNumber);
            } while (isNaN(isValidNuumber));
            do {
                secondNumber = +prompt('Enter, please the exponent number');
                validationInput(secondNumber);
            } while (isNaN(isValidNuumber));
            result = power();
            console.log(mathematicalExpression = 'Power(' + firstNumber + ',' + secondNumber +') =' + result);
            oneMoreOperation = confirm('Do you want to do one more calculation or look history?');
            break;
        }
        case 'sin': case 'cos': {
            do {
                number = +prompt('Enter, please the number');
                validationInput(number);
            } while (isNaN(isValidNuumber));
            ;
            switch (operation) {
                case 'sin': {
                    fullNameOfOperation = 'sin(';
                    result = sinus();
                    break;
                }
                case 'cos': {
                    fullNameOfOperation = 'cos(';
                    result = cosinus();
                    break;
                }
            }
            console.log(mathematicalExpression = `${fullNameOfOperation + result})`);
            oneMoreOperation = confirm('Do you want to do one more calculation or look history?');
            break;
        }
        default: {
            alert ("This is an invalid operator!");
        }
    }
    history[history.length] = mathematicalExpression;
} while (oneMoreOperation === true);

alert('Thank you!\nHave a good mood!');
console.log(history);
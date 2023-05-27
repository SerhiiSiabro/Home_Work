let operation;
let fullNameOfOperation;
let result;
let firstNumber;
let secondNumber;
let number;
let mathematicalExpression;
let history = [];

function checkingOperator() {
    return operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*'
    && operation !== 'cos' && operation !== 'sin' && operation !== 'pow' && operation !== 'history';
}
function validationInput(a) {
    return isNaN(a);
}

function addition() {
    return +firstNumber + +secondNumber;
}
function subtraction() {
    return +firstNumber - +secondNumber;
}
function multiplication() {
    return +firstNumber * +secondNumber;
}
function division() {
    return +firstNumber / +secondNumber;
}
function power() {
    return Math.pow(+firstNumber, +secondNumber);
}
function sinus() {
    return Math.sin(+number);
}
function cosinus() {
    return Math.cos(+number);
}

do {
    do {
        operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow, history)!');
    } while (checkingOperator());
    switch (operation) {
        case 'history': {
            alert(history);
            oneMoreOperation = confirm('Do you want continue to do calculation?');
            break;
        }
        case '+': case '-': case '*': case '/': {
            do {
                firstNumber = prompt('Enter, please the first number');
            } while (validationInput(firstNumber));
            do {
                secondNumber = prompt('Enter, please the second number');
            } while (validationInput(secondNumber));
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
                firstNumber = prompt('Enter, please the base number');
            } while (validationInput(firstNumber));
            do {
                secondNumber = prompt('Enter, please the exponent number');
            } while (validationInput(secondNumber));
            result = power();
            console.log(mathematicalExpression = 'Power(' + firstNumber + ',' + secondNumber +') =' + result);
            oneMoreOperation = confirm('Do you want to do one more calculation or look history?');
            break;
        }
        case 'sin': case 'cos': {
            do {
                number = prompt('Enter, please the number');
            } while (validationInput(number));
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
let operation;
let fullNameOfOperation;
let result;
let firstNumber;
let secondNumber;
let number;
let mathematicalExpression;
let history = [];

do {
    do {
        operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow, history)!');
    } while (operation !== null && operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*'
        && operation !== 'cos' && operation !== 'sin' && operation !== 'pow' && operation !== 'history');

    switch (operation) {
        case null: {
            break;
        }
        case 'history': {
            let i = 0;
            while (i < history.length) {
                console.log(`Operation №${i + 1}: ` + history[i]);
                i++;
            }
            alert('HISTORY IN CONSOLE!');
            oneMoreOperation = confirm('Do you want continue to do calculation?');
            break;
        }
        case '+': case '-': case '*': case '/': {
            do {
                firstNumber = prompt('Enter, please the first number');
            } while (firstNumber === '' || isNaN(Number(firstNumber)) || firstNumber === null);
            do {
                secondNumber = prompt('Enter, please the second number');
            } while (secondNumber === '' || isNaN(Number(secondNumber)) || secondNumber === null);
            switch (operation) {
                case '+': {
                    fullNameOfOperation = 'Sum: ';
                    result = firstNumber + secondNumber;
                    break;
                }
                case '-': {
                    fullNameOfOperation = 'Diff: ';
                    result = firstNumber - secondNumber;
                    break;
                }
                case '*': {
                    fullNameOfOperation = 'Mult: ';
                    result = firstNumber * secondNumber;
                    break;
                }
                case '/': {
                    fullNameOfOperation = 'Div: ';
                    result = firstNumber / secondNumber;
                    break;
                }
            }
            console.log(mathematicalExpression = `${fullNameOfOperation + firstNumber} ${operation} ${secondNumber} = ${result}`);
            oneMoreOperation = confirm('Do you want to do one more calculation or look histiry?');
            break;
        }
        case 'pow': {
            do {
                firstNumber = prompt('Enter, please the base number');
            } while (firstNumber === '' || isNaN(Number(firstNumber)) || firstNumber === null);
            do {
                secondNumber = prompt('Enter, please the exponent number');
            } while (secondNumber === '' || isNaN(Number(secondNumber)) || secondNumber === null);
            result = Math.pow(firstNumber, secondNumber);
            console.log(mathematicalExpression = 'Power(' + firstNumber + ',' + secondNumber +') =' + result);
            oneMoreOperation = confirm('Do you want to do one more calculation or look histiry?');
            break;
        }
        case 'sin': case 'cos': {
            do {
                number = prompt('Enter, please the number');
            } while (number === '' || isNaN(Number(number)) || number === null);
            ;
            switch (operation) {
                case 'sin': {
                    fullNameOfOperation = 'sin(';
                    result = Math.sin(number);
                    break;
                }
                case 'cos': {
                    fullNameOfOperation = 'cos(';
                    result = Math.cos(number);
                    break;
                }
            }
            console.log(mathematicalExpression = `${fullNameOfOperation + result})`);
            oneMoreOperation = confirm('Do you want to do one more calculation or look histiry?');
            break;
        }
        default: {
            alert ("This is an invalid operator!");
        }
    }
    if (operation !== 'history') {
        history[history.length] = mathematicalExpression;
    }
} while (operation !== null && oneMoreOperation === true);

alert('Good!\nCalculator is cloused!');
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
    } while (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*'
        && operation !== 'cos' && operation !== 'sin' && operation !== 'pow' && operation !== 'history');

    switch (operation) {
        case 'history': {
            alert(history);
            oneMoreOperation = confirm('Do you want continue to do calculation?');
            break;
        }
        case '+': case '-': case '*': case '/': {
            do {
                firstNumber = +prompt('Enter, please the first number');
                validNuumberFirstNamber = firstNumber;
            } while (isNaN(validNuumberFirstNamber));
            do {
                secondNumber = +prompt('Enter, please the second number');
                validNuumberSecondNamber = +secondNumber;
            } while (isNaN(validNuumberSecondNamber));
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
                firstNumber = +prompt('Enter, please the base number');
                validNuumberFirstNamber = firstNumber;
            } while (isNaN(validNuumberFirstNamber));
            do {
                secondNumber = +prompt('Enter, please the exponent number');
                validNuumberSecondNamber = +secondNumber;
            } while (isNaN(validNuumberSecondNamber));
            result = Math.pow(firstNumber, secondNumber);
            console.log(mathematicalExpression = 'Power(' + firstNumber + ',' + secondNumber +') =' + result);
            oneMoreOperation = confirm('Do you want to do one more calculation or look histiry?');
            break;
        }
        case 'sin': case 'cos': {
            do {
                number = +prompt('Enter, please the number');
                validNuumberFirstNamber = number;
            } while (isNaN(validNuumberFirstNamber));
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
    history[history.length] = mathematicalExpression;
} while (oneMoreOperation === true);

alert('Thank you!\nHave a good mood!');
console.log(history);
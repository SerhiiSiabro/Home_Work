const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!')
let fullNameOfOperation;
let result;

switch (operation) {
    case '+': case '-': case '*': case '/': {
        const firstNumber =  Number(prompt('Enter, please the first number'));
        const secondNumber = Number(prompt('Enter, please the second number'));
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
        alert (`${fullNameOfOperation + firstNumber} ${operation} ${secondNumber} = ${result}`);
        break;
    }
    case 'pow': {
        firstNumber = Number(prompt('Enter, please the base number'));
        secondNumber = Number(prompt('Enter, please the exponent number'));
        result = Math.pow(firstNumber, secondNumber);
        alert ('Power(' + firstNumber + ',' + secondNumber +') =' + result);
        break;
    }
    case 'sin': case 'cos': {
        const number = Number(prompt('Enter, please the number'));
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
        alert (`${fullNameOfOperation + result})`);
        break;
    }
    default: {
        alert ("This is an invalid operator!");
    }
}
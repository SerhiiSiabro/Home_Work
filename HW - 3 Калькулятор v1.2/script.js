const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!');
let result;
let fullNameOfOperation;

if (operation === '+' || operation === '-' || operation === '/' || operation === '*' || operation === 'pow') {
    const firstNumber = Number(prompt('Enter, please the first number'));
    const secondNumber = Number(prompt('Enter, please the second number'));
    if (operation === '+') {
        fullNameOfOperation = 'Sum: ';
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        fullNameOfOperation = 'Diff: ';
        result = firstNumber - secondNumber;
    } else if (operation === '/') {
        fullNameOfOperation = 'Div: ';
        result = firstNumber / secondNumber;
    } else if (operation === '*') {
        fullNameOfOperation = 'Mult: ';
        result = firstNumber * secondNumber;
    } else if (operation === 'pow') {
        fullNameOfOperation = 'Pow: ';
        result = Math.pow(firstNumber, secondNumber);
    }
    alert (`${fullNameOfOperation + firstNumber} ${operation} ${secondNumber} = ${result}`);
} else if (operation === 'cos' || operation === 'sin') {
    const number = Number(prompt('Enter, please the number'));
    if (operation === 'cos') {
        fullNameOfOperation = 'cos(';
        result = Math.cos(number);
    } else if (operation === 'sin') {
        fullNameOfOperation = 'sin(';
        result = Math.sin(number);
    }
    alert (`${fullNameOfOperation + number}) = ${result}`);
} else {
        alert ("This is an invalid operator!");
}
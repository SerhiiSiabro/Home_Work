const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!');

if (operation === '+' || '-' || '/' || '*' || 'pow') {
    const firstNumber = Number(prompt('Enter, please the first number'));
    const secondNumber = Number(prompt('Enter, please the second number'));
    if (operation === '+') {
        const result = firstNumber + secondNumber;
        let fullNameOfOperation = 'Sum: ';
    } else if (operation === '-') {
        const result = firstNumber - secondNumber;
    } else if (operation === '/') {
        const result = firstNumber / secondNumber;
    } else if (operation === '*') {
        const result = firstNumber * secondNumber;
    } else if (operation === 'pow') {
        const result = Math.pow(firstNumber, secondNumber);
    }
} else if (operation === 'cos' || 'sin') {
    const number = Number(prompt('Enter, please the number'));
    if (operation === 'cos') {
        const cosNumber = Math.cos(number);
    } else if (operation === 'sin') {
        const sinNumber = Math.sin(number);
    }
} else {
        alert ("This is an invalid operator!");
}
// alert ();

// const firstNumber = Number(prompt('Enter, please the first number'));
// const secondNumber = Number(prompt('Enter, please the second number'));

// if (operation === '+') {
//     firstNumber;
//     secondNumber;
//     const resultSum = firstNumber + secondNumber;
//     alert ('Sum: ' + firstNumber + ' + ' + secondNumber + ' = ' + resultSum);
// } else if (operation === '-') {
//     firstNumber;
//     secondNumber;
//     const resultDiff = firstNumber - secondNumber;
//     alert ('Diff: ' + firstNumber + ' - ' + secondNumber + ' = ' + resultDiff);
// } else if (operation === '*') {
//     firstNumber;
//     secondNumber;
//     const resultMult = firstNumber * secondNumber;
//     alert ('Mult: ' + firstNumber + ' * ' + secondNumber + ' = ' + resultMult);
// } else if (operation === '/') {
//     firstNumber;
//     secondNumber;
//     const resultDiv = firstNumber / secondNumber;
//     alert ('Div: ' + firstNumber + ' / ' + secondNumber + ' = ' + resultDiv);
// } else if (operation === 'cos') {
//     const number = Number(prompt('Enter, please the number'));
//     const cosNumber = Math.cos(number);
//     alert ('Cos(' + number + ') =' + cosNumber);
// } else if (operation === 'sin') {
//     const number = Number(prompt('Enter, please the number'));
//     const sinNumber = Math.sin(number);
//     alert ('Sin(' + number + ') =' + sinNumber);
// } else if (operation === 'pow') {
//     const firstNumber = Number(prompt('Enter, please the base number'));
//     const secondNumber = Number(prompt('Enter, please the exponent number'));
//     const resultPow = Math.pow(firstNumber, secondNumber);
//     alert ('Power(' + firstNumber + ',' + secondNumber +') =' + resultPow);
// } else {
//     alert ("This is an invalid operator!");
// }
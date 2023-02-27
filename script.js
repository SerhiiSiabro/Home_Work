const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!')

// if (operation != '+' ||  '-' || '*' || '/' || 'cos' || 'sin' || 'pow') {
//     alert ('Operator is invalid!')
// }

if (operation == '+') {
    let firstNumber = Number(prompt('Enter, please the first number'));
    let secondNumber = Number(prompt('Enter, please the second number'));
    const resultSum = firstNumber + secondNumber;
    alert ('Sum: ' + firstNumber + ' + ' + secondNumber + ' = ' + resultSum);
} else if (operation == '-') {
    let firstNumber = Number(prompt('Enter, please the first number'));
    let secondNumber = Number(prompt('Enter, please the second number'));
    const resultDiff = firstNumber - secondNumber;
    alert ('Diff: ' + firstNumber + ' - ' + secondNumber + ' = ' + resultDiff);
} else if (operation == '*') {
    let firstNumber = Number(prompt('Enter, please the first number'));
    let secondNumber = Number(prompt('Enter, please the second number'));
    const resultMult = firstNumber * secondNumber;
    alert ('Mult: ' + firstNumber + ' * ' + secondNumber + ' = ' + resultMult);
} else if (operation == '/') {
    let firstNumber = Number(prompt('Enter, please the first number'));
    let secondNumber = Number(prompt('Enter, please the second number'));
    const resultDiv = firstNumber / secondNumber;
    alert ('Div: ' + firstNumber + ' / ' + secondNumber + ' = ' + resultDiv);
} else if (operation == 'cos') {
    let number = Number(prompt('Enter, please the number'));
    const cosNumber = Math.cos(number);
    alert ('Cos(' + number + ') =' + cosNumber);
} else if (operation == 'sin') {
    let number = Number(prompt('Enter, please the number'));
    const sinNumber = Math.sin(number);
    alert ('Sin(' + number + ') =' + sinNumber);
} else if (operation == 'pow') {
    let firstNumber = Number(prompt('Enter, please the base number'));
    let secondNumber = Number(prompt('Enter, please the exponent number'));
    const resultPow = Math.pow(firstNumber, secondNumber);
    alert ('Power(' + firstNumber + ',' + secondNumber +') =' + resultPow);
} else {
    alert ("This is an invalid operator!")
}
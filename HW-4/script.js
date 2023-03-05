const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!')

switch (operation) {
    case '+': {
        const firstNumber = Number(prompt('Enter, please the first number'));
        const secondNumber = Number(prompt('Enter, please the second number'));
        const resultSum = firstNumber + secondNumber;
        alert ('Sum: ' + firstNumber + ' + ' + secondNumber + ' = ' + resultSum);
        break; 
    }
    case '-': {
        const firstNumber = Number(prompt('Enter, please the first number'));
        const secondNumber = Number(prompt('Enter, please the second number'));
        const resultDiff = firstNumber - secondNumber;
        alert ('Diff: ' + firstNumber + ' - ' + secondNumber + ' = ' + resultDiff);
        break; 
    }
    case '*': {
        const firstNumber = Number(prompt('Enter, please the first number'));
        const secondNumber = Number(prompt('Enter, please the second number'));
        const resultMult = firstNumber * secondNumber;
        alert ('Mult: ' + firstNumber + ' * ' + secondNumber + ' = ' + resultMult);
        break; 
    }
    case '/': {
        const firstNumber = Number(prompt('Enter, please the first number'));
        const secondNumber = Number(prompt('Enter, please the second number'));
        const resultDiv = firstNumber / secondNumber;
        alert ('Div: ' + firstNumber + ' / ' + secondNumber + ' = ' + resultDiv);
        break; 
    }
    case 'cos': {
        const number = Number(prompt('Enter, please the number'));
        const cosNumber = Math.cos(number);
        alert ('Cos(' + number + ') =' + cosNumber);
        break; 
    }
    case 'sin': {
        const number = Number(prompt('Enter, please the number'));
        const sinNumber = Math.sin(number);
        alert ('Sin(' + number + ') =' + sinNumber);
        break; 
    }
    case 'pow': {
        const firstNumber = Number(prompt('Enter, please the base number'));
        const secondNumber = Number(prompt('Enter, please the exponent number'));
        const resultPow = Math.pow(firstNumber, secondNumber);
        alert ('Power(' + firstNumber + ',' + secondNumber +') =' + resultPow);
        break; 
    }
    default:
        alert ("This is an invalid operator!");
    
}
const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!')

const firstNumber =  Number(prompt('Enter, please the first number'));
const secondNumber = Number(prompt('Enter, please the second number'));

switch (operation) {
    case '+': {
        firstNumber;
        secondNumber;
        const resultSum = firstNumber + secondNumber;
        alert ('Sum: ' + firstNumber + ' + ' + secondNumber + ' = ' + resultSum);
        break; 
    }
    case '-': {
        firstNumber;
        secondNumber;
        const resultDiff = firstNumber - secondNumber;
        alert ('Diff: ' + firstNumber + ' - ' + secondNumber + ' = ' + resultDiff);
        break; 
    }
    case '*': {
        firstNumber;
        secondNumber;
        const resultMult = firstNumber * secondNumber;
        alert ('Mult: ' + firstNumber + ' * ' + secondNumber + ' = ' + resultMult);
        break; 
    }
    case '/': {
        firstNumber;
        secondNumber;
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
        const firstNumberPow = Number(prompt('Enter, please the base number'));
        const secondNumberPow = Number(prompt('Enter, please the exponent number'));
        const resultPow = Math.pow(firstNumberPow, secondNumberPow);
        alert ('Power(' + firstNumber + ',' + secondNumber +') =' + resultPow);
        break; 
    }
    default:
        alert ("This is an invalid operator!");
    
}
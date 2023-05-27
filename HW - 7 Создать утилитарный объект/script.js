const answerSecond = [];

const util = {
    revers: function (a) {
        for (let index = (a.length - 1); index >= 0; index--) {
            console.log(a[index])
        }
    },
    verifyNumbers: function (a) {
        for (let index = 0; index < a.length; index++) {
            if (Number(a[index]) && typeof(a[index]) !== 'boolean' && typeof(a[index]) !== 'string' || (a[index] === 0)) {
                answerSecond[answerSecond.length] = (a[index]);
            }
        }
    },
    getMin: function (a) {
        let arrayElement = (a[0]);
        for (let index = 1; index < a.length; index++) {
            if (arrayElement > (a[index])) {
                arrayElement = (a[index]);
            } else if (arrayElement < (a[index])) { 
                continue;
            }
        }
        return arrayElement;
    },
    getAverage: function (a) {
        let sum = 0;
        for (let index = 0; index < a.length; index++) {
            sum += (a[index]);  
        }
        return sum / a.length;
    },
    getMaxString: function (a) {
        let longestString = '';
        for (let index = 0; index < a.length; index++) {
            if (a[index].length > longestString.length) {
                longestString = a[index];
            }
        }
        return longestString;
    }
}

// FERST ANSWER
util.revers('qwerty');
util.revers([1, 2, 3]);

// SECOND ANSWER
let secondQueation = [10, 'qwerty', 0, -20, true, false, {a: 10, b: 20}, null, '100500', 5];
util.verifyNumbers(secondQueation);
console.log(answerSecond);

// THERD ANSWER
let therdQueation = {
    first: [1, 2, 3, 0, 19, 100],
    second: [9, 10, 0, -100, 0, 1]
}
console.log(util.getMin(therdQueation.first));
console.log(util.getMin(therdQueation.second));

// FOURTH ANSWER
let fourthQueation = [1, 2, 3, 0, 19, 100];
let answer = util.getAverage(fourthQueation);
console.log(answer);

// FIFTH ANSWER
let fifthQueastion = ['a', 'Hello', 'Hello World', 'Bye'];
console.log(util.getMaxString(fifthQueastion));
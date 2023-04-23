const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
];

function createStack() {
    const stack = [];

    return {
      push: function(item) {
        stack.push(item);
      },
      pop: function() {
        return stack.pop();
      },
      getStack: function() {
        return stack;
      }
    };
}

const stack = createStack();
stack.push(1);
stack.push(10);
console.log(stack.getStack());
stack.pop();
console.log(stack.getStack());

//

function isBetween() {
    let min;
    let max;

    do {
        min = prompt('Введіть мінімальне значення:');
    } while (min !== null && isNaN(min))
    do {
        max = prompt('Введіть максимальне значення:');
    } while (max !== null && isNaN(max))

    if (min >= max) {
        console.log('Помилка. Мінімальне значення повинно бути МЕНЬШЕ максимаьного');
    }
  
    return function(value) {
      if (isNaN(value)) {
        return false;
      }
      return value >= min && value <= max;
    };
}

const filteredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween());
console.log(filteredArray);

//

function calculate(operation) {
    return function(a) {
      return function(b) {
        while (isNaN(a) || isNaN(b)) {
          console.log('Помилка. Спробуйте ще раз.');
          a = parseFloat(prompt('Введіть перше значення:'));
          b = parseFloat(prompt('Введите друге значення:'));
        }
        
        let result;
        while (operation !== null && operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*'
            && operation !== 'pow') {
            operation = prompt('Помилка. Оберіть операцію: "+", "-", "*", "/", "pow".');
        } ;

        switch (operation) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            if (b === 0) {
              console.log('Помилка. Не можна ділити на нуль.');
              return;
            }
            result = a / b;
            break;
          case 'pow':
            result = Math.pow(a, b);
            break;
          default:
            console.log('Помилка. Оберіть наступне значення: "+", "-", "*", "/", "pow".');
            return;
        };
        console.log(`Результат: ${a} ${operation} ${b} = ${result}`);
        }
    }
}

const operation = prompt('Оберіть операцію: "+", "-", "*", "/", "pow".');
const a = parseFloat(prompt('Введіть перше значення:'));
const b = parseFloat(prompt('Введите друге значення:'));

calculate(operation)(a)(b);

//

function sortByField(fieldName, sortType) {
    if (sortType !== 'asc' && sortType !== 'desc') {
      console.log('Помилка. Тип сортування може бути тільки "asc" або "desc".');
      return;
    }
  
    return function(a, b) {
      let compare = 0;
  
      if (a[fieldName] > b[fieldName]) {
        compare = 1;
      } else if (a[fieldName] < b[fieldName]) {
        compare = -1;
      }
  
      if (sortType === 'desc') {
        compare = compare * -1;
      }
  
      return compare;
    }
}
const sortedProducts = products.sort(sortByField('price', 'desc'));
console.log(sortedProducts);

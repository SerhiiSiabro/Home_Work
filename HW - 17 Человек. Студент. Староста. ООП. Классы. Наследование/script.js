class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname
    }

    welcome() {
        console.log(`Hi! I'm ${this.name} ${this.surname}`)
    }
}

class Student extends Person {
    constructor (name, surname, faculty, marks) {
        super(name, surname);
        this.name = name;
        this.surname = surname;
        this.faculty = faculty;
        this.marks = marks;
    }
    
    IfNoMark() {
        if (this.marks.length === 0) {
          console.log('Студент не має оцінок.');
          return false;
        }
        return true;
    }

    getAvgMark() {
        if (!this.IfNoMark()) {
            return 0;
        }
        const sum = this.marks.reduce((accumulator, mark) => accumulator + mark, 0);
        return (`средня оцінка студента: ${sum / this.marks.length}`);
        
    };
    getMedianMark() {
        if (!this.IfNoMark()) {
          return 0;
        }
        const sortedMarks = this.marks.slice().sort((a, b) => a - b);
        const middle = Math.floor(sortedMarks.length / 2);
        if (sortedMarks.length % 2 === 0) {
          return (`медіанна оцінка студента: ${(sortedMarks[middle - 1] + sortedMarks[middle]) / 2}`);
        } else {
          return (`медіанна оцінка студента: ${sortedMarks[middle]}`);
        }
    };
    getMaxMark() {
        if (!this.IfNoMark()) {
          return 0;
        }
        return `максимальна оцінка: ${Math.max(...this.marks)}`
    };
    
    getMinMark() {
        if (!this.IfNoMark()) {
          return 0;
        }
        return `мінімальна оцінка: ${Math.min(...this.marks)}`
    };
    
    getTotal() {
        return `сума оцінок: ${this.marks.reduce((accumulator, mark) => accumulator + mark, 0)}`;
    };
    
    getInfo() {
        return `Name: ${this.name};\nFaculty: ${this.faculty};\nMarks: ${this.marks}`
    }
}

class Headman extends Student {
    constructor (name, surname, faculty, marks) {
        super(name, surname, faculty, marks);
        this.name = name;
        this.surname = surname;
    }
    defendGroup() {
        console.log(`This is my group. I'm their hero!`);
    }
}

const person = new Person('John', 'Smith');
person.welcome(); // Hi! I'm John Smith

const student = new Student('Jane', 'Smith', 'Faculty of History', [1, 20, 30, 95, 35, 47, 4]);
student.welcome(); // Hi! I'm Jane Smith
console.log(student.getAvgMark()); // средняя оценка студента
console.log(student.getMedianMark()); // медианная оценка студента
console.log(student.getMaxMark()); // максимальная оценка
console.log(student.getMinMark()); // минимальная оценка
console.log(student.getTotal()); // сумма оценок
console.log(student.getInfo()); // информация о студенте в виде name + faculty + total

const headman = new Headman('Bruce', 'Smith', 'Law Department', [35, 47, 99, 8, 91, 20, 30, 99,]);
headman.welcome(); // Hi! I'm Bruce Smith
headman.defendGroup(); // This is my group. I'm their hero!
console.log(headman.getAvgMark()); // средняя оценка студента
console.log(headman.getMedianMark()); // медианная оценка студента
console.log(headman.getMaxMark()); // максимальная оценка
console.log(headman.getMinMark()); // минимальная оценка
console.log(headman.getTotal()); // сумма оценок
console.log(headman.getInfo()); // информация о студенте в виде name + faculty + total
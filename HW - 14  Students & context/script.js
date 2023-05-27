function Student(name, faculty, marks) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;

  this.IfNoMark = function () {
    if (this.marks.length === 0) {
      console.log('Студент не має оцінок.');
      return false;
    }
    return true;
  }

  this.getAvgMark = function () {
    if (!this.IfNoMark()) {
      return 0;
    }
    const sum = this.marks.reduce((accumulator, mark) => accumulator + mark, 0);
    return (`средня оцінка студента: ${sum / this.marks.length}`);
  };

  this.getMedianMark = function () {
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

  this.getMaxMark = function () {
    if (!this.IfNoMark()) {
      return 0;
    }
    return `максимальна оцінка: ${Math.max(...this.marks)}`
  };

  this.getMinMark = function () {
    if (!this.IfNoMark()) {
      return 0;
    }
    return `мінімальна оцінка: ${Math.min(...this.marks)}`
  };

  this.getTotal = function () {
    return `сума оцінок: ${this.marks.reduce((accumulator, mark) => accumulator + mark, 0)}`;
  };

  this.getInfo = function () {
    return `Name: ${this.name};\nFaculty: ${this.faculty};\nMarks: ${this.marks}`
  }
}

const student = new Student('John', 'Archeology', [1, 20, 30, 99, 35, 47, 4]);

console.log(student);
console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());
// // Методы
// student.getAvgMark(); // средняя оценка студента
// student.getMedianMark(); // медианная оценка студента
// student.getMaxMark(); // максимальная оценка
// student.getMinMark(); // минимальная оценка
// student.getTotal(); // сумма оценок
// student.getInfo(); // информация о студенте в виде name + faculty + total
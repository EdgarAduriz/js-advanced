//Esercizio 1
const person = { name: "Alice", age: 30 };
const {name, age} = person;
console.log(name);
console.log(age)

//Esercizio 2
const student = {
    info: { nome: "Bob", età: 25 },
    grades: { math: 95, science: 89 }
  };
const {grades} = student;
const {nome, età} = student.info
console.log(nome);
console.log(età);
console.log(grades)

// Esercizio 3
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor)

// Esercizio 4
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b)

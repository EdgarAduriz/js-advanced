//Esercizio 3
const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];
fruits.forEach(fruit => console.log(fruit + "!"))

//Esercizio 1
function adultFilter(persons) {
return persons.filter(person => person.age >= 18)
} 
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);

//Esercizio 4
function nicknameMap(persone) {
  let soprannomi = [];
persone.forEach(persona => {
    soprannomi.push(persona.name + "-" + persona.age)
})
return soprannomi};  
const persone = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
const nicknames = nicknameMap(persone);
  console.log(persone);
  console.log(nicknames);

//Esercizio di riepilogo
const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
studenti.forEach(studente => console.log(studente.nome));
let x = studenti.find(studente => studente.voto >= 90);
console.log(x);
let sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto,0);
let mediaVoti = sommaVoti / studenti.length;
console.log(mediaVoti);
let maiuscoli = studenti.map(studente => studente.nome.toUpperCase());
console.log(maiuscoli)
let braviStudenti = studenti.filter(studente => studente.voto >= 85);
console.log(braviStudenti)

// Esercizio 5
function calculateAverageAge(people) {
 let sommaAge = people.reduce((acc, p) => acc + p.age, 0);
 let averageAge = Math.round(sommaAge / people.length);
 return averageAge
}
const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];
const average = calculateAverageAge(people);
console.log(people);
console.log(average)

// Esercizio 2
function firstUncompletedNote(notes) {
   return notes.find(note => note.todos.find(todo => todo.done === false))
}
const notes = [
  { id: 1,
    description: 'Workout program',
    todos: [
      { id: 1,
        name: 'Push ups - 10 x 3',
        done: true},
      { id: 2,
        name: 'Abdominals - 20 x 3',
        done: true},
      { id: 3,
        name: 'Tapis Roulant - 15min',
        done: true}
    ]},
  { id: 2,
    description: 'Front-end Roadmap',
    todos: [
      { id: 1,
        name: 'Learn HTML',
        done: true},
      { id: 2,
        name: 'Learn CSS',
        done: false},
      { id: 3,
        name: 'Learn JavaScript',
        done: true},
      { id: 4,
        name: 'Learn Angular',
        done: false}
    ]},
  { id: 3,
    description: 'My Movies Library',
    todos: [
      { id: 1,
        name: 'La città incantata',
        done: true},
      { id: 2,
        name: 'Avatar',
        done: true},
      { id: 3,
        name: 'Titanic',
        done: false}
    ]}
]
const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes); 
console.log('First note in progress: ', noteInProgress);
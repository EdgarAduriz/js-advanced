//Esercizio 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray)
//Esercizio 2
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = {...obj1, ...obj2}
console.log(mergedObject)
//Esercizio 3
const originalArray = [1, 2, 3, 4, 5];
const cloneArray = [...originalArray];
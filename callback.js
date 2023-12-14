//Esercizio 1
function doubleArray(arr, callback) {
    let numeriRaddoppiati = [];
    arr.forEach(num => {
        numeriRaddoppiati.push(callback(num)) 
    });
    return numeriRaddoppiati
  };
function doubleValue(num) {
    return num * 2
  };
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers);

//Esercizio 2
function delay(callback, delayTime) {
    setTimeout(() => {
    return callback()
   }, delayTime) };
   function sayHi() {
     console.log("Hi, there!")
   };
delay(sayHi, 2000)

//Esercizio 3
 function filterArray(arr, callback) {
    return callback(arr)
  };
function isEven(num) {
    let numeriPari = [];
    num.forEach(num => {
    if (num % 2 === 0) {
        numeriPari.push(num)
    }})
    return numeriPari
   };  
const numeri = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numeri, isEven);
console.log(evenNumbers)

//Esercizio 4
function runCallbacks(callbacks) {
    callbacks.forEach(callback => {
        callback()
      })
  };
function firstCallback() {
    return console.log("Prima callback")
  };
function secondCallback() {
    return console.log("Seconda callback")
  };
function thirdCallback() {
    return console.log("Terza callback")
  };
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);

//Esercizio 5
function performOperation(a, b, callback) {
    let sum = a + b;
    callback(sum)
  };
function displayResult(risultato) {
    console.log(risultato)
  };
performOperation(5, 3, displayResult)

//Esercizio 6
function fetchDataFromAPI(callback) {
    setTimeout(() => {
       let obj = { name: "John", age: 30 };
       callback(obj)
    }, 5000)
  };
function handleData(data) {
    console.log(data)
  };
fetchDataFromAPI(handleData)

 
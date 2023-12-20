// Esercizio 1
function somma(...argomenti) {
return argomenti.reduce((acc, argomento) => acc + argomento, 0)
};
let miaSomma = somma(3, 1, 3, 7, 4);
console.log(miaSomma)

// Esercizio 2
function filterOutOdds(...args) {
return args.filter(arg => arg % 2 === 0) }
let numeriPari = filterOutOdds(2, 3, 8, "Ciao", 9, 11, 13, 20, 5);
console.log(numeriPari)
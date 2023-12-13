// Esercizio 1
function somma(...argomenti) {
return argomenti.reduce((acc, argomento) => acc + argomento, 0)
};
let miaSomma = somma(3, 1, 3, 7, 4);
console.log(miaSomma)
// Esercizio 2
function filterOutOdds(...args) {
    let arr =[];
args.forEach(arg => {
    if (arg % 2 === 0) {
        arr.push(arg)
    }
})
return arr}
let numeriPari = filterOutOdds(2, 3, 8, "Ciao", 9, 11, 13, 20, 5);
console.log(numeriPari)
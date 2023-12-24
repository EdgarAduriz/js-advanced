//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.
function checkString(x) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (typeof x == 'string') {
    resolve('È`una stringa')
} else {reject('Non è una stringa')}
}, 2000)
})
};
const check = checkString(5).then((data) => (console.log(data))).catch((error) => (console.log(error)))
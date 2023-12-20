/*function fetchDataFromAPI(callback) {
    setTimeout(() => {
       let obj = { name: "John", age: 30 };
       callback(obj)
    }, 5000)
  };
function handleData(data) {
    console.log(data)
  };
fetchDataFromAPI(handleData)

Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
*/

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() =>  {
        let obj = { name: "John", age: 30 }
          if (obj) {
          resolve(obj)}
          else {resolve('Impossibile recuperare dati')}}, 1000)})};

fetchDataFromAPI().then((data) => {console.log(data)}).catch((error) => {console.log(error)})
  
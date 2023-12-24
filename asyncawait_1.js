/*La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!
Implementa la funzione ottieniDati utilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.*/

function caricamentoDati() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Questi sono i dati ottenuti dalla fonte asincrona.")
      }, 2000)
    })
  };
  
async function ottieniDati() {
    try {
console.log('Caricamento in corso...')
const x = await caricamentoDati()
console.log(x) }
catch(error) {
    console.error('Errore nel carimento dati: ', error)
}
};

ottieniDati()
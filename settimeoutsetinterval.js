//Esercizio 3
function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!")
  };
setTimeout(mostraPromemoria, 5000);
console.log("Il promemoria è in fase di impostazione")

//Esercizio 4
function dado(min, max) {
    return Math.floor(Math.random() * (max -min +1)) + min
  };
function lanciaDadi() {
let dado1 = dado(1,6);
let dado2 = dado(1,6);
setTimeout(function ()  {
   console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`)},
    1000);
console.log("Lancio dei dadi in corso...")}
lanciaDadi()

//Esercizio 1
function visualizzaOrologio() {
    const orarioCorrente = new Date();
    const ore = orarioCorrente.getHours();
    const minuti = orarioCorrente.getMinutes();
    const secondi = orarioCorrente.getSeconds();
    console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
  };
setInterval(visualizzaOrologio,1000)

//Esercizio 2
let tempoRimanente = 10;
function contoAllaRovescia() {
  console.log("Conto alla rovescia in corso...");
  const intervallo = setInterval(() => {
    tempoRimanente--;
    console.log(tempoRimanente)
    if (tempoRimanente <= 0) {
      console.log("Conto alla rovescia terminato");
      clearInterval(intervallo);
    }
  }, 1000);
}
contoAllaRovescia();

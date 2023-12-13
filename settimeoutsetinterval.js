//Esercizio 3
/*function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!")
  };
setTimeout(mostraPromemoria, 5000);
console.log("Il promemoria è in fase di impostazione")*/
//Esercizio 4
function dado1(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
function dado2(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
setTimeout(function lanciaDadi()  {
   console.log(`Lancio dei dadi: Dado 1 = ${dado1(1,6)}, Dado 2 = ${dado2(1,6)}`)},
    1000);
console.log("Lancio dei dadi in corso...")
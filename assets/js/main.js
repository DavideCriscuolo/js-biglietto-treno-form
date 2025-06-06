/*Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

*/

//Il numero di chilometri da percorrere

let choiseKmUser = Number(prompt("Quanti km vuoi percorrere?"));

console.log(choiseKmUser);

//Età del passeggero
let ageUser = Number(prompt("Quanti anni hai?"));
console.log(ageUser);

//calocare il prezzo del biglietto

function calcolaPrezzo(numeroKm, etauUser) {
  const priceKm = 0.21;
  const priceBiglietto = numeroKm * priceKm;
  const scontoMinorenni = (priceBiglietto * 20) / 100;
  const bliglietoMino = priceBiglietto - scontoMinorenni;
  const scontoOver = (priceBiglietto * 40) / 100;
  const bliglietoOver = priceBiglietto - scontoOver;
  if (etauUser < 18) {
    return bliglietoMino.toFixed(2);
  } else if (etauUser > 65) {
    return bliglietoOver.toFixed(2);
  } else {
    return `La tua èta non benifica di sconti e quindi il prezzp del biglietto è ${priceBiglietto.toFixed(
      2
    )}  `;
  }
}

console.log(calcolaPrezzo(choiseKmUser, ageUser));

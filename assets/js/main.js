/*Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

*/

//Il numero di chilometri da percorrere

const inputKmUserEl = document.getElementById("inputKmUser");
console.log(inputKmUserEl);
const inputKmUserElValue = inputKmUserEl.value;

//Età del passeggero
const inpuntAgeEl = document.getElementById("inpuntAge");
console.log(inpuntAgeEl);
const inpuntAgeElValue = inpuntAgeEl.value;

const formEl = document.querySelector("form");
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
    return `La tua èta non benificia di sconti e quindi il prezzp del biglietto è ${priceBiglietto.toFixed(
      2
    )}  `;
  }
}
let costoBligietto = calcolaPrezzo(inputKmUserElValue, inpuntAgeElValue);
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(inpuntAgeElValue);
  console.log(inputKmUserElValue);
  console.log(costoBligietto);
});

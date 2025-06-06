/*Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

*/
const viewKmEl = document.querySelector(".jurneyKm");
const viewFullNameEl = document.querySelector(".fullName");
const viewPriceEl = document.querySelector(".priceTicket");

//Il numero di chilometri da percorrere

const inputKmUserEl = document.getElementById("inputKmUser");
const inputFullNameEl = document.getElementById("inputFullName");
//Età del passeggero
const inpuntAgeEl = document.getElementById("inpuntAge");

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
    return `Il costo del tuo biglietto ammonta a  ${bliglietoMino.toFixed(
      2
    )} Euro`;
  } else if (etauUser > 65) {
    return `Il costo del tuo biglietto ammonta a  ${bliglietoOver.toFixed(
      2
    )} Euro`;
  } else {
    return `La tua età non benificia di sconti e quindi il prezzp del biglietto è ${priceBiglietto.toFixed(
      2
    )}  `;
  }
}

formEl.addEventListener("submit", function (e) {
  let inputKmUserElValue = Number(inputKmUserEl.value);
  let inpuntAgeElValue = Number(inpuntAgeEl.value);
  let inputFullName = inputFullNameEl.value;
  let costoBligietto = calcolaPrezzo(inputKmUserElValue, inpuntAgeElValue);

  e.preventDefault();
  console.log(inpuntAgeElValue);
  console.log(inputKmUserElValue);
  console.log(costoBligietto);
  viewKmEl.innerHTML = `Hai impostato ${inputKmUserElValue} km`;

  viewPriceEl.innerHTML = costoBligietto;
  viewFullNameEl.innerHTML = inputFullName;
});

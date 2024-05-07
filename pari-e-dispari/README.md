<!-- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. -->

- creo una variabile sceltaUtente e salvo il valore di un prompt
- creo una variabile numeroUtente e salvo il valore di un prompt

<!-- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). -->

- creo una funzione per generare un numero random:
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

<!-- Sommiamo i due numeri -->

- creo una variabile somma = numeroUtente + getRndInteger();

<!-- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) -->

function pariDispari(somma){
    SE (somma % 2 === 0){
        return "pari";
    } Altrimenti {
        return "dispari";
    }
}

<!-- Dichiariamo chi ha vinto. -->
SE (pariDispari(somma) === sceltaUtente) {
    console.log('Hai vinto contro il computer');
} Altrimenti {
    console.log('Ha vinto il computer');
}
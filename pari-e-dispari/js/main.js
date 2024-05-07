'use strict';

// Dati di input 
let sceltaUtente = prompt('Scegli pari o dispari?').toLowerCase();
console.log('Hai scelto:', sceltaUtente);
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Questo è il numero che hai inserito.', numeroUtente);

// Funzione genera numero intero
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Somma numero inserito con numero generato da 1 a 5
let somma = numeroUtente + getRndInteger(1,5);
console.log('Questo è il risultato dei vostri numeri sommati:', somma);

// Funzione che verifica se resto della somma è pari o dispari
function pariDispari(somma){
    if (somma % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}

// Condizione finale
if (pariDispari(somma) === sceltaUtente) {
    console.log('Hai vinto contro il computer');
} else {
    console.log('Ha vinto il computer');
}
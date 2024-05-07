'use strict';

const sceltaUtente = prompt('Scegli pari o dispari?');
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let somma = numeroUtente + getRndInteger(1,5);
console.log(somma);

function pariDispari(somma){
    if (somma % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}

if (pariDispari(somma) === sceltaUtente) {
    console.log('Hai vinto contro il computer');
} else {
    console.log('Ha vinto il computer');
}
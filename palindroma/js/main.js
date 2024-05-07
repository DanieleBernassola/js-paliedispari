'use strict';

function palindroma(parola){
    console.log(parola);
    let lunghezza = parola.length;
    console.log(lunghezza);
    for (let i = 0; i < lunghezza; i++){
        if (parola[i] === parola[lunghezza-i]){
            // console.log('La parola inserita è palindroma');
            return "La parola inserita è palindroma";
        } else {
            // console.log('La parola inserita non è palindroma')
            return "La parola inserita non è palindroma";
        }
    }
}

console.log(palindroma(prompt('Inserisci una parola')));
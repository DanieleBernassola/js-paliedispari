'use strict';

// Creo la funzione "palindroma" con parametro parola
function palindroma(parola){
    console.log('Hai inserito questa parola:', parola);
    // Creo una variabile lunghezza per semplificare
    let lunghezza = parola.length;
    console.log('Questa è la lunghezza della parola:', lunghezza);
    for (let i = 0; i < lunghezza; i++){
        if (parola[i] === parola[lunghezza-1-i]){
            // console.log('La parola inserita è palindroma');
            return "La parola inserita è palindroma";
        } else {
            // console.log('La parola inserita non è palindroma')
            return "La parola inserita non è palindroma";
        }
    }
}

// Uso console.log per mostrare il return della funzione e il prompt per inserire un valore al parametro parola
console.log(palindroma(prompt('Inserisci una parola')));
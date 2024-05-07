<!-- Chiedere all’utente di inserire una parola -->

- creo una variabile lunghezza in cui salvo il valore della lunghezza della parola

<!-- Creare una funzione per capire se la parola inserita è palindroma -->

function palindroma(parola){
    for (let i = 0; i < lunghezza; i++){
        SE (parola[i] === parola[lunghezza-1-i]){
            return "La parola inserita è palindroma";
        } Altrimenti {
            return "La parola inserita non è palindroma"
        }
    }
}

- creo una variabile parola e salvo il valore di un prompt palindroma(prompt())
- console.log(palindroma(prompt())); in modo da mostrare il return in console
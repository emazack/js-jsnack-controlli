 // L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

 // L'utente inserisce il primo numero che viene salvato
 var numero1 = parseInt(prompt("Inserisci primo numero"));
 // L'utente inserisce il secondo numero che viene salvato
 var numero2 = parseInt(prompt("inserisci secondo numero"));

 // piccolo debug di controllo
 console.log("questo è il numero 1: " + numero1);
 console.log("questo è il numero 2: " + numero2);

 // i due numeri vengono confrontati e esplicitiamo il risultato con il numero maggiore
 if (numero1 > numero2) {
   document.getElementById('grande').innerHTML = numero1;
 } else {
   document.getElementById('grande').innerHTML = numero2;
 }

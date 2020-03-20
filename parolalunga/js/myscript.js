// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// utente inserisce una parola che viene salvata
var parola1 = prompt("Inserisci una parola");

// utente inserisce una seconda parola che viene salvata
var parola2 = prompt("Inserisci un'altra parola");

// viene fatto un calcolo della parola più lunga e fornito il risultato

if (parola1.length > parola2.length) {
  document.getElementById('parola').innerHTML = parola1 + " è la parola più grande"
} else {
  document.getElementById('parola').innerHTML = parola2 + " è la parola più grande"
}

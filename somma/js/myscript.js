//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// Chiedi un numero per cinque volte e salvalo da parte
var num1 = parseInt(prompt("Inserisci il numero 1"));
var num2 = parseInt(prompt("Inserisci il numero 2"));
var num3 = parseInt(prompt("Inserisci il numero 3"));
var num4 = parseInt(prompt("Inserisci il numero 4"));
var num5 = parseInt(prompt("Inserisci il numero 5"));

// effettua il calcolo della somma di tutti i numeri e mostra il risultato
var somma = num1 + num2 + num3 + num4 + num5;

document.getElementById('somma').innerHTML = somma;

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In javascript sono presenti 5 datatype primitivi:
    1. Stringhe: è una sequenza di caratteri delimitati da apici singoli (') o doppi (");
                 Non è importante il tipo di apice che si decide di utilizzare, ma è importante utilizzare lo stesso tipo di apice sia in apertura che in chiusura ('nome' ok, "nome" ok, 'nome" no);
                 Per parole con l'apostrofo all'interno della stringa con singolo apico, l'apostrofo dovrà essere preceduto dal carattere speciale \ (es: 'l\'altro giorno')
                 Per parole con doppi apici all'interno della stringa con doppio apice, i doppi apici all'interno dovranno essere preceduti dal carattere speciale \ (es: "questa è una \"stringa\"")
                  var miaVariabile = 'nome'
                  var miaVariabile = "nome"

                 

     2. Numeri: il carattere è un dato numerico (decimale, intero, negativo). 
                Qui non vi è bisogno di apici : var interoPositivo = 123; 
                                                var interoDecimale = 12.34; (il punto fa da separatore per la parte decimale)
                                                var interoNegativ = -123;
                NaN not a number -> è un valore speciale di javascript che indica un valore numerico non definito.

    3. Boolean: i soli valori possibili sono true|false (vero o falso)

    4. Null:    Prevede un solo valore possibile: null -> non rientra nei precedenti tipi di dato
                var x = null;
                null è diverso da 0, null è diverso da stringa vuota.

    5. Undefined: Prevede un solo valore: undefined. 
                  Rappresenta un valore che non esiste. Non ha assegnato nessun valore (nemmeno null);
                  var miaVariabile;  undefined

  ed un tipo di dato complesso:
    - Oggetto: qualsiasi altro elemento previsto dal linguaggio (array, funzioni ecc,)
               Negli oggetti noi possimo inserire proprietà (attributo/valore) e/o metodi (funzioni)
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = "Davide";
console.log(name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);

let a = 12;
console.log ((a += 20));

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// const name= "Davide";
// var name = "Giovanazzi";
// console.log(name);






/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log ((x -= 4));

var x = 12;
var numero4 = 4;
console.log(x - numero4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";

(name1 != name2) ? console.log("stringhe diverse") : console.log("stringhe uguali");      // prima metto la condizione (name1 diverso da name2) e poi le metto a confronto;
(name1 == name2.toLowerCase()) ? console.log("sono uguali") : console.log("sbagliato)");  //con .toLowerCase() le lettere di name2 diventano tutte miniscole.


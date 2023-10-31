/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if else if else) console
*/

var num1 = 20;
var num2 = 10;
if(num1 > num2) {
  console.log("num1 è maggiore di num2");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

var num3 = 6;
if(num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente 
  divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// divisbile -> resto % 
  */

var num4 = 25;
if(num4%5 == 0) {
  console.log("divisibile per 5");
}

// Come si fa il modulo/resto % ???????

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi 
  sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// if (serie di condizioni if -> la verifica === )
  */

var num5 = 5;
var num6 = 3;

if(num5, num6 == 8) {
  console.log("uno tra num5 e num 6 è uguale a 8");
} else if(num5 + num6 == 8) {
  console.log("la somma di num5 e num6 è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione 
  gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia aggiungo le spese
*/

var totalShoppingCart = 45;
const spedizione = 10;

if(totalShoppingCart <= 50) {
  var pagamento_totale = totalShoppingCart + spedizione;
} else {
  var pagamento_totale = totalShoppingCart;
}

console.log("carrello: " + pagamento_totale);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quello sopra (sconto * 0.8)
  */

const sconto = 0.8;
if(totalShoppingCart < 40) {
  var pagamento_totale = totalShoppingCart;
} else {
  var pagamento_totale = totalShoppingCart * sconto;
}

console.log("carrello: " + pagamento_totale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

var a = 5;
var b = 1;
var c = 3;

if(a > b) {
  if( b > a) {
    console.log(a,b,c);
  } else if(c > a) {
    console.log(c,a,b);
  } else {
    console.log(a,c,b);
  }
} else if(b > c) {
  if(c > a){
    console.log(b,c,a);
  } else {
    console.log(b, a, c);
  }
} else {
  console.log(b,c,a);
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
  */

var pippo = 34;


console.log(typeof pippo);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
  */

if(pippo%2 == 0) {
  messaggio = pippo + " è pari";
} else if(pippo%2 == 1) {
  messaggio = pippo +" è dispari";
}

console.log(messaggio);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/*
let val = 7
if (val < 8) {
    console.log("Meno di 10");
  } else if (val > 5) {
    console.log("Maggiore di 5");
  } else(val + 3); {
    console.log("Uguale a 10 o maggiore");
  }
*/

let val = 7
if (val < 8) {
    console.log("Meno di 10");
  } 
if (val > 5) {
    console.log("Maggiore di 5");
  } 
if(val + 3); {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
  */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array -> rimuovere l'ultimo elemento
  */
me.skills.pop

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodi array -> inserire qualcosa nell'array
*/

const numeri = [];

numeri.push('2', '5', '7', '10');



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

/* SCRIVI QUI LA TUA RISPOSTA */

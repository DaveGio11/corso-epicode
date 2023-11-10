/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('ES. A ');
let sum = 10 + 20;
console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('ES. B');
let random = Math.floor(Math.random()*21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti 
  proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('ES. C')
const me = {
  name: 'Davide',
  surname: 'Giovanazzi',
  age: '30'
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('ES. D');
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato 
  un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('ES. E');
 me.skills = ['html', 'css', 'javascript no, a js faccio schifo']
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('ES. F');
let nuovoElemento = 'nessuno';
me.skills.push(nuovoElemento);
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('ES. G');
me.skills.pop();
console.log('ES. E');
console.log(me);



// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('ES. 1')

const dice = function () {
  dado = Math.floor(Math.random() * 6 + 1)
  return dado
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('ES. 2')
let x= 10;
let y= 20;
const whoIsBigger = function (x, y) {
  if(x > y) {
    console.log('10');
  } else {
    console.log('20')
  }
}
whoIsBigger()

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('ES 3');
function splitMe(string) {
  let array = string.split(" ");
  return array;
}
console.log(splitMe('Non mi ricodo nulla, porca m****'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('ES 4');
function deleteOne(stringa, deleteFirst) {
  if (deleteFirst === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

var result1 = deleteOne("Gianni", true);
console.log("4 " + result1);

var result2 = deleteOne("Gianni", false);
console.log("4 " + result2);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
 
console.log('ES. 5');
const onlyLetters = function (){
  const conNumeri= 'ci son 3 coccodrilli'
  const senzaNumeri = conNumeri.replace(/\d/g,"")
  return senzaNumeri
}
console.log(onlyLetters());


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e 
  ritorna true se la stringa è un valido indirizzo email.
*/

console.log('ES 6');
let requestEmail = 'mario.rossi@gmail.com';
const isThisAnEmail = function (mail) {
  if(mail.includes("@" && ".")) {
    console.log(requestEmail + ' valid email')
  } else {
    console.log(requestEmail + ' email not valid')
  }
}
isThisAnEmail(requestEmail);


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('ES 7');

const whatDayIsIt = function () {
  let giorniSettimana = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledì', 'Giovedì', 'Venerdi', 'Sabato']
  let data = new Date();
  giorno = data.getDay();
  return giorniSettimana[giorno];
}
console.log(whatDayIsIt());
whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un 
  oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con 
  tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('ES 8');
// const dice = function () {
//   dado = Math.floor(Math.random() * 6 + 1)
//   return dado
// }
// console.log(dice())

let rollTheDices = function (numero) {
  let nuovoArray = [];
  let addizione = 0;
  for(i=0; i<numero; i++) {
    let x = dice();
    nuovoArray.push(x);
    addizione += x;
  }
  let oggetto = {somma: addizione, lista: nuovoArray};
  return oggetto;
}
console.log(rollTheDices())
  




/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('ES. 9');

const howManyDays = function() {
  let date = new Date();
  let dataVecchia = new Date('11.06.2023');
  let differenzaInMillisecondi = date - dataVecchia;
  let differenzaGiorni = Math.floor(differenzaInMillisecondi/ (1000*60*60*24));
  
  return differenzaGiorni;

}
console.log(howManyDays())

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('ES. 10');




const isTodayMyBirthday = function () {
  let dataCompleanno = new Date('23/06/1993');
  let data= new Date('10/11/2023');
  let giornoCorrente = data.getDate();
  let meseCorrente = data.getMonth();
  let giornoCompleanno = dataCompleanno.getDate();
  let meseCompleanno = dataCompleanno.getMonth();
  
  
  if(giornoCompleanno == giornoCorrente && meseCompleanno == meseCorrente) {
    console.log('oggi è il tuo compleanno');
    return true;
  } else {
    console.log('oggi non è il tuo compleanno');
    return false;
  }
}
isTodayMyBirthday()



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('ES 12')

const newestMovie = (array) => {
  let result = { Year: 1000 }
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (currentYear > result.Year) {
      result = movie
    }
  })

  return result
}

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('ES 13')

const countMovies = (array) => {
  return array.length
}

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film 
  contenuti nell'array "movies" fornito.
*/

console.log('ES 14')

const onlyTheYears = () => {
  let onlyYears = [];
  for(i=0; i<movies.length; i++) {
    let y = movies[i].Year
    onlyYears.push(y);
    console.log(onlyYears);
  }
}
onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio 
  scorso contenuti nell'array "movies" fornito.
*/

console.log('ES 15');

const onlyInLastMillennium = movies.filter(function(element){
  return element.Year < 2000;
});
console.log(onlyInLastMillennium);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati 
  prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('ES 16');

const sumAllTheYears = function () {
  let somma = movies.reduce((acc, object) => acc + parseInt(object.Year), 0);
  
  return somma;
}
console.log(sumAllTheYears(movies));
sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film 
  nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('ES 17');

const searchByTitle = function (ciao) {
  let filmCercato = movies.filter(movie => movie.Title.toLowerCase().includes(ciao.toLowerCase()));
  return filmCercato;
}
let filmTrovato = searchByTitle('Avengers: Infinity War');
console.log(filmTrovato)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna 
  un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita 
  all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('ES. 18');
const searchAndDivide = function (cerca) {
  let match = [];
  let unMatch = [];
  for(i=0; i<movies.length; i++) {
    let titolo= movies[i].Title;
    let risultatoTrovato = movies[i];
    if(titolo.includes(cerca)) {
      match.push(risultatoTrovato);
    } else {
      match.push(cerca);
    }
  }
  let nuovoOggetto ={match:'match', unMatch:'unMatch'};
  return nuovoOggetto;
}
console.log(searchAndDivide());

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" 
  fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('ES 19');

const removeIndex = function (numero) {
  if(numero>=0 && numero.length) {
    let risultante = movies.filter((movie,index) => index !== numero);
    return risultante;
  } else {
    return movies;
  }
}
console.log(removeIndex());

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById('container');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const pippo = document.querySelectorAll('td');

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const pluto = function () {
  let p = document.getElementsByTagName('td');
  for(i=0; p.length; i++) {
    p[i].innerText
  }
}
pluto();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const paperone = function () {
  let a = document.getElementsByTagName('a');
  for(i=0; a.length; i++) {
    a[i].style.backgroundColor='red';
  }
}
pluto();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const paperino = function () {
  let c = document.getElementsById('myList');
  let x = document.createElement('li')
  c.appendChild(x)
  }
pluto();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero 
  di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

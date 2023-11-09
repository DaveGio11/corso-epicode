// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate


// const tabellone = document.getElementById('tabellone');
// const table = document.createElement('table');
// table.setAttribute('border', '1');
// let numero = 1
// function newTab() {
//     for(let tr = 0; tr<10; tr++) {
//         const newTr = document.createElement('tr');
//         for(let td = 0; td<10; td++) {
//             const newTd = document.createElement('td');
//             newTd.textContent = numero;
//             newTr.appendChild(newTd);
//             numero++

//             if(numero > 99) {
//                 break;
//             }
//         }
//         table.appendChild(newTr);
//     }
//     table.appendChild(tabellone)
// }
// console.log(newTab);
// newTab();

const numeriTombola = [];
for (let i = 0; i < 90; i++) {
  numeriTombola.push(i + 1);
}

const tabellaTombola = document.createElement("table");
tabellaTombola.setAttribute("border", "1");
tabellaTombola.setAttribute("width", "100%");

for (let i = 0; i < 9; i++) {
  const colonna = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const cella = document.createElement("td");
    cella.textContent = numeriTombola[i * 10 + j];
    colonna.appendChild(cella);
  }
  tabellaTombola.appendChild(colonna);
}

document.body.appendChild(tabellaTombola);

const newPlaceholderNumber = document.createElement('input');
newPlaceholderNumber.type = 'number';
newPlaceholderNumber.setAttribute('width', '130px')
newPlaceholderNumber.setAttribute('margin', '25px')


const newNumberBtn = document.createElement('button')
newNumberBtn.innerHTML = "Genera un numero random"
newNumberBtn.onclick = function () {
    let randomNumber = Math.floor(Math.random()*90)+1;
    newPlaceholderNumber.value = randomNumber

}
document.body.appendChild(newPlaceholderNumber)

document.body.appendChild(newNumberBtn)









// function randomNumber() {
//     document.querySelectorAll('#tabellone td');
//     const newRandomNumbers = Math.floor(Math.random()*99)+1;
//     newRandomNumbers.forEach(td => {
//         if(parseInt(td.textContent)=== newRandomNumbers) {
//             td.classList.add('highlights');
//         } else {
//             td.classList.remove('highlights')
//         }
//     });
//     }
//     randomNumber();

    
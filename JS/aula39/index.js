/*
let i = 0;
let ip = 0;
const nome = 'Lipas';

while (ip < nome.length ) {
    console.log(nome[ip]);
    ip++;
} 

while (i <= 10 ) {
    console.log(i);
    i++;
} 
*/


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); 
}

let rand = random(1, 50);
console.log(rand)

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}// While primeiro checa a condição e depois executa o código

console.log('###################################');

do {
    rand = random(1, 50);
    console.log(rand);
} while (rand !== 10);
// Do While executa o código primeiro, e depois checa a condição

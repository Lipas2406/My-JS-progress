
// Entendendo a lógica do objeto _Date_: 

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 ** 2 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); //   01/01/1970 Timestap unix ou Época unix

// const data = new Date(2019, 3, 20, 15, 14, 27);

/*
const data = new Date(1720321022873);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Jan = 0 -> Dez = 11
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('mS', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // Dom = 0 -> Sab = 6
// console.log(Date.now());
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; 
}

function formaData (data) {
    const dia = data.zeroAEsquerda(getDate());
    const mes = data.zeroAEsquerda(getMonth() + 1);
    const ano = data.zeroAEsquerda(getFullyear());
    const hora = data.zeroAEsquerda(getHours());
    const min = data.zeroAEsquerda(getMinutes());
    const seg = data.zeroAEsquerda(getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`}

const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);
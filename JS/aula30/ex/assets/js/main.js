// Solução 1:
// const h1 = document.querySelector('#texto');
// const data = new Date();

// function getWeekDayText(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//     }
// }

// function getNomeMes(numeroMes) {
//     let textoMes;

//     switch (numeroMes) {
//         case 0:
//             textoMes = 'janeiro';
//             return textoMes;
//         case 1:
//             textoMes = 'fevereiro';
//             return textoMes;
//         case 2:
//             textoMes = 'março';
//             return textoMes;
//         case 3:
//             textoMes = 'abril';
//             return textoMes;
//         case 4:
//             textoMes = 'maio';
//             return textoMes;
//         case 5:
//             textoMes = 'junho';
//             return textoMes;
//         case 6:
//             textoMes = 'julho';
//             return textoMes;
//         case 7:
//             textoMes = 'agosto';
//             return textoMes;
//         case 8:
//             textoMes = 'setembro';
//             return textoMes;
//         case 9:
//             textoMes = 'outubro';
//             return textoMes;
//         case 10:
//             textoMes = 'novembro';
//             return textoMes;
//         case 11:
//             textoMes = 'dezembro';
//             return textoMes;
//         default:
//             textoMes = '';
//     }
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`; 
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getWeekDayText(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` + 
//         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`
//     );
// }

// h1.innerHTML = criaData(data);


//Solução 2:
// const h1 = document.querySelector('#texto');
// const data = new Date();

// function getWeekDayText(diaSemana) {
//     const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
//     return diasSemana [diaSemana];
// }

// function getNomeMes(numeroMes) {
//     const nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return nomeMes[numeroMes];
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`; 
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getWeekDayText(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` + 
//         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`
//     );
// }

// h1.innerHTML = criaData(data);


// Solução 3:
const h1 = document.querySelector('#texto');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
function getWeekDayText (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
        case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
        case 3:
        return diaSemanaTexto = 'Quarta';
        case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
        case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
        case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
}

const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto = getWeekDayText(diaSemana);

console.log(data, diaSemana, diaSemanaTexto);



// if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else {
//     diaSemanaTexto = '';
// }

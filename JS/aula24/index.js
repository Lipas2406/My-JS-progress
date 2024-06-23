/*
 Entre 0 - 11 -> Bom dia!
 Entre 12 - 17 -> Boa tarde!
 Entre 18 - 23 -> Boa noite!
 */

 // If -> Pode ser usado sozinho 
 // Else -> Sempre fará parte de um bloco If, só pode haver um na condição
 // Else if -> Podem haver vário na condição



// const hora = 24;

// if (hora >= 0 && hora <= 11) {
//     console.log ('Bom dia!');
//     console.log(1 + 3);
// } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarte!');
//     console.log(4 ** 2);
// } else if (hora >= 18 && hora <= 23) {
//     console.log('Boa noite!');
//     console.log(4 ** 5 - (5 * 12 - (3.14 ** 4 - 7) / (11 * 5 - 6 + 14) + 2));
// } else {
//     console.log('Para de me mandar fazer conta. É rápido, mas é chato.')
// };

const chuva = true;

console.log('Eu vou sair?');
if (chuva) {
    console.log('Não');
} else {
    console.log('Sim');
}
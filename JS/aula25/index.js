

// if (numero >= 0 && numero <= 5 && Number.isInteger(numero / 2)) {
//     console.log('O número está entre 0 e 5 e é divisível por 2');
// } else {
//     console.log('O número PODE OU NÃO estar entre 0 e 5, mas não é divisível por 2');
// };

// if (numero >= 0 && numero <= 5 && Number.isInteger(numero / 2)) {
//     console.log('O número está entre 0 e 5 e é divisível por 2');
// } else if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5, mas não é divisível por 2');
// } else if (Number.isInteger(numero / 2)) {
//     console.log('O número NÃO está entre 0 e 5, mas é divisível por 2');
// } else {
//     console.log('O número NÃO está entre 0 e 5 e NÃO é divisível por 2');
// } 

// caso eu queria estabelecer uma condição a mais sem afetar a primera:

// if (numero ** 2 >= 16 && numero ** 2 <= 36) {
//     console.log('O número está entre 4 e 6');
// } else {
//     console.log('O número NÃO está entre 4 e 6');
// }

// para mesclar as duas condições:

const numero = 15;

if (numero >= 0 && numero <= 5 && Number.isInteger(numero / 2) && numero ** 2 >= 16 && numero ** 2 <= 36) {
    console.log('Atende a todos os requisitos: O número está entre 0 e 5, é divisível por 2 e está entre 4 e 6'); // 4
} else if (numero >= 0 && numero <= 5 && Number.isInteger(numero / 2)) {
    console.log('O número está entre 0 e 5 e é divisível por 2, mas NÃO está entre 4 e 6'); // 2
} else if (Number.isInteger(numero / 2) && numero ** 2 >= 16 && numero ** 2 <= 36) {
    console.log('O número NÃO está entre 0 e 5, mas é divisível por 2 e está entre 4 e 6'); // 6
} else if (numero >= 0 && numero <= 5 && numero ** 2 >= 16 && numero ** 2 <= 36) {
    console.log('O número está entre 0 e 5 e está entre 4 e 6, mas NÃO é divisível por 2'); // 5
} else if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5, mas NÃO é divisível por 2 e NÃO está entre 4 e 6'); // 3 ou 1
} else if (Number.isInteger(numero / 2)) {
    console.log('O número NÃO está entre 0 e 5 e NÃO está entre 4 e 6, mas é divisível por 2'); // 3 ou 1
} else {
    console.log('Não atende a qualquer um dos requisitos: O número NÃO está entre 0 e 5, NÃO é divisível por 2 e NÃO está entre 4 e 6'); // 7 ou outros números primos
} 

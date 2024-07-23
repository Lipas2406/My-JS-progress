const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
        
//     if (numero === 2) {
//         console.log('Pulei o 2');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7) {
//         console.log('Número encontrado, obrigado. ')
//         break;
//     }

// }

const getRandomNumber = () => Math.floor(Math.random() * 101);

function generateNumbers() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    return randomNumber;
}

// Testando a função
generateNumbers();


// continue -> continua para a próxima interação
// break -> sai do laço
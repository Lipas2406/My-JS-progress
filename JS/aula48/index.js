
// A função definida com a palavra 'function' tem um termo especial chamado 'arguments' que sustenta todos os argumentos enviados.
/*
function funcao(a, b, c) {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos
    }

    console.log(total, a, b, c);
};
funcao(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); 
*/
/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); 
*/
/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 10);
// pulei o b, que tomou o valor padrão
*/
/*
function funcaoObject({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
} 
funcaoObject({nome: 'Lipas', sobrenome: 'Alfredo', idade: 2});

function funcaoArray ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoArray(['Lipas', 'Alfredo', 2]);
*/

// function conta (operador, acumulador, ...numeros) {
//     for (let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador);
// }

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    console.log(arguments); // ainda funciona numa function expression
}    
conta('+', 0, 20, 30, 40, 50);
// 'arguments' só não funciona com ArrowFunction, e o parâmetro RestOparator funciona em todos.
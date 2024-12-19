// Reduce => sempre retorna um array, alterando os valores do array.


// Some todos os valores inteiros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    // if(valor % 2 === 0) acumulador.push(valor);
    // acumulador.push(valor * 2);
    return acumulador;
}, 0);
// console.log(total);





const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Lipas', idade : 18},
    { nome: 'Alfredo', idade : 22},
    { nome: 'Ana', idade : 48},
    { nome: 'Bartolomeu', idade : 75},
    { nome: 'Marcos', idade : 30},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor, indice, array){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);
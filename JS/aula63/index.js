// Filter => sempre retorna um array, com a amesma quantidade de elementos ou menos.


//Retorne os números maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;
// }

const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Lipas', idade : 18},
    { nome: 'Alfredo', idade : 22},
    { nome: 'Ana', idade : 48},
    { nome: 'Bartolomeu', idade : 75},
    { nome: 'Marcos', idade : 30},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMais30 = pessoas.filter(obj => obj.idade >= 30);
const pessoasDeFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasDeFinalA); 
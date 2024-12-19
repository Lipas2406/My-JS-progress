// Map => sempre retorna um array, alterando os valores do array.


//Dobre os valores:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobraNumeros = numeros.map(valores => valores * 2);
// console.log(dobraNumeros);


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Lipas', idade : 18},
    { nome: 'Alfredo', idade : 22},
    { nome: 'Ana', idade : 48},
    { nome: 'Bartolomeu', idade : 75},
    { nome: 'Marcos', idade : 30},
];
const nome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({ idade: obj.idade }));

// alterando o objeto original:
const ids = pessoas.map(function(obj, indice) {
    obj.id = indice + 1;
    return obj;
})

// não alterando o objeto original: 
const newIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    // delete obj.nome;
    // delete obj.idade;
    return newObj;
});
console.log(ids);
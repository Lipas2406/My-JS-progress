const nome1 = ['Lipas', 'Alfredo', 'Bartolomeu', '####'];
const pessoa = {
    nome: 'Lipas',
    sobrenome: 'Alfredo',
    idade: 7,
    cidade: 'UmLugarAê'
}


/* // -> Objetos 
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
*/

/* // -> Arrays
for (let i = 0; i < nome1.length; i++) {
    console.log(nome1[i]);
}

for (i in nome1) {
    console.log(nome1[i]);
}

for (let valor of nome1) {
    console.log(valor);
}

nome1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
*/


// For clássico - Geralmente com iteráveis (arrays ou strings)
// For In - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si das iteráveis (arrays ou strings)
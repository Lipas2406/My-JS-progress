/* // -> Para Arrays:
//                0        1      2        3         4         5        6        
const frutas = ['Pera', 'Maça', 'Uva', 'Banana', 'Laranja', 'Manga', 'Limão'];

// for in -> lê os índices ou chaves do objeto
for (let i in frutas) {
    console.log(i);
    console.log(frutas[i]);
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
*/



// -> Para Objetos:
const pessoa = {
    nome: 'Lipas',
    sobrenome: 'Alfredo',
    idade: 7,
    cidade: 'UmLugarAê'
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}